"use client"

import React from 'react';

const Tumber = () => {
  const handleAuth = async () => {
    const res = await fetch('/api/tumber');
    const data = await res.body 
    const params = new URLSearchParams(data);
    const oauthToken = params.get('oauth_token');

    window.location.href = `https://www.tumblr.com/oauth/authorize?oauth_token=${oauthToken}`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100"> 
      <button 
        onClick={handleAuth} 
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Authorize with Tumblr
      </button>
    </div>
  );
};

export default Tumber;
