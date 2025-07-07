import React from 'react';
import ClientButton from './ClientButton'; // New Client Component for hover effect
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Link from 'next/link';

// Simulate server-side data fetching (replace with real API call if needed)
async function fetchUsersCounts(): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(35000);
    }, 1000);
  });
}

export default async function Home() {
  const usersCounts: number = await fetchUsersCounts(); // Fetch data server-side

  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-900">
          <div className="text-4xl font-bold flex items-center space-x-2">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient font-extrabold tracking-wide">
            TEST
          </span>
          <span className="text-orange-500 glow-text">FIRE</span>
        </div>
        <ul className="hidden md:flex space-x-8">
          <Link href="/blog" className="hover:text-gray-400 cursor-pointer">
            Blog</Link>
            <Link href="/pricing" className="hover:text-gray-400 cursor-pointer">Pricing</Link>
            <Link href="/docs" className="hover:text-gray-400 cursor-pointer">Docs</Link>
        </ul>
        <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            Book a call
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
            Discover the platform
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-3xl md:text-6xl font-bold max-w-xl md:max-w-4xl mb-6">
          Test your mobile apps using AI & from All world Professional{' '}
          <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            TESTERS
          </span>
        </h1>
        <p className="text-gray-400 max-w-md md:max-w-2xl mb-10">
          An OPEN (to all) content management system that uses AI to automate
          various aspects of content creation, optimization, and distribution.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300">
            Get started for free
          </button>
          <span className="text-gray-500 text-sm md:text-base">
            Trusted by {usersCounts}+ people
          </span>
        </div>
      </div>

      {/* Middle Section with Cards */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Discover TestFire by Humint
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Features */}
          <div className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
            <h3 className="text-xl font-bold mb-4">Powerful Features</h3>
            <p className="text-gray-400 mb-6">
              Automate testing with AI-driven tools. Fast, reliable, and scalable solutions for your apps.
            </p>
            <a
              href="#features"
              className="text-orange-500 hover:text-orange-400 transition"
              >
              Explore Features
            </a>
          </div>
          {/* Card 2: Documentation */}
          <div className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
            <h3 className="text-xl font-bold mb-4">Documentation</h3>
            <p className="text-gray-400 mb-6">
              Detailed guides to get started with TestFire. Learn how to integrate and optimize.
            </p>
            <a
              href="https://docs.testfire.ai"
              className="text-orange-500 hover:text-orange-400 transition"
              >
              Read Docs
            </a>
          </div>
          {/* Card 3: Third-Party Projects */}
          <div className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
            <h3 className="text-xl font-bold mb-4">Community Projects</h3>
            <p className="text-gray-400 mb-6">
              Explore third-party integrations and projects built with TestFire by Humint.
            </p>
            <a
              href="https://community.testfire.ai"
              className="text-orange-500 hover:text-orange-400 transition"
              >
              Join Community
            </a>
          </div>
        </div>
      </div>

      {/* Original Features Section */}
      <div className="bg-gray-800 p-6 md:p-10 rounded-3xl max-w-3xl md:max-w-5xl mx-auto mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Create Content and Tests</h3>
            <p className="text-gray-400">Automate Your Business with AI</p>
          </div>
          <ClientButton /> {/* Client Component for hover effect */}
        </div>
      </div>

      {/* Footer */}
     
      {/* End of Footer */} 
    </div>
</>
  );
}