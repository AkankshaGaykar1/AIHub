package com.aihub.backend.service;

import com.aihub.backend.dto.CategoryDto;
import com.aihub.backend.dto.CategoryRequest;
import com.aihub.backend.entity.Category;
import com.aihub.backend.exception.DuplicateResourceException;
import com.aihub.backend.exception.ResourceNotFoundException;
import com.aihub.backend.mapper.EntityMapper;
import com.aihub.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final EntityMapper mapper;

    public CategoryService(CategoryRepository categoryRepository, EntityMapper mapper) {
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
    }

    @Transactional(readOnly = true)
    public List<CategoryDto> getAllCategories() {
        return categoryRepository.findAll().stream()
                .map(mapper::toCategoryDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CategoryDto getCategoryById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with ID: " + id));
        return mapper.toCategoryDto(category);
    }

    @Transactional
    public CategoryDto createCategory(CategoryRequest request) {
        if (categoryRepository.findByNameIgnoreCase(request.getName()).isPresent()) {
            throw new DuplicateResourceException("Category name is already in use: " + request.getName());
        }
        Category category = mapper.toCategory(request);
        Category saved = categoryRepository.save(category);
        return mapper.toCategoryDto(saved);
    }

    @Transactional
    public CategoryDto updateCategory(Long id, CategoryRequest request) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with ID: " + id));

        categoryRepository.findByNameIgnoreCase(request.getName())
                .ifPresent(existing -> {
                    if (!existing.getId().equals(id)) {
                        throw new DuplicateResourceException("Category name is already in use: " + request.getName());
                    }
                });

        category.setName(request.getName());
        category.setIcon(request.getIcon());
        Category updated = categoryRepository.save(category);
        return mapper.toCategoryDto(updated);
    }

    @Transactional
    public void deleteCategory(Long id) {
        if (!categoryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Category not found with ID: " + id);
        }
        categoryRepository.deleteById(id);
    }
}
