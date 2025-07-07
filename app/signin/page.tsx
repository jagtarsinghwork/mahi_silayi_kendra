

'use client';
import React, { useState, useContext } from 'react';
// import { signIn, signOut, useSession } from 'next-auth/react';
import { AuthContext } from '@/context/AuthContext';
import { toast } from 'sonner';
import { Mail, Lock, ChevronLeft, ChevronRight, Github, Facebook } from 'lucide-react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useSignInRequest } from '@/hooks/auth';


interface LoginResponse {
  token: string;
  user: { id: string; email: string; name: string };
  message?: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login,session } = useContext(AuthContext);
  
  // const { session, isAuthenticated, isAuthenticating, logout } = useContext(AuthContext);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { mutation } = useSignInRequest({
    onSuccess: (data) => {
      toast.success('Signed in successfully!');
      if (login) {
        login(data.data.token, { id: data.data._id, email: data.data.email, name: '',...data.data }); // Adjust based on backend response
        localStorage.setItem('token', data.data.token); // Store token
        document.cookie = `token=${data.data.token}; path=/; max-age=86400`;
        window.location.href = '/dashboard';
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Sign in failed');
      console.error('Error signing in:', error);
    },
  });

  // Destructure mutation to fix TypeScript error
  const { mutate, isPending, error, data } = mutation;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    mutate(formData);
  };

  const testimonials = [
    {
      quote: "TestFire's AI-driven testing made our app launch seamless. The dashboard is intuitive and helped us track progress effortlessly.",
      name: 'Amit Sharma',
      role: 'Startup Founder',
    },
    {
      quote: 'The testing process was quick and thorough, catching issues we missed. Highly recommend TestFire!',
      name: 'Priya Gupta',
      role: 'Product Manager',
    },
    {
      quote: "TestFire's platform is a game-changer for developers. The verification and testing flow is smooth and reliable.",
      name: 'Rahul Verma',
      role: 'CTO',
    },
  ];



  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
          Sign in to access your TestFire dashboard and manage your app testing.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Login Form */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg group hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Account Login
            </h2>

            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <div className="flex items-center bg-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-white focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Password</label>
                <div className="flex items-center bg-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                  <Lock className="w-5 h-5 text-blue-400 mr-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-white focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-gray-400 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-400 rounded" />
                  <span>Keep me logged in</span>
                </label>
                <Link href="/forgot-password" className="text-blue-400 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {/* <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition disabled:opacity-50"
                disabled={isPending}
              >
                {isPending ? 'Signing in...' : 'Sign in'}
              </button> */}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition disabled:opacity-50"
                disabled={isPending} // Button disabled when loading
              >
                {isPending ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            {data?.message && (
              <p className="text-gray-200 mt-4 text-center">
                {data.message}
              </p>
            )}
            {error && (
              <p className="text-red-500 mt-4 text-center">
                {error.message}
              </p>
            )}

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-center mb-4">Or sign in with:</p>
              <div className="flex items-center justify-center space-x-4">
                <button
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                  // onClick={() => signIn('google')}
                >
                  <Icon icon="mdi:google" className="w-5 h-5 text-blue-400" />
                </button>
                <button
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                  // onClick={() => signIn('github')}
                >
                  <Github className="w-5 h-5 text-blue-400" />
                </button>
                <button
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                  // onClick={() => signIn('facebook')}
                >
                  <Facebook className="w-5 h-5 text-blue-400" />
                </button>
              </div>
            </div>

            {session && (
              <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                <p className="text-gray-400">Signed in as {session?.email}</p>
                <button
                  // onClick={() => signOut({ callbackUrl: '/' })}
                  className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>

          {/* Testimonials Section */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg group hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              What Our Users Say
            </h3>

            <div className="relative min-h-[200px]">
              <div className="absolute inset-0 flex flex-col justify-between">
                <p className="italic text-gray-400 text-lg mb-6">"{testimonials[currentTestimonial].quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                onClick={handlePrevTestimonial}
              >
                <ChevronLeft className="w-5 h-5 text-blue-400" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${currentTestimonial === index ? 'bg-blue-400' : 'bg-gray-600'}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              <button
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                onClick={handleNextTestimonial}
              >
                <ChevronRight className="w-5 h-5 text-blue-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;