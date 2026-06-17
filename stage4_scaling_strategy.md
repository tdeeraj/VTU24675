# Stage 4 - Scaling and Performance

## Problem

Fetching notifications directly from the database for every page load can overload the database and increase response time.

## Solutions

### 1. Pagination

Use:

- page
- limit

Example:

GET /notifications?page=1&limit=20

This reduces the amount of data transferred in a single request.

---

### 2. Caching using Redis

Frequently accessed notifications can be stored in Redis.

Benefits:

- Faster response time.
- Reduced database load.

---

### 3. Real-Time Updates using WebSocket

Instead of continuously polling the server, notifications are pushed to users instantly.

Benefits:

- Lower network overhead.
- Better user experience.

---

### 4. Lazy Loading

Load notifications only when required (e.g., infinite scroll).

Benefits:

- Reduced initial loading time.
- Better scalability.

---

### 5. Database Indexing

Indexes on:

- student_id
- is_read
- created_at

help improve query performance.

## Overall Benefits

- Better scalability.
- Reduced database pressure.
- Faster response times.
- Improved user experience.