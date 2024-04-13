export const orderBaseUrl = 'https://course-sell.onrender.com/orders';

export const orderEndpoints = [
  {
    title: '1. Create Order',
    description: 'Create a new order for a specific user.',
    method: 'POST',
    url: `${orderBaseUrl}/create-order`,
    requestBody: `{
  "userId": "user_id",
  "courseId": "course_id",
  "paymentInfo": {
    "paymentMethod": "stripe",
    "amount": 100
  }
}`,
    response: `{
  "order": {},
  "success": true,
  "message": "Created",
  "notifications": []
}`,
    middlewares: ['isAuthenticated'],
  },
  {
    title: '2. Get Created Orders',
    description: 'Get orders of a specific user.',
    method: 'GET',
    url: `${orderBaseUrl}/all-orders/:userId`,
    response: `{
  "message": "Retrieved successfully",
  "orders": [],
  "success": true
}`,
    middlewares: ['isAuthenticated'],
  },
];

export const orderMiddlewares = [
  {
    name: 'isAuthenticated',
    description: 'Ensures that the user is authenticated before accessing the endpoint.',
  },
];
