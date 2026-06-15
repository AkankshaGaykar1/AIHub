package com.aihub.backend.service;

import com.aihub.backend.dto.AiToolDto;
import com.aihub.backend.entity.AiTool;
import com.aihub.backend.entity.Favorite;
import com.aihub.backend.entity.User;
import com.aihub.backend.exception.DuplicateResourceException;
import com.aihub.backend.exception.ResourceNotFoundException;
import com.aihub.backend.mapper.EntityMapper;
import com.aihub.backend.repository.AiToolRepository;
import com.aihub.backend.repository.FavoriteRepository;
import com.aihub.backend.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final AiToolRepository aiToolRepository;
    private final UserRepository userRepository;
    private final EntityMapper mapper;

    public FavoriteService(FavoriteRepository favoriteRepository, AiToolRepository aiToolRepository,
                           UserRepository userRepository, EntityMapper mapper) {
        this.favoriteRepository = favoriteRepository;
        this.aiToolRepository = aiToolRepository;
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Logged in user not found"));
    }

    @Transactional
    public void addFavorite(Long toolId) {
        User user = getCurrentUser();
        AiTool tool = aiToolRepository.findById(toolId)
                .orElseThrow(() -> new ResourceNotFoundException("AI Tool not found with ID: " + toolId));

        if (favoriteRepository.existsByUserIdAndToolId(user.getId(), toolId)) {
            throw new DuplicateResourceException("AI Tool is already in your favorites");
        }

        Favorite favorite = Favorite.builder()
                .user(user)
                .tool(tool)
                .build();
        favoriteRepository.save(favorite);
    }

    @Transactional
    public void removeFavorite(Long toolId) {
        User user = getCurrentUser();
        Favorite favorite = favoriteRepository.findByUserIdAndToolId(user.getId(), toolId)
                .orElseThrow(() -> new ResourceNotFoundException("AI Tool not found in your favorites"));

        favoriteRepository.delete(favorite);
    }

    @Transactional(readOnly = true)
    public List<AiToolDto> getUserFavorites() {
        User user = getCurrentUser();
        return aiToolRepository.findFavoritesByUserId(user.getId()).stream()
                .map(mapper::toAiToolDto)
                .collect(Collectors.toList());
    }
}
