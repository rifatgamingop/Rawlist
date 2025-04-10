import React from 'react';
import { Channel } from '../types';
import { Hash, Volume2 } from 'lucide-react';

interface SidebarProps {
  channels: Channel[];
  selectedChannel: Channel | null;
  onChannelSelect: (channel: Channel) => void;
}

export function Sidebar({ channels, selectedChannel, onChannelSelect }: SidebarProps) {
  return (
    <div className="w-60 bg-gray-800 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-700 flex items-center">
        <img
          src="https://images-ext-1.discordapp.net/external/RHwtKlxD7dO053-6WU8PMlOjmgGMBbzW-86M_qGAhZA/%3Fsize%3D1024/https/cdn.discordapp.com/icons/984039223797620776/3a968ec7900347b3d7175bdcff29740e.png?format=webp&quality=lossless&width=695&height=695"
          alt="RawList"
          className="w-8 h-8 rounded-full mr-2"
        />
        <h1 className="text-white text-xl font-bold">RawList</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-4">
          <h2 className="text-gray-400 text-sm font-semibold mb-2 px-2">CHANNELS</h2>
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => onChannelSelect(channel)}
              className={`w-full flex items-center px-2 py-1 rounded text-gray-400 hover:bg-gray-700 hover:text-white ${
                selectedChannel?.id === channel.id ? 'bg-gray-700 text-white' : ''
              }`}
            >
              {channel.type === 'announcement' ? (
                <Volume2 className="w-4 h-4 mr-2" />
              ) : (
                <Hash className="w-4 h-4 mr-2" />
              )}
              {channel.name}
              {channel.readonly && (
                <span className="ml-auto text-xs text-gray-500">Read-only</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}