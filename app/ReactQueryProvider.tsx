'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient(
    {
      // defaultOptions: {
      //   queries: {
      //     refetchOnWindowFocus: false,
      //     retry: 1,
      //     staleTime: 1000 * 60 * 5, // 5 minutes
      //   },
      //   mutations: {
      //     retry: 1,
      //   },
      // },
      defaultOptions: {
        queries: {
          gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
      },    
    }
  ));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
