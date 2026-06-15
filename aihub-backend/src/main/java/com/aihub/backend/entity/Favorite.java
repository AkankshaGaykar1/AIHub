package com.aihub.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "favorites", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"user_id", "tool_id"})
})
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tool_id", nullable = false)
    private AiTool tool;

    // No-ArgsConstructor
    public Favorite() {
    }

    // All-ArgsConstructor
    public Favorite(Long id, User user, AiTool tool) {
        this.id = id;
        this.user = user;
        this.tool = tool;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public AiTool getTool() {
        return tool;
    }

    public void setTool(AiTool tool) {
        this.tool = tool;
    }

    // Manual Builder implementation
    public static FavoriteBuilder builder() {
        return new FavoriteBuilder();
    }

    public static class FavoriteBuilder {
        private Long id;
        private User user;
        private AiTool tool;

        public FavoriteBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public FavoriteBuilder user(User user) {
            this.user = user;
            return this;
        }

        public FavoriteBuilder tool(AiTool tool) {
            this.tool = tool;
            return this;
        }

        public Favorite build() {
            return new Favorite(id, user, tool);
        }
    }
}
