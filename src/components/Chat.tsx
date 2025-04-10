import React, { useState } from 'react';
import { Channel, Message } from '../types';
import { Lock } from 'lucide-react';

interface ChatProps {
  channel: Channel | null;
  onSendMessage?: (content: string) => void;
}

export function Chat({ channel, onSendMessage }: ChatProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && onSendMessage && channel && !channel.readonly) {
      onSendMessage(message);
      setMessage('');
    }
  };

  if (!channel) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-700">
        <p className="text-gray-400 text-lg">Please select a channel</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-700">
      <div className="p-4 border-b border-gray-600">
        <div className="flex items-center">
          <h2 className="text-white text-lg font-semibold">#{channel.name}</h2>
          {channel.readonly && (
            <div className="ml-3 flex items-center text-gray-400">
              <Lock className="w-4 h-4 mr-1" />
              <span className="text-sm">Read-only channel</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {channel.messages.map((message: Message) => (
          <div key={message.id} className="mb-4">
            <div className="flex items-start">
              <img
                src={message.author.avatar}
                alt={message.author.name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <div className="flex items-center">
                  <span className="text-white font-semibold mr-2">
                    {message.author.name}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {new Date(message.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-300">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!channel.readonly && channel.type !== 'announcement' && (
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-600">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message #${channel.name}`}
            className="w-full px-4 py-2 rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      )}
    </div>
  );
}