# Stage 3 - Query Optimization

## Existing Query

```sql
SELECT *
FROM notifications
WHERE student_id = 1042
AND is_read = FALSE
ORDER BY created_at ASC;
```

## Problems with Existing Query

1. `SELECT *` retrieves unnecessary columns.
2. Sorting millions of rows can become expensive.
3. Without indexes, database performance degrades as data grows.

## Optimized Query

```sql
SELECT id, message, notification_type, created_at
FROM notifications
WHERE student_id = 1042
AND is_read = FALSE
ORDER BY created_at DESC;
```

## Recommended Index

```sql
CREATE INDEX idx_notifications_student_read_created
ON notifications(student_id, is_read, created_at);
```

## Why Not Index Every Column?

- Increases storage usage.
- Slows INSERT and UPDATE operations.
- Some indexes may never be used.

## Placement Notifications in Last 7 Days

### MySQL

```sql
SELECT DISTINCT student_id
FROM notifications
WHERE notification_type = 'Placement'
AND created_at >= NOW() - INTERVAL 7 DAY;
```

### PostgreSQL

```sql
SELECT DISTINCT student_id
FROM notifications
WHERE notification_type = 'Placement'
AND created_at >= NOW() - INTERVAL '7 days';
```