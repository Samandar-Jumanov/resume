export const notificationBaseUrl = 'https://course-sell.onrender.com/notifications';

export const notificationEndpoints = [
    {
        title: '1. Get User Notifications',
        description: 'Get notifications of a specific user.',
        method: 'GET',
        url: `${notificationBaseUrl}/get-all/:userId`,
        response: `{
  "message": "Retrieved successfully",
  "success": true,
  "notifications": []
}`,
        middlewares: ['isAuthenticated', 'authenticate("instructor")'],
    },
    {
        title: '2. Change Notification Status',
        description: 'Change the status of a specific notification to read.',
        method: 'PUT',
        url: `${notificationBaseUrl}/update/:userId/:notificationId`,
        response: `{
  "message": "Notification status changed to read",
  "success": true
}`,
        middlewares: ['isAuthenticated', 'authenticate("instructor")'],
    },
];
