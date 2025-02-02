'use client';
import React, { useEffect, useState } from 'react';

export default function Home({ usersCount }: { usersCount: number }) {
  const [hovered, setHovered] = useState(false);
  const [usersCounts, setUsersCounts] = useState(35000);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setUsersCounts(35000);
    }, 1000);
  }, []); 

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-900">
        {/* <div className="text-2xl font-bold">TESTFIRE</div> */}
        <div className="text-4xl font-bold flex items-center space-x-2">
          {/* Unique Brand Name */}
          <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient font-extrabold tracking-wide">
            TEST
          </span>
          <span className="text-orange-500 glow-text">FIRE</span>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-400 cursor-pointer">Docs</li>
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
          An open source content management system that uses AI to automate
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

      {/* Features Section */}
      <div className="bg-gray-800 p-6 md:p-10 rounded-3xl max-w-3xl md:max-w-5xl mx-auto mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Create Content and Tests</h3>
            <p className="text-gray-400">Automate Your Business with AI</p>
          </div>
          <button
            className={`px-6 py-3 rounded-full transition ${
              hovered ? 'bg-orange-500' : 'bg-gray-700'
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Learn More
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer className="sticky bottom-0 bg-gray-900 p-6 text-center mt-96">
        <p className="text-gray-500">© 2024 TESTFIRE. All rights reserved.</p>
      </footer>
    </div>
  );
}
