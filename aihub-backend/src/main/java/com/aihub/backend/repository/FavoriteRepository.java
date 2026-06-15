package com.aihub.backend.repository;

import com.aihub.backend.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Optional<Favorite> findByUserIdAndToolId(Long userId, Long toolId);
    boolean existsByUserIdAndToolId(Long userId, Long toolId);
    long countByUserId(Long userId);
    List<Favorite> findByUserId(Long userId);
}
