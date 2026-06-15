package com.aihub.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tool_views")
public class ToolView {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tool_id", nullable = false)
    private AiTool tool;

    @Column(name = "viewed_at", nullable = false, updatable = false)
    private LocalDateTime viewedAt;

    @PrePersist
    protected void onCreate() {
        this.viewedAt = LocalDateTime.now();
    }

    // No-ArgsConstructor
    public ToolView() {
    }

    // All-ArgsConstructor
    public ToolView(Long id, User user, AiTool tool, LocalDateTime viewedAt) {
        this.id = id;
        this.user = user;
        this.tool = tool;
        this.viewedAt = viewedAt;
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

    public LocalDateTime getViewedAt() {
        return viewedAt;
    }

    public void setViewedAt(LocalDateTime viewedAt) {
        this.viewedAt = viewedAt;
    }

    // Manual Builder implementation
    public static ToolViewBuilder builder() {
        return new ToolViewBuilder();
    }

    public static class ToolViewBuilder {
        private Long id;
        private User user;
        private AiTool tool;
        private LocalDateTime viewedAt;

        public ToolViewBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public ToolViewBuilder user(User user) {
            this.user = user;
            return this;
        }

        public ToolViewBuilder tool(AiTool tool) {
            this.tool = tool;
            return this;
        }

        public ToolViewBuilder viewedAt(LocalDateTime viewedAt) {
            this.viewedAt = viewedAt;
            return this;
        }

        public ToolView build() {
            return new ToolView(id, user, tool, viewedAt);
        }
    }
}
