package com.aihub.backend.dto;

import com.aihub.backend.entity.PricingType;
import java.time.LocalDateTime;
import java.util.List;

public class AiToolDto {
    private Long id;
    private String name;
    private String description;
    private CategoryDto category;
    private String websiteUrl;
    private String logoUrl;
    private PricingType pricingType;
    private Double rating;
    private Boolean apiSupported;
    private Boolean mobileSupported;
    private LocalDateTime createdAt;
    
    // Details-only fields (may be null for list endpoints)
    private List<ReviewDto> reviews;
    private Double averageRating;
    private Long viewCount;

    // No-ArgsConstructor
    public AiToolDto() {
    }

    // All-ArgsConstructor
    public AiToolDto(Long id, String name, String description, CategoryDto category, String websiteUrl, String logoUrl,
                     PricingType pricingType, Double rating, Boolean apiSupported, Boolean mobileSupported, LocalDateTime createdAt,
                     List<ReviewDto> reviews, Double averageRating, Long viewCount) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.websiteUrl = websiteUrl;
        this.logoUrl = logoUrl;
        this.pricingType = pricingType;
        this.rating = rating;
        this.apiSupported = apiSupported;
        this.mobileSupported = mobileSupported;
        this.createdAt = createdAt;
        this.reviews = reviews;
        this.averageRating = averageRating;
        this.viewCount = viewCount;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public CategoryDto getCategory() {
        return category;
    }

    public void setCategory(CategoryDto category) {
        this.category = category;
    }

    public String getWebsiteUrl() {
        return websiteUrl;
    }

    public void setWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public PricingType getPricingType() {
        return pricingType;
    }

    public void setPricingType(PricingType pricingType) {
        this.pricingType = pricingType;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Boolean getApiSupported() {
        return apiSupported;
    }

    public void setApiSupported(Boolean apiSupported) {
        this.apiSupported = apiSupported;
    }

    public Boolean getMobileSupported() {
        return mobileSupported;
    }

    public void setMobileSupported(Boolean mobileSupported) {
        this.mobileSupported = mobileSupported;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<ReviewDto> getReviews() {
        return reviews;
    }

    public void setReviews(List<ReviewDto> reviews) {
        this.reviews = reviews;
    }

    public Double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(Double averageRating) {
        this.averageRating = averageRating;
    }

    public Long getViewCount() {
        return viewCount;
    }

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    // Manual Builder implementation
    public static AiToolDtoBuilder builder() {
        return new AiToolDtoBuilder();
    }

    public static class AiToolDtoBuilder {
        private Long id;
        private String name;
        private String description;
        private CategoryDto category;
        private String websiteUrl;
        private String logoUrl;
        private PricingType pricingType;
        private Double rating;
        private Boolean apiSupported;
        private Boolean mobileSupported;
        private LocalDateTime createdAt;
        private List<ReviewDto> reviews;
        private Double averageRating;
        private Long viewCount;

        public AiToolDtoBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public AiToolDtoBuilder name(String name) {
            this.name = name;
            return this;
        }

        public AiToolDtoBuilder description(String description) {
            this.description = description;
            return this;
        }

        public AiToolDtoBuilder category(CategoryDto category) {
            this.category = category;
            return this;
        }

        public AiToolDtoBuilder websiteUrl(String websiteUrl) {
            this.websiteUrl = websiteUrl;
            return this;
        }

        public AiToolDtoBuilder logoUrl(String logoUrl) {
            this.logoUrl = logoUrl;
            return this;
        }

        public AiToolDtoBuilder pricingType(PricingType pricingType) {
            this.pricingType = pricingType;
            return this;
        }

        public AiToolDtoBuilder rating(Double rating) {
            this.rating = rating;
            return this;
        }

        public AiToolDtoBuilder apiSupported(Boolean apiSupported) {
            this.apiSupported = apiSupported;
            return this;
        }

        public AiToolDtoBuilder mobileSupported(Boolean mobileSupported) {
            this.mobileSupported = mobileSupported;
            return this;
        }

        public AiToolDtoBuilder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public AiToolDtoBuilder reviews(List<ReviewDto> reviews) {
            this.reviews = reviews;
            return this;
        }

        public AiToolDtoBuilder averageRating(Double averageRating) {
            this.averageRating = averageRating;
            return this;
        }

        public AiToolDtoBuilder viewCount(Long viewCount) {
            this.viewCount = viewCount;
            return this;
        }

        public AiToolDto build() {
            return new AiToolDto(id, name, description, category, websiteUrl, logoUrl, pricingType, rating, apiSupported, mobileSupported, createdAt, reviews, averageRating, viewCount);
        }
    }
}
