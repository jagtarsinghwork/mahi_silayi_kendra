'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function NavLinks() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(pathname);
    
  }, [pathname]);

  return (
    <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
      <Link
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          activePath === '/home' ? 'bg-gray-900' : 'hover:bg-gray-700'
        }`}
        href="/home"
      >
        Home
      </Link>

      <Link
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          activePath === '/dashboard' ? 'bg-gray-900' : 'hover:bg-gray-700'
        }`}
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          activePath === '/signup' ? 'bg-gray-900' : 'hover:bg-gray-700'
        }`}
        href="/signup"
      >
        Signup
      </Link>
      <Link
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          activePath === '/login' ? 'bg-gray-900' : 'hover:bg-gray-700'
        }`}
        href="/login"
      >
        Login
      </Link>
    </nav>
  );
}