import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Submission Confirmation | TestFire',
  description:
    'Your app submission was successful! Learn about the next steps in TestFire’s testing process.',
  openGraph: {
    title: 'Submission Confirmation',
    description: 'Your app submission was successful with TestFire.',
    url: 'https://testfire.ai/submit-app/confirmation',
  },
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <section className="max-w-4xl mx-auto px-6 text-center">
        <CheckCircle className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-[fadeIn_0.5s_ease-in]" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Submission Successful!
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.2s' }}>
          Thank you for submitting your app to TestFire. Our team will verify your payment and install your app on 12-15 devices for testing. You’ll soon receive access to your personalized dashboard to monitor progress.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.3s' }}>
            Next Steps
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.4s' }}>
            1. Await payment verification (usually within 24 hours).<br />
            2. Access your dashboard to view app status.<br />
            3. Provide API access for your first 15 testers.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.5s' }}
          >
            Go to Dashboard
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        <div className="mt-6">
          <Link
            href="/submit-app"
            className="text-gray-400 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.6s' }}
          >
            Back to Submission Process
          </Link>
        </div>
      </section>
    </div>
  );
}