package com.aihub.backend.repository;

import com.aihub.backend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByToolId(Long toolId);
    
    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.tool.id = :toolId")
    Optional<Double> getAverageRatingForTool(@Param("toolId") Long toolId);

    long countByUserId(Long userId);
    
    List<Review> findByUserId(Long userId);

    Optional<Review> findByUserIdAndToolId(Long userId, Long toolId);
}
