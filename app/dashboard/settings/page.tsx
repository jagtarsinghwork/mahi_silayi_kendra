"use client";
// dashboard/settings 
import React, { useState } from 'react';

export default function Page() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Implement save functionality here
    console.log('Settings saved:', { username, email });
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <button
        onClick={handleSave}
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
      >
        Save
      </button>
    </div>
  );
}