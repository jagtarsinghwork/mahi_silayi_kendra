'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Link2, FileText, User, Mail, Building, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App Submission & Profile Creation | TestFire',
  description:
    'Submit your mobile app and create your profile with TestFire to start AI-driven testing and track user engagement.',
  openGraph: {
    title: 'App Submission & Profile Creation',
    description: 'Start testing your app with TestFire’s professional testers.',
    url: 'https://testfire.ai/submit-app/form',
  },
};

export default function AppSubmissionFormPage() {
  const [formData, setFormData] = useState({
    appName: '',
    playStoreLink: '',
    appDescription: '',
    name: '',
    email: '',
    userType: 'individual',
    companyWebsite: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!'); // Replace with proper UI feedback
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Submit Your App & Create Profile
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
          Get started with TestFire by submitting your app details and creating
          your company or individual profile.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          {/* App Submission Section */}
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            App Submission
          </h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4 animate-[fadeIn_0.5s_ease-in]">
              <FileText className="w-6 h-6 text-blue-400" />
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">App Name</label>
                <input
                  type="text"
                  name="appName"
                  value={formData.appName}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your app name"
                  required
                />
              </div>
            </div>
            <div
              className="flex items-center space-x-4 animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: '0.1s' }}
            >
              <Link2 className="w-6 h-6 text-blue-400" />
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">
                  Play Store Link
                </label>
                <input
                  type="url"
                  name="playStoreLink"
                  value={formData.playStoreLink}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Play Store link"
                  required
                />
              </div>
            </div>
            <div
              className="flex items-center space-x-4 animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: '0.2s' }}
            >
              <FileText className="w-6 h-6 text-blue-400" />
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">
                  App Description
                </label>
                <textarea
                  name="appDescription"
                  value={formData.appDescription}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Describe your app"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Profile Creation Section */}
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Profile Creation
          </h2>
          <div className="space-y-6">
            <div
              className="flex items-center space-x-4 animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: '0.3s' }}
            >
              <User className="w-6 h-6 text-blue-400" />
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name or company name"
                  required
                />
              </div>
            </div>
            <div
              className="flex items-center space-x-4 animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: '0.4s' }}
            >
              <Mail className="w-6 h-6 text-blue-400" />
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div
              className="flex items-center space-x-4 animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: '0.5s' }}
            >
              <Building className="w-6 h-6 text-blue-400" />
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">User Type</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                </select>
              </div>
            </div>
            <div
              className="flex items-center space-x-4 animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: '0.6s' }}
            >
              <Globe className="w-6 h-6 text-blue-400" />
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">
                  Company Website (Optional)
                </label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your company website"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition"
            >
              Submit Application
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link
            href="/submit-app"
            className="text-gray-400 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition"
          >
            Back to Submission Process
          </Link>
        </div>
      </section>
    </div>
  );
}
