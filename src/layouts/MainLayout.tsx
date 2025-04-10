import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Chat } from '../components/Chat';
import { MemberList } from '../components/MemberList';
import { initialChannels, initialMembers } from '../data';
import { Channel, Message } from '../types';
import { Menu, X } from 'lucide-react';

export function MainLayout() {
  const [channels, setChannels] = useState(initialChannels);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(
    channels.length > 0 ? channels[0] : null
  );
  const [members] = useState(initialMembers);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMembers, setShowMembers] = useState(false);

  const handleSendMessage = (content: string) => {
    if (!selectedChannel || selectedChannel.type === 'announcement') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      author: members[0],
      timestamp: new Date(),
    };

    setChannels(channels.map(channel =>
      channel.id === selectedChannel.id
        ? { ...channel, messages: [...channel.messages, newMessage] }
        : channel
    ));
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Mobile Menu Buttons */}
      <div className="lg:hidden fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-800 z-50">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white p-2"
        >
          {showSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-white text-xl font-bold">RawList</h1>
        <button
          onClick={() => setShowMembers(!showMembers)}
          className="text-white p-2"
        >
          {showMembers ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed lg:static w-64 h-screen
        transform transition-transform duration-300 ease-in-out
        ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 z-40
      `}>
        <Sidebar
          channels={channels}
          selectedChannel={selectedChannel}
          onChannelSelect={setSelectedChannel}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row mt-16 lg:mt-0">
        <div className="flex-1">
          <Chat
            channel={selectedChannel}
            onSendMessage={selectedChannel?.type === 'text' ? handleSendMessage : undefined}
          />
        </div>

        {/* Members List */}
        <div className={`
          fixed lg:static w-64 h-screen right-0
          transform transition-transform duration-300 ease-in-out
          ${showMembers ? 'translate-x-0' : 'translate-x-full'}
          lg:translate-x-0 z-40
        `}>
          <MemberList members={members} />
        </div>
      </div>
    </div>
  );
}