# Stage 1
## API Endpoints
### Get All Notifications
GET /api/notifications
Response:
```json
{
  "notifications": []
}
```
### Get Unread Notifications
GET /api/notifications/unread
### Create Notification
POST /api/notifications
Request:
```json
{
  "studentId": 1042,
  "type": "Placement",
  "message": "Amazon Hiring"
}
```
### Mark Notification as Read
PATCH /api/notifications/{id}/read
### Mark All Notifications as Read
PATCH /api/notifications/read-all
## Common Headers
Content-Type: application/json
## Real-Time Notification Mechanism
WebSocket using Socket.IO will be used for instant notification delivery.