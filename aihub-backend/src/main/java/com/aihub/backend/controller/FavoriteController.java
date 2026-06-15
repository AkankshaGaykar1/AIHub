package com.aihub.backend.controller;

import com.aihub.backend.dto.AiToolDto;
import com.aihub.backend.dto.ApiResponse;
import com.aihub.backend.service.FavoriteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @PostMapping("/{toolId}")
    public ResponseEntity<ApiResponse<Void>> addFavorite(@PathVariable Long toolId) {
        favoriteService.addFavorite(toolId);
        return ResponseEntity.ok(ApiResponse.success("Tool added to favorites", null));
    }

    @DeleteMapping("/{toolId}")
    public ResponseEntity<ApiResponse<Void>> removeFavorite(@PathVariable Long toolId) {
        favoriteService.removeFavorite(toolId);
        return ResponseEntity.ok(ApiResponse.success("Tool removed from favorites", null));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<AiToolDto>>> getUserFavorites() {
        List<AiToolDto> favorites = favoriteService.getUserFavorites();
        return ResponseEntity.ok(ApiResponse.success(favorites));
    }
}
