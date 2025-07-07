import React from 'react';
import FeatureCard from '@/components/common/FeatureCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TestFire Features | Humint',
  description:
    'Discover TestFire’s powerful features for mobile app testing, including manual testing, guaranteed Play Store approval in 12 days, and API-driven user tracking.',
  openGraph: {
    title: 'TestFire Features',
    description: 'Explore TestFire’s AI-driven testing and Play Store approval features.',
    url: 'https://testfire.ai/features',
  },
};

interface Feature {
  title: string;
  description: string;
  code?: string; // Optional code snippet for API-related features
}

export default async function FeaturesPage() {
  const features: Feature[] = [
    {
      title: 'Manual Testing by Experts',
      description:
        'Our team of professional testers manually validates your app across diverse devices and scenarios, ensuring top-notch quality and user experience.',
    },
    {
      title: 'Guaranteed Play Store Approval',
      description:
        'With TestFire, your app is guaranteed to pass Google Play’s approval process, meeting all requirements for a successful launch.',
    },
    {
      title: '12-Day Play Store Approval Process',
      description:
        "We streamline the closed testing phase with 12+ testers opted in for 14 days, ensuring your app meets Google Play’s requirements in just 12 days.',[](https://web.swipeinsight.app/posts/google-eases-app-testing-rules-for-new-developers-on-play-store-13656)"
    },
    {
      title: '100% Approval Guarantee',
      description:
        'Our proven testing process ensures 100% approval for your app on Google Play, or we provide guidance and retesting support.',
    },
    {
      title: 'API for Server Communication & User Tracking',
      description:
        'Integrate our APIs to communicate with TestFire’s servers and track daily app opens and user activity in real-time.',
      code: `import { TestFire } from 'testfire-sdk';

const testfire = new TestFire({
  apiKey: 'YOUR_API_KEY',
  environment: 'production',
});

async function trackUserActivity() {
  try {
    const response = await testfire.track({
      appId: 'your-app-id',
      event: 'app_open',
      userId: 'user-123',
      timestamp: new Date().toISOString(),
    });
    console.log('Tracking Data:', response);
  } catch (error) {
    console.error('Tracking Failed:', error);
  }
}

trackUserActivity();`,
    },
    {
      title: 'Time Tracking for User Engagement',
      description:
        'Monitor how long users spend on your app with our time tracking API, providing insights to optimize engagement.',
      code: `async function trackSessionTime() {
  try {
    const response = await testfire.trackTime({
      appId: 'your-app-id',
      userId: 'user-123',
      sessionDuration: 300, // seconds
      timestamp: new Date().toISOString(),
    });
    console.log('Session Time Tracked:', response);
  } catch (error) {
    console.error('Time Tracking Failed:', error);
  }
}

trackSessionTime();`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          TestFire Features
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Discover how TestFire’s AI-driven testing platform, backed by expert manual testing and robust APIs, ensures your app’s success on Google Play and beyond.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="/discover"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}