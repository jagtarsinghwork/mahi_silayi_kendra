'use client';
import React, { useState } from 'react';

export default function ClientButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`px-6 py-3 rounded-full transition ${
        hovered ? 'bg-orange-500' : 'bg-gray-700'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Learn More
    </button>
  );
}