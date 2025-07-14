
"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '../../Skeleton';
// Reusable Metric Card Component

function MetricCard({ title, value, icon, loading }: { 
  title: string; 
  value: number | string; 
  icon: React.ReactNode;
  loading: boolean;
}) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-8 w-20 bg-gray-700" />
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
      </CardContent>
    </Card>
  );
}

export default MetricCard