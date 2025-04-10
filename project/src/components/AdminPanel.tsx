import React, { useState, useEffect } from 'react';
import { Member, Role } from '../types';
import { Shield, ShieldAlert, ShieldCheck, User, Crown, Plus, Trash2, RefreshCw, Search } from 'lucide-react';

interface DiscordUser {
  id: string;
  username: string;
  global_name: string;
  avatar: string;
  bio?: string;
  banner?: string;
}

export function AdminPanel() {
  const [members, setMembers] = useState<Member[]>([]);
  const [showAddMember, setShowAddMember] = useState(false);
  const [discordId, setDiscordId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  useEffect(() => {
    // Load existing members from localStorage or your backend
    const savedMembers = localStorage.getItem('members');
    if (savedMembers) {
      setMembers(JSON.parse(savedMembers));
    }
  }, []);

  useEffect(() => {
    // Save members to localStorage whenever they change
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const fetchDiscordUser = async (id: string): Promise<DiscordUser> => {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/discord/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Discord user');
    }
    
    return response.json();
  };

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const userData = await fetchDiscordUser(discordId);
      
      const newMember: Member = {
        id: userData.id,
        name: userData.global_name || userData.username,
        displayName: userData.username,
        role: 'member',
        avatar: userData.avatar 
          ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.id) % 5}.png`,
        status: 'offline',
        bio: userData.bio || '',
        banner: userData.banner 
          ? `https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}.png`
          : undefined
      };
      
      setMembers(prev => [...prev, newMember]);
      setDiscordId('');
      setShowAddMember(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add member');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = (memberId: string, newRole: Role) => {
    setMembers(members.map(member =>
      member.id === memberId ? { ...member, role: newRole } : member
    ));
  };

  const handleDeleteMember = (memberId: string) => {
    if (confirm('Are you sure you want to remove this member?')) {
      setMembers(members.filter(m => m.id !== memberId));
    }
  };

  const handleRefreshMember = async (memberId: string) => {
    setLoading(true);
    try {
      const member = members.find(m => m.id === memberId);
      if (!member) return;

      const userData = await fetchDiscordUser(memberId);
      
      setMembers(members.map(m => 
        m.id === memberId 
          ? {
              ...m,
              name: userData.global_name || userData.username,
              displayName: userData.username,
              avatar: userData.avatar 
                ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
                : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.id) % 5}.png`,
              bio: userData.bio || '',
              banner: userData.banner 
                ? `https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}.png`
                : undefined
            }
          : m
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh member');
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.includes(searchTerm)
  );

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    const roleOrder = { owner: 0, admin: 1, moderator: 2, member: 3 };
    return roleOrder[a.role] - roleOrder[b.role];
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowAddMember(true)}
              className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Member
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
            {error}
          </div>
        )}

        {/* Add Member Modal */}
        {showAddMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-96 max-w-full mx-4">
              <h2 className="text-xl font-bold mb-4">Add Member</h2>
              <form onSubmit={handleAddMember}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Discord User ID
                  </label>
                  <input
                    type="text"
                    value={discordId}
                    onChange={(e) => setDiscordId(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Discord User ID"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddMember(false)}
                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Adding...
                      </>
                    ) : (
                      'Add Member'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Members Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left">Member</th>
                  <th className="px-6 py-3 text-left">Role</th>
                  <th className="px-6 py-3 text-left">Discord Info</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedMembers.map(member => (
                  <tr key={member.id} className="border-t border-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-gray-400">
                            {member.displayName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={member.role}
                        onChange={(e) => handleRoleChange(member.id, e.target.value as Role)}
                        className="bg-gray-700 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderator</option>
                        <option value="member">Member</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div>ID: {member.id}</div>
                        {member.bio && (
                          <div className="text-gray-400 mt-1 line-clamp-2">
                            {member.bio}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleRefreshMember(member.id)}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          title="Refresh Discord data"
                        >
                          <RefreshCw className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteMember(member.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Remove member"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}