'use client';
import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
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
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-10">
      <div className="bg-gradient-to-b from-[#2b1b30] to-[#1b1b2b] p-10 rounded-3xl shadow-lg max-w-5xl w-full flex space-x-8 animate-fadeIn">
        {/* Left Section (Signup Form) */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-bold text-white animate-slideIn">Create Your Account</h2>
          <p className="text-gray-300">Sign up to access your account</p>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </form>

          {/* Feedback Message */}
          {message && <p className="text-white mt-4 animate-fadeIn">{message}</p>}

          {/* Social Signup Buttons */}
          <div className="flex items-center justify-center space-x-6 mt-6">
            <button onClick={() => alert('Sign up with Google')} className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
              <img src="/google-icon.svg" alt="Google" className="w-6" />
            </button>
            <button onClick={() => alert('Sign up with GitHub')} className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
              <img src="/github-icon.svg" alt="GitHub" className="w-6" />
            </button>
            <button onClick={() => alert('Sign up with Facebook')} className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
              <img src="/facebook-icon.svg" alt="Facebook" className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
