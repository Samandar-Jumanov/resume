import React from 'react';

const APIUserDocs = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">API Documentation</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Base URL</h2>
      <code className="bg-gray-200 p-2 rounded-md">https://course-sell.onrender.com/users/account</code>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Endpoints</h2>

      {/* Sign Up */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">1. Sign Up</h3>
        <p className="mb-2">Register a new user.</p>
        <p className="mb-2">Method: <code className="bg-green-200 p-1 rounded-md">POST</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/create-account</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/create-account')}>Copy</button></p>
        <p className="mb-2">Request Body:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}`}
        </pre>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Email sent",
  "token": "jwt_token"
}`}
        </pre>
      </div>

      {/* Activate User */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">2. Activate User</h3>
        <p className="mb-2">Activate user account using activation code.</p>
        <p className="mb-2">Method: <code className="bg-green-200 p-1 rounded-md">POST</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/activate-account</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/activate-account')}>Copy</button></p>
        <p className="mb-2">Request Body:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "token": "jwt_token",
  "code": "activation_code"
}`}
        </pre>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Created",
  "success": true
}`}
        </pre>
      </div>

      {/* Login */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">3. Login</h3>
        <p className="mb-2">User login.</p>
        <p className="mb-2">Method: <code className="bg-green-200 p-1 rounded-md">POST</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/login</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/login')}>Copy</button></p>
        <p className="mb-2">Request Body:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "email": "john.doe@example.com",
  "password": "password123"
}`}
        </pre>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Success",
  "accessToken": "jwt_access_token"
}`}
        </pre>
      </div>

      {/* Logout */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">4. Logout</h3>
        <p className="mb-2">User logout.</p>
        <p className="mb-2">Method: <code className="bg-blue-200 p-1 rounded-md">GET</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/logout</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/logout')}>Copy</button></p>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "success": true,
  "message": "Successfully logged out"
}`}
        </pre>
      </div>

      {/* Refresh Access Token */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">5. Refresh Access Token</h3>
        <p className="mb-2">Refresh user access token.</p>
        <p className="mb-2">Method: <code className="bg-blue-200 p-1 rounded-md">GET</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/refresh-token</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/refresh-token')}>Copy</button></p>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Success",
  "accessToken": "jwt_access_token"
}`}
        </pre>
      </div>

      {/* Get User by ID */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">6. Get User by ID</h3>
        <p className="mb-2">Get user details by user ID.</p>
        <p className="mb-2">Method: <code className="bg-blue-200 p-1 rounded-md">GET</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/user/:userId</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/user/123')}>Copy</button></p>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "user": {
    "_id": "123",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "avatar": "avatar_url"
  }
}`}
        </pre>
      </div>

      {/* Social Authentication */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">7. Social Authentication</h3>
        <p className="mb-2">Social authentication.</p>
        <p className="mb-2">Method: <code className="bg-green-200 p-1 rounded-md">POST</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/social-auth</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/social-auth')}>Copy</button></p>
        <p className="mb-2">Request Body:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "email": "john.doe@example.com",
  "name": "John Doe",
  "password": "social_password"
}`}
        </pre>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Success",
  "accessToken": "jwt_access_token"
}`}
        </pre>
      </div>

      {/* Update User Information */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">8. Update User Information</h3>
        <p className="mb-2">Update user information.</p>
        <p className="mb-2">Method: <code className="bg-yellow-200 p-1 rounded-md">PUT</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/user/:userId</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/user/123')}>Copy</button></p>
        <p className="mb-2">Request Body:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "name": "John Updated",
  "email": "john.updated@example.com"
}`}
        </pre>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Updated",
  "success": true,
  "user": {
    "_id": "123",
    "name": "John Updated",
    "email": "john.updated@example.com",
    "avatar": "avatar_url"
  }
}`}
        </pre>
      </div>

      {/* Update User Password */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">9. Update User Password</h3>
        <p className="mb-2">Update user password.</p>
        <p className="mb-2">Method: <code className="bg-yellow-200 p-1 rounded-md">PUT</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/user/update-password/:userId</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/user/update-password/123')}>Copy</button></p>
        <p className="mb-2">Request Body:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "oldPassword": "password123",
  "newPassword": "new_password"
}`}
        </pre>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Updated",
  "success": true
}`}
        </pre>
      </div>

      {/* Update User Avatar */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">10. Update User Avatar</h3>
        <p className="mb-2">Update user avatar.</p>
        <p className="mb-2">Method: <code className="bg-yellow-200 p-1 rounded-md">PUT</code></p>
        <p className="mb-2">URL: <code className="bg-gray-200 p-1 rounded-md">/user/update-avatar/:userId</code> <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => copyToClipboard('https://course-sell.onrender.com/users/account/user/update-avatar/123')}>Copy</button></p>
        <p className="mb-2">Request Body:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "file": "user_avatar_file.jpg"
}`}
        </pre>
        <p className="mb-2">Response:</p>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`{
  "message": "Updated",
  "success": true
}`}
        </pre>
      </div>
    </div>
  );
};

export default APIUserDocs;
