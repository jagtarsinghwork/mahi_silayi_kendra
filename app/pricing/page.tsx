import React from 'react';
import PricingCard from '@/components/common/PricingCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TestFire Pricing | Humint',
  description:
    'Explore TestFire’s flexible pricing plans for AI-driven mobile app testing. Choose the plan that fits your needs.',
  openGraph: {
    title: 'TestFire Pricing',
    description: 'Affordable pricing plans for TestFire’s testing platform.',
    url: 'https://testfire.ai/pricing',
  },
};

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export default async function PricingPage() {
  // Mock pricing plans (replace with API fetch or CMS data)
  const plans: PricingPlan[] = [
    {
      id: 'basic',
      title: 'Basic',
      price: '$29/mo',
      features: [
        '10 automated tests/month',
        '1 device type',
        'Email support',
        'Basic analytics',
      ],
      cta: 'Get Started',
    },
    {
      id: 'pro',
      title: 'Pro',
      price: '$99/mo',
      features: [
        '50 automated tests/month',
        '5 device types',
        'Priority email support',
        'Advanced analytics',
        'CI/CD integration',
      ],
      cta: 'Choose Pro',
      highlighted: true,
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited tests',
        'All device types',
        '24/7 dedicated support',
        'Custom integrations',
        'Full analytics suite',
      ],
      cta: 'Contact Us',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          TestFire Pricing
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Choose a plan that fits your app testing needs. From startups to enterprises, TestFire has you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}