# Stage 2 - Database Design

## Students Table

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| student_id | INT | Primary Key |
| student_name | VARCHAR(100) | Student Name |

---

## Notifications Table

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | UUID | Primary Key |
| student_id | INT | Foreign Key |
| notification_type | ENUM('Event','Result','Placement') | Notification Category |
| message | TEXT | Notification Content |
| is_read | BOOLEAN | Read Status |
| created_at | TIMESTAMP | Notification Creation Time |

---

## Relationships

- One student can have multiple notifications.
- student_id in notifications references student_id in students.

## Advantages

- Efficient querying.
- Supports notification filtering.
- Tracks read and unread notifications.
- Easy to extend for future notification types.