import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    // Redirect if not authenticated
    if (!token) {
      router.push('/login');
    } else {
      router.push('/dashboard');
    }
  }, [router]);
}
