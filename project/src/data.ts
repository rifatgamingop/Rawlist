import { Channel, Member } from './types';

export const initialChannels: Channel[] = [
  {
    id: '1',
    name: '📢-announcements',
    type: 'announcement',
    readonly: false,
    messages: [
      {
        id: '1',
        content: 'Welcome to RawList! The ultimate Discord packer listing platform.',
        author: {
          id: '1',
          name: 'System',
          role: 'owner',
          avatar: 'https://images-ext-1.discordapp.net/external/RHwtKlxD7dO053-6WU8PMlOjmgGMBbzW-86M_qGAhZA/%3Fsize%3D1024/https/cdn.discordapp.com/icons/984039223797620776/3a968ec7900347b3d7175bdcff29740e.png?format=webp&quality=lossless&width=695&height=695',
        },
        timestamp: new Date(),
      },
    ],
  },
  {
    id: '2',
    name: '💬-general',
    type: 'text',
    readonly: true,
    messages: [],
  },
  {
    id: '3',
    name: '🔧-support',
    type: 'text',
    readonly: true,
    messages: [],
  },
];

export const initialMembers: Member[] = [
  {
    id: '1',
    name: 'RawList',
    role: 'owner',
    avatar: 'https://images-ext-1.discordapp.net/external/RHwtKlxD7dO053-6WU8PMlOjmgGMBbzW-86M_qGAhZA/%3Fsize%3D1024/https/cdn.discordapp.com/icons/984039223797620776/3a968ec7900347b3d7175bdcff29740e.png?format=webp&quality=lossless&width=695&height=695',
    status: 'online',
    badges: ['system', 'verified'],
  },
  {
    id: '2',
    name: 'Xenon',
    role: 'admin',
    avatar: 'https://images-ext-1.discordapp.net/external/k-DFiM8fzs4NJLbr6CeikEk5MeNqVi9-o-9S2sFYArw/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/844770923537367080/5f9fe8558b68ffff9cb1761fe4b310c4.png?format=webp&quality=lossless&width=375&height=375',
    status: 'online',
    badges: ['admin'],
  },
  {
    id: '3',
    name: 'Danger',
    role: 'admin',
    avatar: 'https://images-ext-1.discordapp.net/external/jXsGDDxb7XyRw1HiAu04bmuDf3S6YYCwoIy1l1e2QRs/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1336574049043611701/09cda67ede6c3a41a40e7477dec587b9.png?format=webp&quality=lossless&width=930&height=930',
    status: 'idle',
    badges: ['admin'],
  },
];