package com.aihub.backend.repository;

import com.aihub.backend.entity.AiTool;
import com.aihub.backend.entity.PricingType;
import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

public class AiToolSpecification {

    public static Specification<AiTool> filterTools(String search, String category, PricingType pricingType, Boolean apiSupported, Boolean mobileSupported) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (search != null && !search.trim().isEmpty()) {
                String term = "%" + search.trim().toLowerCase() + "%";
                Predicate nameLike = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), term);
                Predicate descLike = criteriaBuilder.like(criteriaBuilder.lower(root.get("description")), term);
                predicates.add(criteriaBuilder.or(nameLike, descLike));
            }

            if (category != null && !category.trim().isEmpty()) {
                predicates.add(criteriaBuilder.equal(
                        criteriaBuilder.lower(root.get("category").get("name")),
                        category.trim().toLowerCase()
                ));
            }

            if (pricingType != null) {
                predicates.add(criteriaBuilder.equal(root.get("pricingType"), pricingType));
            }

            if (apiSupported != null) {
                predicates.add(criteriaBuilder.equal(root.get("apiSupported"), apiSupported));
            }

            if (mobileSupported != null) {
                predicates.add(criteriaBuilder.equal(root.get("mobileSupported"), mobileSupported));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
