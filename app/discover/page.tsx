import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover TestFire | Humint',
  description:
    'Explore TestFire’s AI-driven mobile app testing platform. Automate testing, scale with ease, and leverage global professional testers.',
  openGraph: {
    title: 'Discover TestFire',
    description: 'Learn about TestFire’s powerful AI testing tools.',
    url: 'https://testfire.ai/discover',
  },
};

export default async function DiscoverPage() {
  const features = [
    {
      title: 'AI-Driven Automation',
      description: 'Automate complex testing workflows with TestFire’s intelligent AI tools.',
    },
    {
      title: 'Global Tester Network',
      description: 'Access professional testers worldwide for diverse, real-world testing scenarios.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Scale testing across multiple devices and platforms effortlessly.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Discover TestFire
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Unlock the power of AI-driven mobile app testing with TestFire by Humint. Streamline your development process with our scalable, automated solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <h2 className="text-xl font-bold mb-4 text-white">{feature.title}</h2>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/signup"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Start Testing Now
          </a>
        </div>
      </div>
    </div>
  );
}