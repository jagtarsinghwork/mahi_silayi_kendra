"use client"
import React from 'react';
import { Skeleton } from '../../Skeleton';

// Reusable Payment Metric Component
function PaymentMetric({ title, value, change, loading }: { 
  title: string; 
  value: number | string; 
  change: number;
  loading: boolean;
}) {
  return (
    <div className="bg-gray-700 rounded-lg p-4">
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      {loading ? (
        <Skeleton className="h-8 w-20 bg-gray-600 mb-1" />
      ) : (
        <p className="text-2xl font-bold mb-1">{value}</p>
      )}
      {!loading && change !== 0 && (
        <p className={`text-sm ${
          change > 0 ? 'text-green-400' : 'text-red-400'
        }`}>
          {change > 0 ? '↑' : '↓'} {Math.abs(change)}% from last period
        </p>
      )}
    </div>
  );
}


export default PaymentMetric;