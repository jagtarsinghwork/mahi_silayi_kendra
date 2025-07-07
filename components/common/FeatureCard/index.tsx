import React from 'react';
import CodeBlock from './../CodeBlock';

interface Feature {
  title: string;
  description: string;
  code?: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
      <h2 className="text-xl font-bold mb-4 text-white">{feature.title}</h2>
      <p className="text-gray-400 mb-6">{feature.description}</p>
      {feature.code && (
        <CodeBlock language="typescript" code={feature.code} />
      )}
    </div>
  );
}