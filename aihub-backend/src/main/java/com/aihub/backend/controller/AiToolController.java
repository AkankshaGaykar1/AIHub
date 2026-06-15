package com.aihub.backend.controller;

import com.aihub.backend.dto.*;
import com.aihub.backend.entity.PricingType;
import com.aihub.backend.service.AiToolService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AiToolController {

    private final AiToolService aiToolService;

    public AiToolController(AiToolService aiToolService) {
        this.aiToolService = aiToolService;
    }

    @GetMapping("/tools")
    public ResponseEntity<ApiResponse<Page<AiToolDto>>> getTools(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) PricingType pricing,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id,desc") String sort) {

        String[] sortParams = sort.split(",");
        String sortBy = sortParams[0];
        Sort.Direction direction = sortParams.length > 1 && sortParams[1].equalsIgnoreCase("asc") 
                ? Sort.Direction.ASC : Sort.Direction.DESC;

        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        Page<AiToolDto> tools = aiToolService.getTools(search, category, pricing, null, null, pageable);
        return ResponseEntity.ok(ApiResponse.success(tools));
    }

    @GetMapping("/tools/{id}")
    public ResponseEntity<ApiResponse<AiToolDto>> getToolById(@PathVariable Long id) {
        AiToolDto tool = aiToolService.getToolById(id);
        return ResponseEntity.ok(ApiResponse.success(tool));
    }

    @PostMapping("/tools")
    public ResponseEntity<ApiResponse<AiToolDto>> createTool(@Valid @RequestBody AiToolRequest request) {
        AiToolDto created = aiToolService.createTool(request);
        return ResponseEntity.ok(ApiResponse.success("AI Tool created successfully", created));
    }

    @PutMapping("/tools/{id}")
    public ResponseEntity<ApiResponse<AiToolDto>> updateTool(@PathVariable Long id,
                                                             @Valid @RequestBody AiToolRequest request) {
        AiToolDto updated = aiToolService.updateTool(id, request);
        return ResponseEntity.ok(ApiResponse.success("AI Tool updated successfully", updated));
    }

    @DeleteMapping("/tools/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteTool(@PathVariable Long id) {
        aiToolService.deleteTool(id);
        return ResponseEntity.ok(ApiResponse.success("AI Tool deleted successfully", null));
    }

    // Search APIs
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<AiToolDto>>> searchTools(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) PricingType pricing,
            @RequestParam(required = false) Boolean apiSupported,
            @RequestParam(required = false) Boolean mobileSupported) {

        // Returns up to 50 tools without pagination for the query parameters
        Pageable pageable = PageRequest.of(0, 50, Sort.by("id").descending());
        Page<AiToolDto> toolsPage = aiToolService.getTools(keyword, category, pricing, apiSupported, mobileSupported, pageable);
        return ResponseEntity.ok(ApiResponse.success(toolsPage.getContent()));
    }
}
