'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { getUserRequest } from '@/api/auth';
import { User } from '@/types/auth';
import { useRouter } from 'next/navigation';


export type AuthContextType = {
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  session: User | null;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
};



export const AuthContext = createContext<Partial<AuthContextType>>({});

const AuthProvider = ({ children }: { children: Readonly<ReactNode> }) => {
  const router = useRouter();
  
  const [token, setToken] = useState<string | null>(null);
  const [session, setSession] = useState<User | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);

  // Login function for custom JWT
  const login = (newToken: string, user: User) => {
    console.log('User Auth:', user);
    localStorage.setItem('token', newToken);
    router.push("/dashboard");
    setToken(newToken);
    setSession(user);
    setAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    document.cookie = 'token=; path=/; max-age=0'; // Clear cookie
    setToken(null);
    setSession(null);
    setAuthenticated(false);
  };

  

  // Authenticate user with saved token
  const authenticateUser = async () => {
    try {
      setAuthenticating(true);
      // const savedToken = localStorage.getItem('token');
      const tokenCookies = (document.cookie.match(/token=([^;]+)/)?.[1]);
      console.log("tokenCookies",tokenCookies);
      const savedToken = localStorage.getItem('token') || tokenCookies
      
      if (savedToken) {
        const res = await getUserRequest();
        // console.log("res-->",res.data.data);
        setSession(res?.data.data);
        setToken(savedToken);
        setAuthenticated(true);
      }
    } catch (error) {
      console.log('Error:', error);
      logout(); // Clear state on error
    } finally {
      setAuthenticating(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        session,
        isAuthenticated,
        isAuthenticating,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
// 'use client';

// import { createContext, ReactNode, useEffect, useState } from 'react';
// import { getUserRequest } from '@/api/auth';
// import { useSession } from 'next-auth/react';
// import { User } from '@/types/auth';

// export type AuthContextType = {
//   token: string | null;
//   login: (token: string, user: User) => void;
//   logout: () => void;
//   session: User | null;
//   isAuthenticated: boolean;
//   isAuthenticating: boolean;
// };

// export const AuthContext = createContext<Partial<AuthContextType>>({});

// const AuthProvider = ({ children }: { children: Readonly<ReactNode> }) => {
//   const [token, setToken] = useState<string | null>(null);
//   const [session, setSession] = useState<User | null>(null);
//   const [isAuthenticated, setAuthenticated] = useState(false);
//   const [isAuthenticating, setAuthenticating] = useState(true);
//   const { data: nextAuthSession, status: nextAuthStatus } = useSession();

//   // Function to login (for custom JWT)
//   const login = (newToken: string, user: User) => {
//     console.log("user Auth",user);
//     localStorage.setItem('token', newToken);
//     setToken(newToken);
//     setSession(user);
//     setAuthenticated(true);
//   };

//   // Function to logout (for both systems)
//   const logout = async () => {
//     localStorage.removeItem('token');
//     setToken(null);
//     setSession(null);
//     setAuthenticated(false);
//     // Sign out from NextAuth
//     await fetch('/api/auth/signout', { method: 'POST' });
//   };

//   // Sync with NextAuth session
//   useEffect(() => {
//     if (nextAuthStatus === 'authenticated' && nextAuthSession?.user?.email) {
//       // Use NextAuth JWT and user data
//       login(nextAuthSession.expires, nextAuthSession?.user);
//     }
//   }, [nextAuthSession, nextAuthStatus]);

//   // Authenticate user for custom JWT
//   const authenticateUser = async () => {
//     try {
//       setAuthenticating(true);
//       const savedToken = localStorage.getItem('token');
//       if (savedToken && !nextAuthSession?.jwt) {
//         const res = await getUserRequest();
//         setSession(res?.data);
//         setToken(savedToken);
//         setAuthenticated(true);
//       }
//     } catch (error) {
//       console.log('Error: ', error);
//     } finally {
//       setAuthenticating(false);
//     }
//   };

//   useEffect(() => {
//     if (!nextAuthSession?.jwt) {
//       authenticateUser();
//     }
//   }, [isAuthenticated, nextAuthSession]);

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         session,
//         isAuthenticated,
//         isAuthenticating,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;