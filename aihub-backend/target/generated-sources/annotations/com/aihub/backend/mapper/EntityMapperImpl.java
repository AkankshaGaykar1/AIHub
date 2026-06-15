package com.aihub.backend.mapper;

import com.aihub.backend.dto.AiToolDto;
import com.aihub.backend.dto.AiToolRequest;
import com.aihub.backend.dto.CategoryDto;
import com.aihub.backend.dto.CategoryRequest;
import com.aihub.backend.dto.ReviewDto;
import com.aihub.backend.dto.UserDto;
import com.aihub.backend.entity.AiTool;
import com.aihub.backend.entity.Category;
import com.aihub.backend.entity.Review;
import com.aihub.backend.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-13T15:18:50+0530",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.45.0.v20260224-0835, environment: Java 21.0.10 (Eclipse Adoptium)"
)
@Component
public class EntityMapperImpl implements EntityMapper {

    @Override
    public UserDto toUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto.UserDtoBuilder userDto = UserDto.builder();

        userDto.id( user.getId() );
        userDto.name( user.getName() );
        userDto.email( user.getEmail() );
        if ( user.getRole() != null ) {
            userDto.role( user.getRole().name() );
        }

        return userDto.build();
    }

    @Override
    public CategoryDto toCategoryDto(Category category) {
        if ( category == null ) {
            return null;
        }

        CategoryDto.CategoryDtoBuilder categoryDto = CategoryDto.builder();

        categoryDto.id( category.getId() );
        categoryDto.name( category.getName() );
        categoryDto.icon( category.getIcon() );

        return categoryDto.build();
    }

    @Override
    public Category toCategory(CategoryRequest request) {
        if ( request == null ) {
            return null;
        }

        Category.CategoryBuilder category = Category.builder();

        category.name( request.getName() );
        category.icon( request.getIcon() );

        return category.build();
    }

    @Override
    public AiToolDto toAiToolDto(AiTool tool) {
        if ( tool == null ) {
            return null;
        }

        AiToolDto.AiToolDtoBuilder aiToolDto = AiToolDto.builder();

        aiToolDto.id( tool.getId() );
        aiToolDto.name( tool.getName() );
        aiToolDto.description( tool.getDescription() );
        aiToolDto.category( toCategoryDto( tool.getCategory() ) );
        aiToolDto.websiteUrl( tool.getWebsiteUrl() );
        aiToolDto.logoUrl( tool.getLogoUrl() );
        aiToolDto.pricingType( tool.getPricingType() );
        aiToolDto.rating( tool.getRating() );
        aiToolDto.apiSupported( tool.getApiSupported() );
        aiToolDto.mobileSupported( tool.getMobileSupported() );
        aiToolDto.createdAt( tool.getCreatedAt() );

        return aiToolDto.build();
    }

    @Override
    public AiTool toAiTool(AiToolRequest request) {
        if ( request == null ) {
            return null;
        }

        AiTool.AiToolBuilder aiTool = AiTool.builder();

        aiTool.name( request.getName() );
        aiTool.description( request.getDescription() );
        aiTool.websiteUrl( request.getWebsiteUrl() );
        aiTool.logoUrl( request.getLogoUrl() );
        aiTool.pricingType( request.getPricingType() );
        aiTool.apiSupported( request.getApiSupported() );
        aiTool.mobileSupported( request.getMobileSupported() );

        return aiTool.build();
    }

    @Override
    public ReviewDto toReviewDto(Review review) {
        if ( review == null ) {
            return null;
        }

        ReviewDto.ReviewDtoBuilder reviewDto = ReviewDto.builder();

        reviewDto.userId( reviewUserId( review ) );
        reviewDto.userName( reviewUserName( review ) );
        reviewDto.toolId( reviewToolId( review ) );
        reviewDto.toolName( reviewToolName( review ) );
        reviewDto.id( review.getId() );
        reviewDto.rating( review.getRating() );
        reviewDto.reviewText( review.getReviewText() );
        reviewDto.createdAt( review.getCreatedAt() );

        return reviewDto.build();
    }

    private Long reviewUserId(Review review) {
        if ( review == null ) {
            return null;
        }
        User user = review.getUser();
        if ( user == null ) {
            return null;
        }
        Long id = user.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String reviewUserName(Review review) {
        if ( review == null ) {
            return null;
        }
        User user = review.getUser();
        if ( user == null ) {
            return null;
        }
        String name = user.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    private Long reviewToolId(Review review) {
        if ( review == null ) {
            return null;
        }
        AiTool tool = review.getTool();
        if ( tool == null ) {
            return null;
        }
        Long id = tool.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String reviewToolName(Review review) {
        if ( review == null ) {
            return null;
        }
        AiTool tool = review.getTool();
        if ( tool == null ) {
            return null;
        }
        String name = tool.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }
}
