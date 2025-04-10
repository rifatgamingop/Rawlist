import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function DiscordAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      // Exchange code for access token
      fetch('/api/auth/discord/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then(response => response.json())
        .then(data => {
          // Store the token and user info
          localStorage.setItem('discord_token', data.access_token);
          localStorage.setItem('user_info', JSON.stringify(data.user));
          navigate('/');
        })
        .catch(error => {
          console.error('Auth error:', error);
          navigate('/');
        });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Authenticating with Discord...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
}