import { useEffect } from 'react';

export function useFetchInterceptor() {
  useEffect(() => {
    const originalFetch = window.fetch;

    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          // Handle HTTP errors
          console.error('HTTP error:', response.status, response.statusText);
        }
        return response;
      } catch (error) {
        // Handle network errors
        console.error('Network error:', error);
        throw error;
      }
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);
}
