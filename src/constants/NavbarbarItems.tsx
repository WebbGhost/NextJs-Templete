import { AiOutlineAppstore } from 'react-icons/ai';
import {
  IoCallOutline,
  IoNotificationsOutline,
  IoSettings,
} from 'react-icons/io5';
import { LuMessageCircle } from 'react-icons/lu';

import type { NavbarItems } from '@/types/Navbar';

export const NavbarItem: NavbarItems[] = [
  {
    label: 'Home',
    path: '/',
    icon: <AiOutlineAppstore />,
  },
  {
    label: 'Calls',
    path: '/calls',
    icon: <IoCallOutline />,
  },
  {
    label: 'Message',
    path: '/Messages',
    icon: <LuMessageCircle />,
  },

  {
    label: 'Settings',
    path: '/settings',
    icon: <IoSettings />, // Corrected icon
  },
  {
    label: 'Notifications',
    path: '/notifications',
    icon: <IoNotificationsOutline />,
  },
];
