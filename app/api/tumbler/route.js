import OAuth from 'oauth-1.0a';
import crypto from 'crypto-js';
import fetch from 'node-fetch';

export const GET  =  async (req, res) => {
  
  const oauth = OAuth({
    consumer: {
      key: process.env.KEY,
      secret: process.env.SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.HmacSHA1(base_string, key).toString(crypto.enc.Base64);
    },
  });

  const request_data = {
    url: 'https://www.tumblr.com/oauth/request_token',
    method: 'POST',
    data: {},
  };

  const headers = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await fetch(request_data.url, {
      method: request_data.method,
      headers,
    });

    if (!response.ok) throw new Error('Failed to obtain request token');
    const text = await response.text();
    return new Response(JSON.stringify({succes : true , data : text}) )
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};