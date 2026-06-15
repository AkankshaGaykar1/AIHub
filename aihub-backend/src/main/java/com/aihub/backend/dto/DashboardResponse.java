package com.aihub.backend.dto;

import java.util.List;

public class DashboardResponse {
    private long favorites;
    private long reviews;
    private long recentViews;
    private List<AiToolDto> recommendedTools;

    // No-ArgsConstructor
    public DashboardResponse() {
    }

    // All-ArgsConstructor
    public DashboardResponse(long favorites, long reviews, long recentViews, List<AiToolDto> recommendedTools) {
        this.favorites = favorites;
        this.reviews = reviews;
        this.recentViews = recentViews;
        this.recommendedTools = recommendedTools;
    }

    // Getters and Setters
    public long getFavorites() {
        return favorites;
    }

    public void setFavorites(long favorites) {
        this.favorites = favorites;
    }

    public long getReviews() {
        return reviews;
    }

    public void setReviews(long reviews) {
        this.reviews = reviews;
    }

    public long getRecentViews() {
        return recentViews;
    }

    public void setRecentViews(long recentViews) {
        this.recentViews = recentViews;
    }

    public List<AiToolDto> getRecommendedTools() {
        return recommendedTools;
    }

    public void setRecommendedTools(List<AiToolDto> recommendedTools) {
        this.recommendedTools = recommendedTools;
    }

    // Manual Builder implementation
    public static DashboardResponseBuilder builder() {
        return new DashboardResponseBuilder();
    }

    public static class DashboardResponseBuilder {
        private long favorites;
        private long reviews;
        private long recentViews;
        private List<AiToolDto> recommendedTools;

        public DashboardResponseBuilder favorites(long favorites) {
            this.favorites = favorites;
            return this;
        }

        public DashboardResponseBuilder reviews(long reviews) {
            this.reviews = reviews;
            return this;
        }

        public DashboardResponseBuilder recentViews(long recentViews) {
            this.recentViews = recentViews;
            return this;
        }

        public DashboardResponseBuilder recommendedTools(List<AiToolDto> recommendedTools) {
            this.recommendedTools = recommendedTools;
            return this;
        }

        public DashboardResponse build() {
            return new DashboardResponse(favorites, reviews, recentViews, recommendedTools);
        }
    }
}
