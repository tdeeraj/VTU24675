const express = require("express");
const router = express.Router();

const {
    getNotifications,
    getUnreadNotifications,
    markAsRead,
    markAllAsRead,
    createNotification
} = require("../controllers/notificationController");

router.get("/", getNotifications);
router.get("/unread", getUnreadNotifications);
router.patch("/:id/read", markAsRead);
router.patch("/read-all", markAllAsRead);
router.post("/", createNotification);

module.exports = router;