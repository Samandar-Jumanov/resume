export  const baseUrl = 'https://course-sell.onrender.com/users/account';

export const userEndpoints = [
  {
    title: '1. Sign Up',
    description: 'Register a new user.',
    method: 'POST',
    url: `${baseUrl}/create-account`,
    requestBody: `{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "password123"
}`,
    response: `{
"message": "Email sent",
"token": "jwt_token"
}`,
    middlewares: [],
  },
  {
    title: '2. Activate User',
    description: 'Activate user account using activation code.',
    method: 'POST',
    url: `${baseUrl}/activate-account`,
    requestBody: `{
"token": "jwt_token",
"code": "activation_code"
}`,
    response: `{
"message": "Created",
"success": true
}`,
    middlewares: [],
  },
  {
    title: '3. Login',
    description: 'User login.',
    method: 'POST',
    url: `${baseUrl}/login`,
    requestBody: `{
"email": "john.doe@example.com",
"password": "password123"
}`,
    response: `{
"message": "Success",
"accessToken": "jwt_access_token"
}`,
    middlewares: [],
  },
  {
    title: '4. Logout',
    description: 'User logout.',
    method: 'GET',
    url: `${baseUrl}/logout`,
    response: `{
"success": true,
"message": "Successfully logged out"
}`,
    middlewares: [],
  },
  {
    title: '5. Refresh Access Token',
    description: 'Refresh user access token.',
    method: 'GET',
    url: `${baseUrl}/refresh-token`,
    response: `{
"message": "Success",
"accessToken": "jwt_access_token"
}`,
    middlewares: [],
  },
  {
    title: '6. Get User by ID',
    description: 'Get user details by user ID.',
    method: 'GET',
    url: `${baseUrl}/user/:userId`,
    response: `{
"user": {
  "_id": "123",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "avatar": "avatar_url"
}
}`,
    middlewares: [],
  },
  {
    title: '7. Social Authentication',
    description: 'Social authentication.',
    method: 'POST',
    url: `${baseUrl}/social-auth`,
    requestBody: `{
"email": "john.doe@example.com",
"name": "John Doe",
"password": "social_password"
}`,
    response: `{
"message": "Success",
"accessToken": "jwt_access_token"
}`,
    middlewares: [],
  },
  {
    title: '8. Update User Information',
    description: 'Update user information.',
    method: 'PUT',
    url: `${baseUrl}/user/:userId`,
    requestBody: `{
"name": "John Updated",
"email": "john.updated@example.com"
}`,
    response: `{
"message": "Updated",
"success": true,
"user": {
  "_id": "123",
  "name": "John Updated",
  "email": "john.updated@example.com",
  "avatar": "avatar_url"
}
}`,
    middlewares: [],
  },
  {
    title: '9. Update User Password',
    description: 'Update user password.',
    method: 'PUT',
    url: `${baseUrl}/user/update-password/:userId`,
    requestBody: `{
"oldPassword": "password123",
"newPassword": "new_password"
}`,
    response: `{
"message": "Updated",
"success": true
}`,
    middlewares: [],
  },
  {
    title: '10. Update User Avatar',
    description: 'Update user avatar.',
    method: 'PUT',
    url: `${baseUrl}/user/update-avatar/:userId`,
    requestBody: `{
"file": "user_avatar_file.jpg"
}`,
    response: `{
"message": "Updated",
"success": true
}`,
    middlewares: [],
  },
];

export const userMiddlewares = [];