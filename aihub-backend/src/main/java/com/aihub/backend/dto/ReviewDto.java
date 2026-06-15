package com.aihub.backend.dto;

import java.time.LocalDateTime;

public class ReviewDto {
    private Long id;
    private Long userId;
    private String userName;
    private Long toolId;
    private String toolName;
    private Integer rating;
    private String reviewText;
    private LocalDateTime createdAt;

    // No-ArgsConstructor
    public ReviewDto() {
    }

    // All-ArgsConstructor
    public ReviewDto(Long id, Long userId, String userName, Long toolId, String toolName, Integer rating, String reviewText, LocalDateTime createdAt) {
        this.id = id;
        this.userId = userId;
        this.userName = userName;
        this.toolId = toolId;
        this.toolName = toolName;
        this.rating = rating;
        this.reviewText = reviewText;
        this.createdAt = createdAt;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getToolId() {
        return toolId;
    }

    public void setToolId(Long toolId) {
        this.toolId = toolId;
    }

    public String getToolName() {
        return toolName;
    }

    public void setToolName(String toolName) {
        this.toolName = toolName;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    // Manual Builder implementation
    public static ReviewDtoBuilder builder() {
        return new ReviewDtoBuilder();
    }

    public static class ReviewDtoBuilder {
        private Long id;
        private Long userId;
        private String userName;
        private Long toolId;
        private String toolName;
        private Integer rating;
        private String reviewText;
        private LocalDateTime createdAt;

        public ReviewDtoBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public ReviewDtoBuilder userId(Long userId) {
            this.userId = userId;
            return this;
        }

        public ReviewDtoBuilder userName(String userName) {
            this.userName = userName;
            return this;
        }

        public ReviewDtoBuilder toolId(Long toolId) {
            this.toolId = toolId;
            return this;
        }

        public ReviewDtoBuilder toolName(String toolName) {
            this.toolName = toolName;
            return this;
        }

        public ReviewDtoBuilder rating(Integer rating) {
            this.rating = rating;
            return this;
        }

        public ReviewDtoBuilder reviewText(String reviewText) {
            this.reviewText = reviewText;
            return this;
        }

        public ReviewDtoBuilder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public ReviewDto build() {
            return new ReviewDto(id, userId, userName, toolId, toolName, rating, reviewText, createdAt);
        }
    }
}
