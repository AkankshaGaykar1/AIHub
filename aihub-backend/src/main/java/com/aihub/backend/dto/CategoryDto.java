package com.aihub.backend.dto;

public class CategoryDto {
    private Long id;
    private String name;
    private String icon;

    // No-ArgsConstructor
    public CategoryDto() {
    }

    // All-ArgsConstructor
    public CategoryDto(Long id, String name, String icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
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

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    // Manual Builder implementation
    public static CategoryDtoBuilder builder() {
        return new CategoryDtoBuilder();
    }

    public static class CategoryDtoBuilder {
        private Long id;
        private String name;
        private String icon;

        public CategoryDtoBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public CategoryDtoBuilder name(String name) {
            this.name = name;
            return this;
        }

        public CategoryDtoBuilder icon(String icon) {
            this.icon = icon;
            return this;
        }

        public CategoryDto build() {
            return new CategoryDto(id, name, icon);
        }
    }
}
