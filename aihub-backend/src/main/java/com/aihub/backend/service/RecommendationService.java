package com.aihub.backend.service;

import com.aihub.backend.dto.AiToolDto;
import com.aihub.backend.entity.AiTool;
import com.aihub.backend.entity.User;
import com.aihub.backend.mapper.EntityMapper;
import com.aihub.backend.repository.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class RecommendationService {

    private final AiToolRepository aiToolRepository;
    private final FavoriteRepository favoriteRepository;
    private final ToolViewRepository toolViewRepository;
    private final UserRepository userRepository;
    private final EntityMapper mapper;

    public RecommendationService(AiToolRepository aiToolRepository, FavoriteRepository favoriteRepository,
                                 ToolViewRepository toolViewRepository, UserRepository userRepository,
                                 EntityMapper mapper) {
        this.aiToolRepository = aiToolRepository;
        this.favoriteRepository = favoriteRepository;
        this.toolViewRepository = toolViewRepository;
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated() || auth.getPrincipal().equals("anonymousUser")) {
            return null;
        }
        return userRepository.findByEmail(auth.getName()).orElse(null);
    }

    @Transactional(readOnly = true)
    public List<AiToolDto> getRecommendations() {
        User user = getCurrentUser();

        // If guest, recommend highly rated and popular tools
        if (user == null) {
            return getFallbackRecommendations();
        }

        // Get User's favorite categories from favorited tools & viewed tools
        Set<Long> favoriteCategoryIds = new HashSet<>();
        favoriteRepository.findByUserId(user.getId()).forEach(fav -> 
            favoriteCategoryIds.add(fav.getTool().getCategory().getId())
        );
        favoriteCategoryIds.addAll(toolViewRepository.findDistinctCategoryIdsViewedByUser(user.getId()));

        // Get User's favorited tool IDs and recently viewed tool IDs to exclude
        Set<Long> excludedToolIds = new HashSet<>();
        favoriteRepository.findByUserId(user.getId()).forEach(fav -> excludedToolIds.add(fav.getTool().getId()));
        excludedToolIds.addAll(toolViewRepository.findRecentlyViewedToolIdsByUser(user.getId(), PageRequest.of(0, 10)));

        List<AiTool> allTools = aiToolRepository.findAll();
        List<ScoredTool> scoredTools = new ArrayList<>();

        for (AiTool tool : allTools) {
            if (excludedToolIds.contains(tool.getId())) {
                continue; // Exclude favorited and recently viewed
            }

            double score = 0.0;

            // 1. Highly Rated score: up to 10 points
            score += tool.getRating() * 2.0;

            // 2. Favorite Categories match: 15 points
            if (favoriteCategoryIds.contains(tool.getCategory().getId())) {
                score += 15.0;
            }

            // 3. View Popularity score: 0.1 points per view
            long viewCount = toolViewRepository.countByToolId(tool.getId());
            score += viewCount * 0.1;

            scoredTools.add(new ScoredTool(tool, score));
        }

        // Sort by score desc
        scoredTools.sort((a, b) -> Double.compare(b.score, a.score));

        // Get top 8 recommendations
        List<AiTool> recommended = scoredTools.stream()
                .limit(8)
                .map(st -> st.tool)
                .collect(Collectors.toList());

        // Fallback if not enough candidates
        if (recommended.size() < 4) {
            return getFallbackRecommendations();
        }

        return recommended.stream()
                .map(mapper::toAiToolDto)
                .collect(Collectors.toList());
    }

    private List<AiToolDto> getFallbackRecommendations() {
        // Recommend top 8 highest rated tools in the system
        List<AiTool> allTools = aiToolRepository.findAll();
        allTools.sort((a, b) -> Double.compare(b.getRating(), a.getRating()));
        
        return allTools.stream()
                .limit(8)
                .map(mapper::toAiToolDto)
                .collect(Collectors.toList());
    }

    private static class ScoredTool {
        AiTool tool;
        double score;

        ScoredTool(AiTool tool, double score) {
            this.tool = tool;
            this.score = score;
        }
    }
}
