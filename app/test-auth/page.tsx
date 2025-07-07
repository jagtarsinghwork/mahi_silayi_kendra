// app/test-auth/page.tsx
'use client';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export default function TestAuth() {
  const { data: nextAuthSession } = useSession();
  const { session, token, isAuthenticated } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h1>Auth Test</h1>
      <p>NextAuth Session: {nextAuthSession?.user?.name || 'None'}</p>
      <p>Custom Session: {session?.name || 'None'}</p>
      <p>Token: {token || 'None'}</p>
      <p>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
    </div>
  );
}