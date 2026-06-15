package com.aihub.backend.dto;

import jakarta.validation.constraints.NotBlank;

public class CategoryRequest {

    @NotBlank(message = "Category name is required")
    private String name;

    @NotBlank(message = "Category icon class or identifier is required")
    private String icon;

    // No-ArgsConstructor
    public CategoryRequest() {
    }

    // All-ArgsConstructor
    public CategoryRequest(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
