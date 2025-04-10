import React, { useState } from 'react';
import { Member, Role } from '../types';
import { Shield, ShieldAlert, ShieldCheck, User, Crown } from 'lucide-react';

interface MemberListProps {
  members: Member[];
}

interface MemberPopupProps {
  member: Member;
  onClose: () => void;
  onRoleChange: (memberId: string, newRole: Role) => void;
}

const MemberPopup = ({ member, onClose, onRoleChange }: MemberPopupProps) => {
  const roles: Role[] = ['owner', 'admin', 'moderator', 'member'];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>
        
        <div className="flex items-center mb-6">
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="w-20 h-20 rounded-full mr-4 border-4 border-gray-700"
          />
          <div>
            <h3 className="text-white text-xl font-bold">{member.name}</h3>
            <p className={`text-sm ${getRoleColor(member.role)} flex items-center`}>
              {getRoleIcon(member.role)}
              <span className="ml-1 capitalize">{member.role}</span>
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-gray-400 text-sm font-semibold mb-2">ROLES</h4>
          <div className="space-y-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => {
                  onRoleChange(member.id, role);
                  onClose();
                }}
                disabled={role === 'owner' && member.role !== 'owner'}
                className={`w-full flex items-center px-3 py-2 rounded transition-colors duration-200 ${
                  member.role === role
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } ${role === 'owner' && member.role !== 'owner' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {getRoleIcon(role)}
                <span className="ml-2 capitalize">{role}</span>
              </button>
            ))}
          </div>
        </div>

        {member.badges && member.badges.length > 0 && (
          <div className="mb-6">
            <h4 className="text-gray-400 text-sm font-semibold mb-2">BADGES</h4>
            <div className="flex flex-wrap gap-2">
              {member.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-1 rounded bg-gray-700 text-gray-300 text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-gray-700">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export function MemberList({ members }: MemberListProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const roleOrder: Record<Role, number> = {
    owner: 0,
    admin: 1,
    moderator: 2,
    member: 3,
  };

  const sortedMembers = [...members].sort((a, b) => roleOrder[a.role] - roleOrder[b.role]);

  const handleRoleChange = (memberId: string, newRole: Role) => {
    // In a real application, this would be handled through an API
    console.log(`Changed role for member ${memberId} to ${newRole}`);
  };

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="w-60 bg-gray-800 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-gray-400 text-sm font-semibold">MEMBERS — {members.length}</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {sortedMembers.map((member) => (
          <button
            key={member.id}
            onClick={() => handleMemberClick(member)}
            className="w-full flex items-center px-4 py-2 hover:bg-gray-700 text-left transition-colors duration-200"
          >
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              {member.status && (
                <div className={`absolute bottom-0 right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                  member.status === 'online' ? 'bg-green-500' :
                  member.status === 'idle' ? 'bg-yellow-500' :
                  member.status === 'dnd' ? 'bg-red-500' :
                  'bg-gray-500'
                }`} />
              )}
            </div>
            <div>
              <p className="text-white text-sm">{member.name}</p>
              <div className="flex items-center">
                {getRoleIcon(member.role)}
                <p className={`text-xs capitalize ml-1 ${getRoleColor(member.role)}`}>
                  {member.role}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedMember && (
        <MemberPopup
          member={selectedMember}
          onClose={handleClosePopup}
          onRoleChange={handleRoleChange}
        />
      )}
    </div>
  );
}

function getRoleIcon(role: Role) {
  switch (role) {
    case 'owner':
      return <Crown className="w-4 h-4" />;
    case 'admin':
      return <ShieldAlert className="w-4 h-4" />;
    case 'moderator':
      return <ShieldCheck className="w-4 h-4" />;
    default:
      return <User className="w-4 h-4" />;
  }
}

function getRoleColor(role: Role) {
  switch (role) {
    case 'owner':
      return 'text-red-400';
    case 'admin':
      return 'text-purple-400';
    case 'moderator':
      return 'text-blue-400';
    default:
      return 'text-gray-400';
  }
}