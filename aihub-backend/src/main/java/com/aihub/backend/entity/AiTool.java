package com.aihub.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ai_tools")
public class AiTool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(name = "website_url", nullable = false)
    private String websiteUrl;

    @Column(name = "logo_url", nullable = false)
    private String logoUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "pricing_type", nullable = false)
    private PricingType pricingType;

    @Column(nullable = false)
    private Double rating;

    @Column(name = "api_supported", nullable = false)
    private Boolean apiSupported;

    @Column(name = "mobile_supported", nullable = false)
    private Boolean mobileSupported;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (this.rating == null) {
            this.rating = 0.0;
        }
    }

    // No-ArgsConstructor
    public AiTool() {
    }

    // All-ArgsConstructor
    public AiTool(Long id, String name, String description, Category category, String websiteUrl, String logoUrl,
                  PricingType pricingType, Double rating, Boolean apiSupported, Boolean mobileSupported, LocalDateTime createdAt) {
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
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

    // Manual Builder implementation
    public static AiToolBuilder builder() {
        return new AiToolBuilder();
    }

    public static class AiToolBuilder {
        private Long id;
        private String name;
        private String description;
        private Category category;
        private String websiteUrl;
        private String logoUrl;
        private PricingType pricingType;
        private Double rating;
        private Boolean apiSupported;
        private Boolean mobileSupported;
        private LocalDateTime createdAt;

        public AiToolBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public AiToolBuilder name(String name) {
            this.name = name;
            return this;
        }

        public AiToolBuilder description(String description) {
            this.description = description;
            return this;
        }

        public AiToolBuilder category(Category category) {
            this.category = category;
            return this;
        }

        public AiToolBuilder websiteUrl(String websiteUrl) {
            this.websiteUrl = websiteUrl;
            return this;
        }

        public AiToolBuilder logoUrl(String logoUrl) {
            this.logoUrl = logoUrl;
            return this;
        }

        public AiToolBuilder pricingType(PricingType pricingType) {
            this.pricingType = pricingType;
            return this;
        }

        public AiToolBuilder rating(Double rating) {
            this.rating = rating;
            return this;
        }

        public AiToolBuilder apiSupported(Boolean apiSupported) {
            this.apiSupported = apiSupported;
            return this;
        }

        public AiToolBuilder mobileSupported(Boolean mobileSupported) {
            this.mobileSupported = mobileSupported;
            return this;
        }

        public AiToolBuilder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public AiTool build() {
            return new AiTool(id, name, description, category, websiteUrl, logoUrl, pricingType, rating, apiSupported, mobileSupported, createdAt);
        }
    }
}
