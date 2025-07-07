// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import GitHubProvider from 'next-auth/providers/github';
// import FacebookProvider from 'next-auth/providers/facebook';

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID!,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, profile }) {
//       // Add custom logic to sync with JWT backend
//       if (account && profile) {
//         // Example: Call your backend to get or create JWT
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/social`,
//           {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               provider: account.provider,
//               email: profile.email,
//               name: profile.name,
//             }),
//           },
//         );
//         const data = await response.json();
//         token.jwt = data.token; // Store backend JWT in NextAuth token
//         token.user = data.user; // Store user data
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // Pass backend JWT and user to session
//       session.jwt = token.jwt;
//       session.user = token.user;
//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);
