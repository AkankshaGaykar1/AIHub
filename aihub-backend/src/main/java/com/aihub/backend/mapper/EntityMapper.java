package com.aihub.backend.mapper;

import com.aihub.backend.dto.*;
import com.aihub.backend.entity.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface EntityMapper {

    UserDto toUserDto(User user);

    CategoryDto toCategoryDto(Category category);
    
    Category toCategory(CategoryRequest request);

    @Mapping(target = "reviews", ignore = true)
    @Mapping(target = "averageRating", ignore = true)
    @Mapping(target = "viewCount", ignore = true)
    AiToolDto toAiToolDto(AiTool tool);
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "rating", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    AiTool toAiTool(AiToolRequest request);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.name", target = "userName")
    @Mapping(source = "tool.id", target = "toolId")
    @Mapping(source = "tool.name", target = "toolName")
    ReviewDto toReviewDto(Review review);
}
