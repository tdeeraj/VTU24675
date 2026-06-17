exports.getNotifications = (req, res) => {
    res.json({ message: "Get all notifications" });
};

exports.getUnreadNotifications = (req, res) => {
    res.json({ message: "Get unread notifications" });
};

exports.markAsRead = (req, res) => {
    res.json({ message: "Notification marked as read" });
};

exports.markAllAsRead = (req, res) => {
    res.json({ message: "All notifications marked as read" });
};

exports.createNotification = (req, res) => {
    res.json({ message: "Notification created" });
};