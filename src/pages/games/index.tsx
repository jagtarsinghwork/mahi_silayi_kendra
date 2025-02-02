"use client";

import React, { useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
  result: number;
  startTime: string;
  closeTime: string;
}

export default function Index() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/games/getGames');
        const data = await response.json();
        console.log('Games:', data);
        setGames(data?.response);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-lg animate-pulse">
        <h1 className="text-3xl font-bold mb-6 text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in">Games</h1>
      <ul className="space-y-4">
        {games?.length > 0  &&  games?.map(game => (
          <li key={game.id} className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <p className="text-gray-600 mb-1">Result: <span className="font-medium">{game.result}</span></p>
            <p className="text-gray-600 mb-1">Start Time: <span className="font-medium">{new Date(game.startTime).toLocaleString()}</span></p>
            <p className="text-gray-600">Close Time: <span className="font-medium">{new Date(game.closeTime).toLocaleString()}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
}