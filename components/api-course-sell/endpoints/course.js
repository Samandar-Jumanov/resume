export const courseBaseUrl = 'https://course-sell.onrender.com/user';

 export  const courseEndpoints = [
    {
      title: '1. Create Course',
      description: 'Create a new course for a specific user.',
      method: 'POST',
      url: `${courseBaseUrl}/course/createCourse/:userId`,
      requestBody: `{
  "title": "Course Title",
  "description": "Course Description",
  "lesson_ids": ["lesson_id1", "lesson_id2"],
  "tags": ["tag1", "tag2"],
  "benefits": ["benefit1", "benefit2"],
  "level": "Beginner",
  "prerequisites": "Prerequisite details"
}`,
      response: `{
  "message": "Created successfully",
  "success": true,
  "course": {}
}`,
      middlewares: ['isAuthenticated', 'authenticate("instructor")'],
    },
    {
      title: '2. Get User Courses',
      description: 'Get courses of a specific user.',
      method: 'GET',
      url: `${courseBaseUrl}/course/get/:userId`,
      response: `{
  "message": "User courses retrieved successfully",
  "success": true,
  "courses": []
}`,
      middlewares: ['isAuthenticated', 'authenticate("instructor")'],
    },
    {
      title: '3. Delete Course',
      description: 'Delete a specific course of a user.',
      method: 'DELETE',
      url: `${courseBaseUrl}/course/delete/:userId/:courseId`,
      response: `{
  "message": "Deleted",
  "success": true
}`,
      middlewares: ['authenticate("instructor")', 'isAuthenticated'],
    },
  ];

export   const courseMiddlewares = [
    {
      name: 'isAuthenticated',
      description: 'Ensures that the user is authenticated before accessing the endpoint.',
    },
    {
      name: 'authenticate',
      description: 'Verifies if the user has the required role to access the endpoint.',
    },
  ];