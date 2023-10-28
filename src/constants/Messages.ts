export type MessagesType = {
  id: number;
  name: string;
  avatarSrc: string;
  message: string;
  time: string;
  badgeCount: number;
  badgeColor: string;
};

const Messages: MessagesType[] = [
  {
    id: 1,
    name: 'Shabir Khan',
    avatarSrc: 'https://avatars.githubusercontent.com/u/55942632?v=4',
    message: 'voice message 12:00',
    time: '12:00',
    badgeCount: 5,
    badgeColor: 'success',
  },
  {
    id: 2,
    name: 'John Doe',
    avatarSrc: 'https://example.com/avatar2.jpg',
    message: 'Hello there!',
    time: '13:30',
    badgeCount: 0,
    badgeColor: 'default',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    avatarSrc: 'https://example.com/avatar3.jpg',
    message: 'Good morning!',
    time: '08:15',
    badgeCount: 2,
    badgeColor: 'warning',
  },
  {
    id: 4,
    name: 'Sarah Smith',
    avatarSrc: 'https://example.com/avatar4.jpg',
    message: 'How are you doing?',
    time: '10:45',
    badgeCount: 0,
    badgeColor: 'default',
  },
  {
    id: 5,
    name: 'Michael Wilson',
    avatarSrc: 'https://example.com/avatar5.jpg',
    message: "I'm on my way!",
    time: '15:20',
    badgeCount: 1,
    badgeColor: 'info',
  },
  {
    id: 6,
    name: 'Emily Brown',
    avatarSrc: 'https://example.com/avatar6.jpg',
    message: 'Dinner tonight?',
    time: '19:05',
    badgeCount: 3,
    badgeColor: 'danger',
  },
  {
    id: 7,
    name: 'Daniel Lee',
    avatarSrc: 'https://example.com/avatar7.jpg',
    message: 'See you soon!',
    time: '22:30',
    badgeCount: 0,
    badgeColor: 'default',
  },
  // Add more user objects as needed
];

export default Messages;
