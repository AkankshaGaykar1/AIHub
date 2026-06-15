package com.aihub.backend.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
    private boolean success;
    private String message;
    private String timestamp;

    public static ErrorResponse error(String message) {
        return new ErrorResponse(false, message, LocalDateTime.now().toString());
    }

    // No-ArgsConstructor
    public ErrorResponse() {
    }

    // All-ArgsConstructor
    public ErrorResponse(boolean success, String message, String timestamp) {
        this.success = success;
        this.message = message;
        this.timestamp = timestamp;
    }

    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    // Manual Builder implementation
    public static ErrorResponseBuilder builder() {
        return new ErrorResponseBuilder();
    }

    public static class ErrorResponseBuilder {
        private boolean success;
        private String message;
        private String timestamp;

        public ErrorResponseBuilder success(boolean success) {
            this.success = success;
            return this;
        }

        public ErrorResponseBuilder message(String message) {
            this.message = message;
            return this;
        }

        public ErrorResponseBuilder timestamp(String timestamp) {
            this.timestamp = timestamp;
            return this;
        }

        public ErrorResponse build() {
            return new ErrorResponse(success, message, timestamp);
        }
    }
}
