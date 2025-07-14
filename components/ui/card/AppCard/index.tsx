"use client"
import React from 'react';

// Reusable App Card Component
function AppCard({ app }: { app: any }) {
  return (
    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition group">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-lg group-hover:text-purple-400 transition">
            {app.name}
          </h3>
          <p className="text-gray-400 text-sm">{app.packageName}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${
          app.status === 'approved' ? 'bg-green-900 text-green-400' :
          app.status === 'pending' ? 'bg-yellow-900 text-yellow-400' :
          'bg-red-900 text-red-400'
        }`}>
          {app.status}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 text-sm">Installs</p>
          <p className="font-medium">{app.installs}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Days Left</p>
          <p className="font-medium">{app.daysLeft}</p>
        </div>
      </div>
    </div>
  );
}

export default AppCard;