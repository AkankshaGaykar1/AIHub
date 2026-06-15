package com.aihub.backend.service;

import com.aihub.backend.dto.ReviewDto;
import com.aihub.backend.dto.ReviewRequest;
import com.aihub.backend.entity.*;
import com.aihub.backend.exception.DuplicateResourceException;
import com.aihub.backend.exception.ResourceNotFoundException;
import com.aihub.backend.mapper.EntityMapper;
import com.aihub.backend.repository.AiToolRepository;
import com.aihub.backend.repository.ReviewRepository;
import com.aihub.backend.repository.UserRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final AiToolRepository aiToolRepository;
    private final UserRepository userRepository;
    private final EntityMapper mapper;

    public ReviewService(ReviewRepository reviewRepository, AiToolRepository aiToolRepository,
                         UserRepository userRepository, EntityMapper mapper) {
        this.reviewRepository = reviewRepository;
        this.aiToolRepository = aiToolRepository;
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Logged in user not found"));
    }

    @Transactional
    public ReviewDto createReview(ReviewRequest request) {
        User user = getCurrentUser();
        AiTool tool = aiToolRepository.findById(request.getToolId())
                .orElseThrow(() -> new ResourceNotFoundException("AI Tool not found with ID: " + request.getToolId()));

        if (reviewRepository.findByUserIdAndToolId(user.getId(), tool.getId()).isPresent()) {
            throw new DuplicateResourceException("You have already reviewed this AI tool");
        }

        Review review = Review.builder()
                .user(user)
                .tool(tool)
                .rating(request.getRating())
                .reviewText(request.getReviewText())
                .build();

        Review saved = reviewRepository.save(review);

        // Update overall tool rating
        updateToolRating(tool);

        return mapper.toReviewDto(saved);
    }

    @Transactional(readOnly = true)
    public List<ReviewDto> getReviewsByToolId(Long toolId) {
        if (!aiToolRepository.existsById(toolId)) {
            throw new ResourceNotFoundException("AI Tool not found with ID: " + toolId);
        }
        return reviewRepository.findByToolId(toolId).stream()
                .map(mapper::toReviewDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public ReviewDto updateReview(Long id, ReviewRequest request) {
        User user = getCurrentUser();
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with ID: " + id));

        // Check ownership
        if (!review.getUser().getId().equals(user.getId())) {
            throw new AccessDeniedException("You can only modify your own reviews");
        }

        review.setRating(request.getRating());
        review.setReviewText(request.getReviewText());
        Review updated = reviewRepository.save(review);

        // Re-update overall tool rating
        updateToolRating(review.getTool());

        return mapper.toReviewDto(updated);
    }

    @Transactional
    public void deleteReview(Long id) {
        User user = getCurrentUser();
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with ID: " + id));

        // Allow owner or Admin
        boolean isAdmin = user.getRole() == UserRole.ROLE_ADMIN;
        boolean isOwner = review.getUser().getId().equals(user.getId());
        if (!isOwner && !isAdmin) {
            throw new AccessDeniedException("You do not have permission to delete this review");
        }

        AiTool tool = review.getTool();
        reviewRepository.delete(review);

        // Re-update overall tool rating
        updateToolRating(tool);
    }

    private void updateToolRating(AiTool tool) {
        Double avgRating = reviewRepository.getAverageRatingForTool(tool.getId()).orElse(0.0);
        tool.setRating(avgRating);
        aiToolRepository.save(tool);
    }
}
