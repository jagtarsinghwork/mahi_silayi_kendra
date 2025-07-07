'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-10 w-1/3 bg-gray-800 rounded animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 bg-gray-800 rounded-xl animate-pulse"></div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 h-96 bg-gray-800 rounded-xl animate-pulse"></div>
        <div className="lg:col-span-1 h-96 bg-gray-800 rounded-xl animate-pulse"></div>
      </div>
    </div>
  )
}


export default LoadingSkeleton;