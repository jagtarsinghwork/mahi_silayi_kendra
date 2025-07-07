import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // const token =
  //   // document.cookie.match(/token=([^;]+)/)?.[1] ||
  //   req.cookies.get('token')?.value ||
  //   req.headers.get('Authorization')?.split('Bearer ')[1];
  console.log(req.cookies);
  const cookieHeader = req.headers.get('cookie');
  const token = cookieHeader
    ?.split(';')
    .find((c) => c.trim().startsWith('token='))
    ?.split('=')[1];

  if (!token) {
    console.log('No token found, redirecting to /signin');
    return NextResponse.redirect(new URL('/signin', req.url));
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/auth/verify`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (!response.ok) {
      console.log('Token verification failed:', response.status);
      return NextResponse.redirect(new URL('/signin', req.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.redirect(new URL('/signin', req.url));
  }
}

export const config = {
  matcher: [
    // '/dashboard/:path*',
    '/profile/:path*',
    '/individual-dashboard/:path*',
  ],
};

// import { NextRequest, NextResponse } from 'next/server';
// import { withAuth } from 'next-auth/middleware';

// export default withAuth(
//   async function middleware(req: NextRequest) {
//     const customToken = req.cookies.get('token')?.value;
//     if (customToken) {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/auth/verify`,
//           {
//             headers: { Authorization: `Bearer ${customToken}` },
//           },
//         );
//         if (response.ok) {
//           return NextResponse.next();
//         }
//       } catch (error) {
//         console.error('Custom token verification failed:', error);
//       }
//     }
//     return NextResponse.redirect(new URL('/signin', req.url));
//   },
//   {
//     callbacks: {
//       authorized: ({ token, req }) => {
//         const customToken = req.cookies.get('token')?.value;
//         return !!token || !!customToken;
//       },
//     },
//   },
// );

// export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/profile/:path*',
//     '/individual-dashboard/:path*',
//   ],
// };
