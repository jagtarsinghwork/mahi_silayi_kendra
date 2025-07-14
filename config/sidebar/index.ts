import {
  LayoutDashboard,
  Smartphone,
  BarChart2,
  CreditCard,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const sidebarItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'My Apps',
    href: '/dashboard/my-apps',
    icon: Smartphone,
  },
  {
    name: 'Analytics',
    href: '/dashboard/my-analytics',
    icon: BarChart2,
  },
  {
    name: 'Payments',
    href: '/dashboard/my-payments',
    icon: CreditCard,
  },
  {
    name: 'Testers',
    href: '/dashboard/my-testers',
    icon: Users,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export { sidebarItems };
