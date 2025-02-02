'use client';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { data: session } = useSession();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://192.168.31.47:3000/api/users/asasignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log("data",data);
      if (response.ok) {
        console.log("data",data);
        localStorage.setItem("token",data?.token)
        setMessage('Sign in successful!');
      } else {
        setMessage(data.message || 'Sign in failed');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-5 md:p-10">
      <div className="bg-gradient-to-b from-[#2b1b30] to-[#1b1b2b] p-5 md:p-10 rounded-3xl shadow-lg max-w-5xl w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section (Login Form) */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Welcome back</h2>
          <p className="text-gray-300">Please Enter your Account details</p>

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between text-gray-300 text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-pink-500" />
                <span>Keep me logged in</span>
              </label>
              <a href="#" className="text-pink-400 hover:underline">Forgot Password</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full text-white font-semibold hover:opacity-90 transition"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          {message && <p className="text-white mt-4">{message}</p>}
          {session ? (
            <>
              <p className="text-gray-300">Signed in as {session.user?.email}</p>
              <button
                onClick={() => signOut()}
                className="mt-4 py-2 px-4 bg-red-600 text-white rounded-full"
              >
                Sign out
              </button>
            </>
          ) : (
            <div className="flex items-center justify-center space-x-6 mt-6">
              <button className="bg-white p-3 rounded-full shadow-md" onClick={() => signIn('google')}>
                <img src="/google-icon.svg" alt="Google" className="w-6" />
              </button>
              <button className="bg-white p-3 rounded-full shadow-md" onClick={() => signIn('github')}>
                <img src="/github-icon.svg" alt="Github" className="w-6" />
              </button>
              <button className="bg-white p-3 rounded-full shadow-md" onClick={() => signIn('facebook')}>
                <img src="/facebook-icon.svg" alt="Facebook" className="w-6" />
              </button>
            </div>
          )}
        </div>

        {/* Right Section (Testimonials) */}
        <div className="flex-1 bg-gradient-to-b from-[#1e2235] to-[#141c2b] rounded-3xl p-5 md:p-8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">What our Jobseekers Say</h3>
            <p className="italic text-gray-300">
              “Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.”
            </p>
            <div className="mt-6">
              <p className="font-bold">Mas Parjono</p>
              <p className="text-gray-400">UI Designer at Google</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-6">
            <button className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
