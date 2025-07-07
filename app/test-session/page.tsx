"use client";
import { useSession } from 'next-auth/react';

export default function TestSession() {
  const { data: session, status } = useSession();
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1>Session Test</h1>
      <p>Status: {status}</p>
      <p>User: {session?.user?.name || 'Not logged in'}</p>
    </div>
  );
}