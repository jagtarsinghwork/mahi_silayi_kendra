'use client';
import React from 'react';
import { BarChart, Smartphone, Users, Clock, CheckCircle, Download } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAppAnalytics, getSubmittedApps } from './../../../api/dashboard';
import { Card, CardHeader, CardTitle, CardContent } from './../../../components/ui/card';
import { Skeleton } from '../../../components/ui/Skeleton';

export default function AnalyticsPage() {
  // Fetch analytics data
  const { data: analytics, isLoading: analyticsLoading } = useQuery({
    queryKey: ['app-analytics'],
    queryFn: getAppAnalytics
  });

  // Fetch submitted apps
  const { data: apps, isLoading: appsLoading } = useQuery({
    queryKey: ['submitted-apps'],
    queryFn: getSubmittedApps
  });

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 md:px-8">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          App Analytics Dashboard
        </h1>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard 
            title="Total Installs" 
            value={analytics?.totalInstalls || 0} 
            icon={<Download className="w-6 h-6 text-purple-400" />}
            loading={analyticsLoading}
          />
          <MetricCard 
            title="Active Users" 
            value={analytics?.activeUsers || 0} 
            icon={<Users className="w-6 h-6 text-purple-400" />}
            loading={analyticsLoading}
          />
          <MetricCard 
            title="Pending Installs" 
            value={analytics?.pendingInstalls || 0} 
            icon={<Clock className="w-6 h-6 text-purple-400" />}
            loading={analyticsLoading}
          />
          <MetricCard 
            title="Days to Approval" 
            value={analytics?.daysToApproval || 0} 
            icon={<CheckCircle className="w-6 h-6 text-purple-400" />}
            loading={analyticsLoading}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* App List */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Your Submitted Apps
                  </CardTitle>
                  <span className="text-gray-400">
                    {apps?.length || 0} {apps?.length === 1 ? 'app' : 'apps'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                {appsLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-24 w-full bg-gray-700 rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {apps?.map((app) => (
                      <AppCard key={app.id} app={app} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Analytics Chart */}
          <div className="lg:col-span-1">
            <Card className="h-full hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-shadow">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Installation Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                {analyticsLoading ? (
                  <Skeleton className="h-64 w-full bg-gray-700 rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center h-64">
                    <BarChart className="w-12 h-12 text-purple-400 mb-4" />
                    <p className="text-gray-400 text-center">
                      Installation data visualization coming soon
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Analytics */}
        <div className="mt-8">
          <Card className="hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-shadow">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Payment Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PaymentMetric 
                  title="Successful Payments" 
                  value={analytics?.successfulPayments || 0} 
                  change={analytics?.paymentChange || 0}
                  loading={analyticsLoading}
                />
                <PaymentMetric 
                  title="Pending Payments" 
                  value={analytics?.pendingPayments || 0} 
                  change={0}
                  loading={analyticsLoading}
                />
                <PaymentMetric 
                  title="Total Revenue" 
                  value={`$${analytics?.totalRevenue?.toLocaleString() || '0'}`} 
                  change={analytics?.revenueChange || 0}
                  loading={analyticsLoading}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

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

// Reusable Metric Card Component
function MetricCard({ title, value, icon, loading }: { 
  title: string; 
  value: number | string; 
  icon: React.ReactNode;
  loading: boolean;
}) {
  return (
    <Card className="hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-shadow">
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