// 'use client';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Upload, Monitor, Smartphone, Users, BarChart, ShieldCheck, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Submit Your App for Testing | TestFire',
  description:
    'Submit your mobile app for AI-driven testing with TestFire. Follow our simple process to test on multiple devices and track user engagement.',
  openGraph: {
    title: 'Submit Your App for Testing',
    description: 'Test your app with TestFire’s professional testers and AI tools.',
    url: 'https://testfire.ai/submit-app',
  },
};

const steps = [
  {
    title: 'Submit Your App',
    description: 'Upload your app to the Play Store, provide the link, and create a company or individual profile to start the testing process.',
    icon: <Upload className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'View Your Dashboard',
    description: 'Monitor all your submitted apps on a personalized dashboard with real-time updates.',
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'App Installation',
    description: 'Once payment is verified, we install your app on 12 to 15 devices for comprehensive testing.',
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'API Access for Testers',
    description: 'Grant API access to your first 15 signup users, assigned as testers, to verify user tracking.',
    icon: <Users className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Daily Tracking',
    description: 'Receive daily reports on how many users tested or opened your app, ensuring transparency.',
    icon: <BarChart className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Extra Testing Support',
    description: 'We provide additional users beyond 12-15 to support Closed Testing from the Play Store.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Go Live',
    description: 'After your app goes live, note that payments are non-refundable. We’re with you every step of the way!',
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
  },
];

export default function SubmitAppPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Submit Your App for Testing
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
          Follow our streamlined process to test your mobile app with TestFire’s AI-driven platform and professional testers.
        </p>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-pink-500 animate-line"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start mb-8 relative animate-[fadeIn_0.5s_ease-in] group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full mr-4 z-10 group-hover:bg-gray-700 transition">
                {step.icon}
              </div>
              {/* Step Content */}
              <div className="bg-gray-800 rounded-xl p-6 flex-1 shadow-lg group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform group-hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/submit-app/submission-form"
            className="px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition"
          >
            Start Testing Now
          </Link>
        </div>
      </section>
    </div>
  );
}