package com.aihub.backend.service;

import com.aihub.backend.dto.*;
import com.aihub.backend.entity.*;
import com.aihub.backend.exception.ResourceNotFoundException;
import com.aihub.backend.mapper.EntityMapper;
import com.aihub.backend.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AiToolService {

    private final AiToolRepository aiToolRepository;
    private final CategoryRepository categoryRepository;
    private final ReviewRepository reviewRepository;
    private final ToolViewRepository toolViewRepository;
    private final UserRepository userRepository;
    private final EntityMapper mapper;

    public AiToolService(AiToolRepository aiToolRepository, CategoryRepository categoryRepository,
                         ReviewRepository reviewRepository, ToolViewRepository toolViewRepository,
                         UserRepository userRepository, EntityMapper mapper) {
        this.aiToolRepository = aiToolRepository;
        this.categoryRepository = categoryRepository;
        this.reviewRepository = reviewRepository;
        this.toolViewRepository = toolViewRepository;
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    @Transactional(readOnly = true)
    public Page<AiToolDto> getTools(String search, String category, PricingType pricingType,
                                    Boolean apiSupported, Boolean mobileSupported, Pageable pageable) {
        Specification<AiTool> spec = AiToolSpecification.filterTools(search, category, pricingType, apiSupported, mobileSupported);
        Page<AiTool> page = aiToolRepository.findAll(spec, pageable);
        return page.map(mapper::toAiToolDto);
    }

    @Transactional
    public AiToolDto getToolById(Long id) {
        AiTool tool = aiToolRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("AI Tool not found with ID: " + id));

        // Increment view count / log view
        logToolView(tool);

        // Fetch metrics
        List<ReviewDto> reviews = reviewRepository.findByToolId(id).stream()
                .map(mapper::toReviewDto)
                .collect(Collectors.toList());
        Double averageRating = reviewRepository.getAverageRatingForTool(id).orElse(0.0);
        long viewCount = toolViewRepository.countByToolId(id);

        AiToolDto dto = mapper.toAiToolDto(tool);
        dto.setReviews(reviews);
        dto.setAverageRating(averageRating);
        dto.setViewCount(viewCount);
        return dto;
    }

    private void logToolView(AiTool tool) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = null;
        if (auth != null && auth.isAuthenticated() && !auth.getPrincipal().equals("anonymousUser")) {
            String email = auth.getName();
            currentUser = userRepository.findByEmail(email).orElse(null);
        }

        ToolView view = ToolView.builder()
                .tool(tool)
                .user(currentUser)
                .build();
        toolViewRepository.save(view);
    }

    @Transactional
    public AiToolDto createTool(AiToolRequest request) {
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with ID: " + request.getCategoryId()));

        AiTool tool = mapper.toAiTool(request);
        tool.setCategory(category);
        AiTool saved = aiToolRepository.save(tool);
        return mapper.toAiToolDto(saved);
    }

    @Transactional
    public AiToolDto updateTool(Long id, AiToolRequest request) {
        AiTool tool = aiToolRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("AI Tool not found with ID: " + id));

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with ID: " + request.getCategoryId()));

        tool.setName(request.getName());
        tool.setDescription(request.getDescription());
        tool.setCategory(category);
        tool.setWebsiteUrl(request.getWebsiteUrl());
        tool.setLogoUrl(request.getLogoUrl());
        tool.setPricingType(request.getPricingType());
        tool.setApiSupported(request.getApiSupported());
        tool.setMobileSupported(request.getMobileSupported());

        // Re-calculate rating average on update in case reviews exist
        Double avgRating = reviewRepository.getAverageRatingForTool(id).orElse(0.0);
        tool.setRating(avgRating);

        AiTool updated = aiToolRepository.save(tool);
        return mapper.toAiToolDto(updated);
    }

    @Transactional
    public void deleteTool(Long id) {
        if (!aiToolRepository.existsById(id)) {
            throw new ResourceNotFoundException("AI Tool not found with ID: " + id);
        }
        aiToolRepository.deleteById(id);
    }
}
