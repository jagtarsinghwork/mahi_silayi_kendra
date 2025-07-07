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
    'Unlock your potential as an app developer with TestFire! The ultimate platform (platform - मंच) for developers, companies, and freelancers to test and launch apps on Play Store. Easily submit apps, connect with real-world testers, and grow your app business (business - व्यवसाय) with our all-in-one solution.',
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
//     'Unlock your potential as an app developer with TestFire! The ultimate platform (platform - मंच) for developers, companies, and freelancers to test and launch apps on Play Store. Easily submit apps, connect with real-world testers, and grow your app business (business - व्यवसाय) with our all-in-one solution.',
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