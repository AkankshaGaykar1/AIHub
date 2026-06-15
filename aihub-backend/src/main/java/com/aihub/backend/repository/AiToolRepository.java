package com.aihub.backend.repository;

import com.aihub.backend.entity.AiTool;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AiToolRepository extends JpaRepository<AiTool, Long>, JpaSpecificationExecutor<AiTool> {

    @Query("SELECT t FROM AiTool t JOIN t.category c WHERE LOWER(c.name) = LOWER(:categoryName)")
    List<AiTool> findByCategoryName(@Param("categoryName") String categoryName);

    @Query("SELECT t FROM AiTool t WHERE t.id IN (SELECT f.tool.id FROM Favorite f WHERE f.user.id = :userId)")
    List<AiTool> findFavoritesByUserId(@Param("userId") Long userId);
}
