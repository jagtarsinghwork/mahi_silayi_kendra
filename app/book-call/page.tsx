import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Call | TestFire by Humint',
  description:
    'Schedule a call with the TestFire team to learn how our AI-driven testing platform can transform your app development process.',
  openGraph: {
    title: 'Book a Call with TestFire',
    description: 'Connect with our team to explore TestFire’s testing solutions.',
    url: 'https://testfire.ai/book-call',
  },
};

export default async function BookCallPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Book a Call with TestFire
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Connect with our team to discuss how TestFire’s AI-driven testing platform can meet your needs. Fill out the form below to schedule a call.
        </p>
        <form className="bg-gray-800 p-6 rounded-xl space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              placeholder="Tell us about your needs"
              rows={5}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Schedule a Call
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}