package com.aihub.backend.controller;

import com.aihub.backend.dto.AiToolDto;
import com.aihub.backend.dto.ApiResponse;
import com.aihub.backend.dto.DashboardResponse;
import com.aihub.backend.service.DashboardService;
import com.aihub.backend.service.RecommendationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;
    private final RecommendationService recommendationService;

    public DashboardController(DashboardService dashboardService,
                               RecommendationService recommendationService) {
        this.dashboardService = dashboardService;
        this.recommendationService = recommendationService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<DashboardResponse>> getDashboard() {
        DashboardResponse dashboard = dashboardService.getDashboardData();
        return ResponseEntity.ok(ApiResponse.success(dashboard));
    }

    @GetMapping("/recommendations")
    public ResponseEntity<ApiResponse<List<AiToolDto>>> getRecommendations() {
        List<AiToolDto> recommendations = recommendationService.getRecommendations();
        return ResponseEntity.ok(ApiResponse.success(recommendations));
    }
}
