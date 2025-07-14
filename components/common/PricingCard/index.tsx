import React from 'react';
import Link from 'next/link';

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg ${
        plan.highlighted ? 'border-2 border-orange-500' : 'border border-gray-700'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{plan.title}</h2>
      <p className="text-3xl font-bold mb-6 text-orange-500">{plan.price}</p>
      <ul className="space-y-2 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-center">
            <svg
              className="w-5 h-5 text-orange-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={plan.id === 'enterprise' ? '/contact' : '/signup'}
        className={`block text-center px-4 py-2 rounded-lg ${
          plan.highlighted
            ? 'bg-orange-500 hover:bg-orange-600 text-white'
            : 'bg-gray-700 hover:bg-gray-600 text-white'
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}