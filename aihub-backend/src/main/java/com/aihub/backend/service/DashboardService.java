package com.aihub.backend.service;

import com.aihub.backend.dto.AiToolDto;
import com.aihub.backend.dto.DashboardResponse;
import com.aihub.backend.entity.User;
import com.aihub.backend.exception.ResourceNotFoundException;
import com.aihub.backend.repository.FavoriteRepository;
import com.aihub.backend.repository.ReviewRepository;
import com.aihub.backend.repository.ToolViewRepository;
import com.aihub.backend.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DashboardService {

    private final FavoriteRepository favoriteRepository;
    private final ReviewRepository reviewRepository;
    private final ToolViewRepository toolViewRepository;
    private final UserRepository userRepository;
    private final RecommendationService recommendationService;

    public DashboardService(FavoriteRepository favoriteRepository, ReviewRepository reviewRepository,
                            ToolViewRepository toolViewRepository, UserRepository userRepository,
                            RecommendationService recommendationService) {
        this.favoriteRepository = favoriteRepository;
        this.reviewRepository = reviewRepository;
        this.toolViewRepository = toolViewRepository;
        this.userRepository = userRepository;
        this.recommendationService = recommendationService;
    }

    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Logged in user not found"));
    }

    @Transactional(readOnly = true)
    public DashboardResponse getDashboardData() {
        User user = getCurrentUser();

        long favoritesCount = favoriteRepository.countByUserId(user.getId());
        long reviewsCount = reviewRepository.countByUserId(user.getId());
        long viewsCount = toolViewRepository.countByUserId(user.getId());
        
        List<AiToolDto> recommended = recommendationService.getRecommendations();

        return DashboardResponse.builder()
                .favorites(favoritesCount)
                .reviews(reviewsCount)
                .recentViews(viewsCount)
                .recommendedTools(recommended)
                .build();
    }
}
