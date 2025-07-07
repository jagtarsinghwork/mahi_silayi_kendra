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
    href: '/dashboard/apps',
    icon: Smartphone,
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart2,
  },
  {
    name: 'Payments',
    href: '/dashboard/payments',
    icon: CreditCard,
  },
  {
    name: 'Testers',
    href: '/dashboard/testers',
    icon: Users,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export { sidebarItems };
