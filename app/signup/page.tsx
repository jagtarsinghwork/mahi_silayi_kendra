'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { Mail, Lock, User, ChevronLeft, ChevronRight, Github, Facebook } from 'lucide-react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "TestFire's signup process was quick and easy, getting us to testing in no time!",
      name: 'Amit Sharma',
      role: 'Startup Founder',
    },
    {
      quote: "The platform's AI-driven testing is seamless. Signing up was a breeze!",
      name: 'Priya Gupta',
      role: 'Product Manager',
    },
    {
      quote: "TestFire's verification and testing flow is smooth and reliable from the start.",
      name: 'Rahul Verma',
      role: 'CTO',
    },
  ];

  // Handle form submission
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      toast.error('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://192.168.31.47:3000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Signup successful!');
        toast.success('Signup successful! Please sign in.');
      } else {
        setMessage(data.message || 'Signup failed');
        toast.error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setMessage('An error occurred. Please try again.');
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          Create Your Account
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
          Sign up to start testing your apps with TestFire's AI-driven platform.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Signup Form */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg group hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Account Details
            </h2>
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Full Name</label>
                <div className="flex items-center bg-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                  <User className="w-5 h-5 text-blue-400 mr-3" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent text-white focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

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

              <div>
                <label className="block text-gray-400 mb-2">Confirm Password</label>
                <div className="flex items-center bg-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                  <Lock className="w-5 h-5 text-blue-400 mr-3" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-transparent text-white focus:outline-none"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign up'}
              </button>
            </form>

            {message && (
              <p
                className={`mt-4 text-center ${
                  message.includes('successful') ? 'text-gray-200' : 'text-red-500'
                }`}
              >
                {message}
              </p>
            )}

            <div className="flex items-center justify-center space-x-6 mt-6">
              <p className="text-gray-400">Or sign up with:</p>
              <button
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                onClick={() => signIn('google')}
              >
                <Icon icon="mdi:google" className="w-5 h-5 text-blue-400" />
              </button>
              <button
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                onClick={() => signIn('github')}
              >
                <Github className="w-5 h-5 text-blue-400" />
              </button>
              <button
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                onClick={() => signIn('facebook')}
              >
                <Facebook className="w-5 h-5 text-blue-400" />
              </button>
            </div>
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
            Already have an account?{' '}
            <Link href="/signin" className="text-blue-400 hover:text-blue-300 transition">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;