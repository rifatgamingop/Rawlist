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

export type Role = 'owner' | 'admin' | 'moderator' | 'ogs' | 'hall of fame' | 'top known' | 'well known' | 'known' | 'loudest on cord' | 'hof loud' | 'mythical loud' | 'legend loud' | 'royal loud' | 'loudest screamer' | 'hof screamer' | 'emperor screamer' | 'hof nuker' | 'legendary nuker' | 'non-bypass nuker' | 'hof beefer' | 'u++' | 'u+' | 's++' | 's+' | 's' | 'a++' | 'a+' | 'a' | 'b' | 'c' | 'd' | 'f' | 'member';
