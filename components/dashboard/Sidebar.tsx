// ui/Sidebar.tsx
'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Smartphone, BarChart2, CreditCard, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/AuthContext';
import { toast } from 'sonner';

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
]

// const sidebarItems = [
//   { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
//   { name: 'My Apps', href: '/dashboard/my-apps', icon: Smartphone },
//   { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
//   { name: 'Payments', href: '/dashboard/my-payments', icon: CreditCard },
//   { name: 'Testers', href: '/dashboard/my-testers', icon: Users },
//   { name: 'Settings', href: '/dashboard/settings', icon: Settings },
// ];
export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useContext(AuthContext);

  // const handleSignOut = () => {
  //   logout();
  //   document.cookie = 'token=; path=/; max-age=0'; // Clear cookie
  //   router.push('/signin');
  // };

  const handleSignOut = () => {
    if (!logout) {
      // Fallback behavior
      localStorage.removeItem('token');
      router.push('/signin');
      return;
    }
    
    logout();
    document.cookie = 'token=; path=/; max-age=0'; // Clear cookie
    toast.success('Logged out successfully!');
    router.push('/signin');
  };

  return (
    <div className="hidden md:flex flex-col w-64 h-screen fixed border-r border-gray-800 bg-gray-900">
      <div className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            TestFire
          </h1>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-3 transition-colors',
                pathname === item.href
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
              )}
            >
              <item.icon className="h-5 w-5 text-blue-400" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800"
            // asChild
          >
            <Link href="/support">
              <HelpCircle className="h-5 w-5" />
              <span>Help & Support</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800"
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>
    </div>
  );
}