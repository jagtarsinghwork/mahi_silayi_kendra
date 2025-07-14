import React from 'react';

interface DualViewCardProps {
  title: string;
  description: string;
  imageUrl: string; // Path to image in public/ folder
  align: 'left' | 'right'; // Determines image position
}

export default function DualViewCard({ title, description, imageUrl, align }: DualViewCardProps) {
  const isLeftAligned = align === 'left';

  return (
    <div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] max-w-4xl mx-auto mb-8"
    >
      <div className={`flex flex-col ${isLeftAligned ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 bg-gray-700 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-800/90">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {title}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 font-semibold transition inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}