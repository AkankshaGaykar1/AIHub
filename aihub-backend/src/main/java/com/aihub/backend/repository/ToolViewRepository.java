package com.aihub.backend.repository;

import com.aihub.backend.entity.ToolView;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ToolViewRepository extends JpaRepository<ToolView, Long> {
    
    long countByToolId(Long toolId);
    
    long countByUserId(Long userId);

    @Query("SELECT DISTINCT v.tool.category.id FROM ToolView v WHERE v.user.id = :userId")
    List<Long> findDistinctCategoryIdsViewedByUser(@Param("userId") Long userId);

    @Query("SELECT v.tool.id FROM ToolView v WHERE v.user.id = :userId ORDER BY v.viewedAt DESC")
    List<Long> findRecentlyViewedToolIdsByUser(@Param("userId") Long userId, Pageable pageable);

    @Query("SELECT v.tool.id, COUNT(v.id) as viewCount FROM ToolView v GROUP BY v.tool.id ORDER BY viewCount DESC")
    List<Object[]> findMostViewedToolIds(Pageable pageable);
}
