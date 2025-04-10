export interface Channel {
  id: string;
  name: string;
  type: 'text' | 'announcement';
  messages: Message[];
  readonly: boolean;
}

export interface Message {
  id: string;
  content: string;
  author: Member;
  timestamp: Date;
}

export interface Member {
  id: string;
  name: string;
  displayName?: string;
  role: Role;
  avatar: string;
  status?: 'online' | 'idle' | 'dnd' | 'offline';
  badges?: string[];
  bio?: string;
  banner?: string;
}

export type Role = 'owner' | 'admin' | 'moderator' | 'member';