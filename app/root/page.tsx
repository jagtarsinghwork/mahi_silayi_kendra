import React from 'react';
import ClientButton from '../home/ClientButton'; // New Client Component for hover effect
import DualViewCard from '@/components/common/DualViewCard';
import { Metadata } from 'next';
import Link from 'next/link';
import TechStackAndTestimonials from '@/components/common/TechStack/TechStack';

// Simulate server-side data fetching (replace with real API call if needed)
async function fetchUsersCounts(): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(35000);
    }, 1000);
  });
}

export const metadata: Metadata = {
  title: 'TestFire Home | Humint',
  description:
    'Explore TestFire, an AI-driven platform for mobile app testing, featuring professional testers and developer-focused portfolio solutions.',
  openGraph: {
    title: 'TestFire Home',
    description: 'Discover TestFire’s AI testing platform and developer portfolio.',
    url: 'https://testfire.ai/',
  },
};

export default async function Home() {

  const usersCounts: number = await fetchUsersCounts();

  const portfolioItems = [
    {
      title: 'E-Commerce App Testing',
      description: 'Optimized testing for a leading e-commerce platform, ensuring 99% uptime.',
      image: '/ecommerce.jpg', // Replace with actual image path
    },
    {
      title: 'Fitness App Success',
      description: 'Automated testing boosted performance for a fitness app, approved in 10 days.',
      image: '/watch.jpg', // Replace with actual image path
    },
    {
      title: 'Service App Integration',
      description: 'Streamlined testing for a service app, integrating with third-party APIs seamlessly.',
      image: '/ecommerce_app.jpg', // Replace with actual image path
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section (Enhanced with Portfolio Feel) */}
      <div className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <h1 className="text-4xl md:text-7xl font-bold max-w-4xl mb-6 leading-tight">
          Test Your Mobile Apps with AI & Global{' '}
          <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Professional Testers
          </span>
        </h1>
        <p className="text-gray-400 max-w-xl mb-10 text-lg">
          An open platform for developers to automate testing, optimize apps, and showcase their portfolio with TestFire by Humint.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/signin" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300 font-semibold">
            Get Started for Free
          </Link>
          <span className="text-gray-500 text-base md:text-lg">
            Trusted by {usersCounts}+ developers
          </span>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] top-[-200px] left-[-200px] rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute w-[400px] h-[400px] bottom-[-150px] right-[-150px] rounded-full bg-blue-500/10 blur-2xl" />
        </div>
      </div>

         {/* App Submission Promo Section */}
         <div className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Submit Your App for Testing
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Get your mobile app tested by our AI-driven platform and professional testers. Start with a simple submission process and track results in real-time.
        </p>
        <Link
          href="/submit-app"
          className="px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition"
        >
          Learn How to Submit
        </Link>
      </div>

    
      {/* Portfolio Section with DualViewCards */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          WHAT WE CAN
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Explore real-world projects where TestFire has empowered developers and ensured app success.
        </p>
        <DualViewCard
          title={portfolioItems[0].title}
          description={portfolioItems[0].description}
          imageUrl={portfolioItems[0].image}
          align="left"
        />
        <DualViewCard
          title={portfolioItems[1].title}
          description={portfolioItems[1].description}
          imageUrl={portfolioItems[1].image}
          align="right"
        />
        <DualViewCard
          title={portfolioItems[2].title}
          description={portfolioItems[2].description}
          imageUrl={portfolioItems[2].image}
          align="left"
        />
      </div>

      {/* Enhanced Cards Section (Portfolio-Inspired) */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          DISCOVER TESTFIRE SOLUTIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
            <h3 className="text-xl font-bold mb-4 text-white">AI-Powered Testing</h3>
            <p className="text-gray-400 mb-6">
              Automate testing with cutting-edge AI tools, tailored for developers.
            </p>
            <Link
              href="/features"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
            <h3 className="text-xl font-bold mb-4 text-white">Developer Documentation</h3>
            <p className="text-gray-400 mb-6">
              Comprehensive guides to integrate and optimize with TestFire.
            </p>
            <Link
              href="/docs"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Read Docs
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
            <h3 className="text-xl font-bold mb-4 text-white">Community Projects</h3>
            <p className="text-gray-400 mb-6">
              Showcase your work with third-party integrations using TestFire.
            </p>
            <Link
              href="/community"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Join Community
            </Link>
          </div> 
        </div>
      </div>
      
      <TechStackAndTestimonials />
      

      {/* Features Section (Enhanced) */}
      {/* <div className="bg-gray-800 p-6 md:p-10 rounded-3xl max-w-3xl md:max-w-5xl mx-auto mt-16 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Create & Automate Tests</h3>
            <p className="text-gray-400">Empower your developer portfolio with AI automation.</p>
          </div>
          <ClientButton />
        </div>
      </div> */}
    </div>
  );
}