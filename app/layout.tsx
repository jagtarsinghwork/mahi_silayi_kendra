import type { Metadata } from 'next';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import APILayout from '@/components/Layouts/APILayout';
import { Toaster } from '@/components/ui/sonner';
import ParentLayout from '@/components/common/ParentLayout';
import AuthProvider from '@/context/AuthContext';
import ReactQueryProvider from './ReactQueryProvider';
import './globals.css';
import '../sass/styles.scss';
import Footer from '@/components/common/Footer';


export const metadata: Metadata = {
  title: 'TESTFIRE DEV',
  description:
    'Unlock your full potential as a digital creator. Early Caves is the premier all-in-one platform meticulously designed for experts and entrepreneurs across diverse niches—including finance, education, fitness, lifestyle, and business. We empower you to effortlessly monetize your unique knowledge, cultivate vibrant communities, and accelerate the growth of your online enterprise',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ParentLayout>
      <ReactQueryProvider>
        <AuthProvider>
          <APILayout>{children}</APILayout>
          <Toaster />
          <Footer />
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </AuthProvider>
      </ReactQueryProvider>
    </ParentLayout>
  );
}


// import type { Metadata } from 'next';
// // import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import APILayout from '@/components/Layouts/APILayout';
// import { Toaster } from '@/components/ui/sonner';
// import ParentLayout from '@/components/common/ParentLayout';
// import AuthProvider from '@/context/AuthContext';
// // import SessionProviderClientComponent from './SessionProviderClientComponent';
// import { getServerSession } from 'next-auth';
// import ReactQueryProvider from './ReactQueryProvider'; // ✅ Import here
// import SessionProviderClientComponent from './SessionProviderClientComponent';
// import './globals.css';
// import '../sass/styles.scss';
// // import Header from '@/components/common/Header';
// import Footer from '@/components/common/Footer';

// export const metadata: Metadata = {
//   title: 'TESTFIRE DEV',
//   description:
//     'Unlock your full potential as a digital creator. Early Caves is the premier all-in-one platform meticulously designed for experts and entrepreneurs across diverse niches—including finance, education, fitness, lifestyle, and business. We empower you to effortlessly monetize your unique knowledge, cultivate vibrant communities, and accelerate the growth of your online enterprise',
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // const queryClient = new QueryClient();
//   const session: any = await getServerSession();
//   // Serialize session to plain object with explicit null checks
//   const serializedSession = session
//     ? JSON.parse(
//       JSON.stringify({
//         user: session.user
//           ? {
//             name: session.user.name || null,
//             email: session.user.email || null,
//             image: session.user.image || null,
//           }
//           : null,
//         expires: session.expires || null,
//         jwt: session.jwt || null, // Include custom JWT if added in NextAuth callbacks
//       })
//     )
//     : null;

//   return (
//     <ReactQueryProvider>
//       <SessionProviderClientComponent session={serializedSession}>
//         <AuthProvider>
//           <ParentLayout>
//             <APILayout>{children}</APILayout>
//             <Toaster />
//             <Footer />
//           </ParentLayout>
//           {process.env.NODE_ENV === 'development' && (
//             <ReactQueryDevtools initialIsOpen={false} />
//           )}
//           {/* <ReactQueryDevtools initialIsOpen={false} /> */}
//         </AuthProvider>
//       </SessionProviderClientComponent>
//     </ReactQueryProvider>
//   );
// }