import { Channel, Member } from './types';

export const initialChannels: Channel[] = [
  {
    id: '1',
    name: 'noticeboard',
    type: 'announcement',
    readonly: false,
    messages: [
      {
        id: '1',
        content: 'Welcome to RawList! The ultimate Discord packer listing platform.',
        author: {
          id: '1',
          name: 'RawList',
          role: 'owner',
          avatar: 'https://images-ext-1.discordapp.net/external/RHwtKlxD7dO053-6WU8PMlOjmgGMBbzW-86M_qGAhZA/%3Fsize%3D1024/https/cdn.discordapp.com/icons/984039223797620776/3a968ec7900347b3d7175bdcff29740e.png?format=webp&quality=lossless&width=695&height=695',
        },
        timestamp: new Date(),
      },
    ],
  }
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
    status: 'dnd',
    badges: ['admin'],
  },
  {
    id: '3',
    name: 'Danger',
    role: 'admin',
    avatar: 'https://images-ext-1.discordapp.net/external/jXsGDDxb7XyRw1HiAu04bmuDf3S6YYCwoIy1l1e2QRs/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1336574049043611701/09cda67ede6c3a41a40e7477dec587b9.png?format=webp&quality=lossless&width=930&height=930',
    status: 'online',
    badges: ['admin'],
  },
  {
    id: '4',
    name: 'Hunter',
    role: 'ogs',
    avatar: 'https://images-ext-1.discordapp.net/external/caVNCRrnrW2tSlINGqcxR-1we7g-oUnYf9R2gQP1rWw/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1349768956558184610/90a7b9b562bb8945aa82e5623923b85a.png?format=webp&quality=lossless&width=703&height=703',
    status: 'online',
    badges: ['ogs'],
  },
  {
    id: '5',
    name: 'Sanjay',
    role: 'ogs',
    avatar: 'https://images-ext-1.discordapp.net/external/SxAniu_I-TL_mwdUEhOY78-Ir70LAlF2LfPoeye_0MU/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1258806930550558740/0ce3a14f70a7f81a2139fb879224ce69.png?format=webp&quality=lossless&width=320&height=320',
    status: 'online',
    badges: ['ogs'],
  },
  {
    id: '6',
    name: 'Sh4dow',
    role: 'ogs',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Vd_kqZn53ok20t0tVuAukGAHOzVLWvNgKw&s',
    status: 'online',
    badges: ['ogs'],
  },
  {
    id: '7',
    name: 'Syntax',
    role: 'ogs',
    avatar: 'https://images-ext-1.discordapp.net/external/OXIPezrih4PDSCBYzEoSQ4OoRhuHAdvhVorzIWwCSZ8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1291467764174684222/a_667f94be45dd1e82e182b6e2c3b472d0.gif?width=160&height=160',
    status: 'online',
    badges: ['ogs'],
  },
  {
    id: '8',
    name: 'Kyro',
    role: 'legend loud',
    avatar: 'https://images-ext-1.discordapp.net/external/n3tKosRcgdeiDPVyP8EEnQ4TSvCTWstryqAuDOAG8Ug/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1281610421484126218/d48d847e50d5c8fe3d980c1a79e08049.png?format=webp&quality=lossless&width=375&height=375',
    status: 'online',
    badges: ['loud'],
  },
  {
    id: '9',
    name: 'Viraj',
    role: 'hof nuker',
    avatar: 'https://images-ext-1.discordapp.net/external/5uaydMaKMymJIHEz0srdM7KnWFFnyhte0zCncmR-FY8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/886318522957955083/e20680f0fa22fab507d6e18eb6cfff54.png?format=webp&quality=lossless&width=493&height=493',
    status: 'online',
    badges: ['nuker'],
  },
  {
    id: '10',
    name: 'Trap',
    role: 'legendary nuker',
    avatar: 'https://images-ext-1.discordapp.net/external/LAH62bPLsxQBb2yQys6X9mz3tFIxMeHd_BPFHMuZvEg/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/938318480355246140/ed24333e0023ee81da7234b991c6fae0.png?format=webp&quality=lossless&width=375&height=375',
    status: 'online',
    badges: ['nuker'],
  },
  {
    id: '11',
    name: 'Ledlo',
    role: 'u+',
    avatar: 'https://images-ext-1.discordapp.net/external/h3l_usHzUGBPjvkP5iqRyZQJyIIR28VkEgh1GCBHL-g/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1260965552415838249/f2855919793f70ab60c72b93b4d34efc.png?format=webp&quality=lossless&width=320&height=320',
    status: 'online',
    badges: ['beef'],
  },
  {
    id: '12',
    name: 'Mithun',
    role: 'a+',
    avatar: 'https://images-ext-1.discordapp.net/external/SwBtjpAo12ecyGL4jkcDRkD_TxnNjQ29Y1cqy_IWsB4/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/833584337962139699/6c14e914071bdefb2f64f2449b29364b.png?format=webp&quality=lossless&width=320&height=320',
    status: 'online',
    badges: ['beef'],
  },
  {
    id: '13',
    name: '079q',
    role: 'a+',
    avatar: 'https://images-ext-1.discordapp.net/external/daMO7Vh_Pz3G3Ia_SQcrVcRcnLP9PaX8Dxjzht5hLmo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1243885277580365924/e2e6742dbdb5475c5741d7deacc225fc.png?format=webp&quality=lossless&width=684&height=684',
    status: 'online',
    badges: ['beef'],
  },
  {
    id: '14',
    name: 'RDx',
    role: 'a',
    avatar: 'https://images-ext-1.discordapp.net/external/jXsGDDxb7XyRw1HiAu04bmuDf3S6YYCwoIy1l1e2QRs/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1336574049043611701/09cda67ede6c3a41a40e7477dec587b9.png?format=webp&quality=lossless&width=930&height=930',
    status: 'online',
    badges: ['beef'],
  },
  {
    id: '15',
    name: 'RDx',
    role: 'a',
    avatar: 'https://images-ext-1.discordapp.net/external/NGTUUOrBlVxAJulc9BFnTeMZ_9Zgw5OVwKQjfbRq5cQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1274064102624464916/448f2fa95d377dafa81919fdf1016359.png?format=webp&quality=lossless&width=320&height=320',
    status: 'online',
    badges: ['beef'],
  },
  {
    id: '16',
    name: 'Krishang',
    role: 'f',
    avatar: 'https://images-ext-1.discordapp.net/external/BRgXdzOYLiB4z28CI5VBaacjrC5hjm1msCbwUHfssF0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1205773931592548353/8bfb3f982bdcd0ad10d1810e24b303b7.png?format=webp&quality=lossless&width=774&height=774',
    status: 'online',
    badges: ['beef'],
  }
];
