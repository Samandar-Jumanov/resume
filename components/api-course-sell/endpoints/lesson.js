export const lessonBaseUrl = 'https://course-sell.onrender.com/lessons';

export const lessonEndpoint = [
  {
    title: '1. Create Lesson',
    description: 'Register a new lesson.',
    method: 'POST',
    url: `${lessonBaseUrl}/create/lesson/:userId`,
    requestBody: `{
"title": "Lesson Title",
"isDemo": false,
"description": "Lesson description",
"videoFile": "video_file.mp4"
}`,
    response: `{
"message": "Lesson created",
"success": true,
"lesson": {}
}`,
    middlewares: ['isAuthenticated', 'authenticate("instructor")'],
  },
  {
    title: '2. Get User Lessons',
    description: 'Get lessons of a specific user.',
    method: 'GET',
    url: `${lessonBaseUrl}/userLessons/:userId`,
    response: `{
"message": "User lessons retrieved successfully",
"success": true,
"lessons": []
}`,
    middlewares: ['isAuthenticated', 'authenticate("instructor")'],
  },
  {
    title: '3. Delete Lesson',
    description: 'Delete a specific lesson of a user.',
    method: 'DELETE',
    url: `${lessonBaseUrl}/delete/:userId/:lessonId`,
    response: `{
"success": true,
"message": "Lesson deleted successfully",
"deletedLesson": {}
}`,
    middlewares: ['authenticate("instructor")', 'isAuthenticated'],
  },
  {
    title: '4. Update Lesson',
    description: 'Update a specific lesson of a user.',
    method: 'PUT',
    url: `${lessonBaseUrl}/update/:userId/:lessonId`,
    requestBody: `{
"title": "Updated Lesson Title",
"description": "Updated Lesson description"
}`,
    response: `{
"message": "Lesson updated successfully",
"lesson": {}
}`,
    middlewares: ['authenticate("instructor")', 'isAuthenticated'],
  },
];

export const lessonMiddlewares = [
  {
    name: 'isAuthenticated',
    description: 'Ensures that the user is authenticated before accessing the endpoint.',
  },
  {
    name: 'authenticate',
    description: 'Verifies if the user has the required role to access the endpoint.',
  },
];
