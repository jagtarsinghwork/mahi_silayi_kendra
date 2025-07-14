'use client';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const APILayout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default APILayout;

// "use client";
// import React, { FC, ReactNode, useState } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// type Props = {
//   children: ReactNode;
// };

// const APILayout: FC<Props> = ({ children }) => {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     // <QueryClientProvider client={queryClient}>
//     <>
//       {children}
//       <ReactQueryDevtools initialIsOpen />
//       </>
//     // </QueryClientProvider>
//   );
// };

// export default APILayout;
