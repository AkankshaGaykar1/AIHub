package com.aihub.backend.controller;

import com.aihub.backend.dto.ApiResponse;
import com.aihub.backend.dto.ReviewDto;
import com.aihub.backend.dto.ReviewRequest;
import com.aihub.backend.service.ReviewService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ReviewDto>> createReview(@Valid @RequestBody ReviewRequest request) {
        ReviewDto created = reviewService.createReview(request);
        return ResponseEntity.ok(ApiResponse.success("Review submitted successfully", created));
    }

    @GetMapping("/tool/{toolId}")
    public ResponseEntity<ApiResponse<List<ReviewDto>>> getReviewsByToolId(@PathVariable Long toolId) {
        List<ReviewDto> reviews = reviewService.getReviewsByToolId(toolId);
        return ResponseEntity.ok(ApiResponse.success(reviews));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ReviewDto>> updateReview(@PathVariable Long id,
                                                               @Valid @RequestBody ReviewRequest request) {
        ReviewDto updated = reviewService.updateReview(id, request);
        return ResponseEntity.ok(ApiResponse.success("Review updated successfully", updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok(ApiResponse.success("Review deleted successfully", null));
    }
}
