package com.aihub.backend.dto;

import com.aihub.backend.entity.PricingType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class AiToolRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "CategoryId is required")
    private Long categoryId;

    @NotBlank(message = "Website URL is required")
    private String websiteUrl;

    @NotBlank(message = "Logo URL is required")
    private String logoUrl;

    @NotNull(message = "Pricing type is required")
    private PricingType pricingType;

    @NotNull(message = "apiSupported flag is required")
    private Boolean apiSupported;

    @NotNull(message = "mobileSupported flag is required")
    private Boolean mobileSupported;

    // No-ArgsConstructor
    public AiToolRequest() {
    }

    // All-ArgsConstructor
    public AiToolRequest(String name, String description, Long categoryId, String websiteUrl, String logoUrl, PricingType pricingType, Boolean apiSupported, Boolean mobileSupported) {
        this.name = name;
        this.description = description;
        this.categoryId = categoryId;
        this.websiteUrl = websiteUrl;
        this.logoUrl = logoUrl;
        this.pricingType = pricingType;
        this.apiSupported = apiSupported;
        this.mobileSupported = mobileSupported;
    }

    // Getters and Setters
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

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
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
}
