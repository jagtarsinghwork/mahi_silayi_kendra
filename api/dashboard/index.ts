import axios from 'axios';

interface AppAnalytics {
  totalInstalls: number;
  activeUsers: number;
  pendingInstalls: number;
  daysToApproval: number;
  successfulPayments: number;
  pendingPayments: number;
  totalRevenue: number;
  paymentChange: number;
  revenueChange: number;
}

interface SubmittedApp {
  id: string;
  name: string;
  packageName: string;
  status: 'approved' | 'pending' | 'rejected';
  installs: number;
  daysLeft: number;
}

export const getAppAnalytics = async (): Promise<AppAnalytics> => {
  const response = await axios.get('/api/dashboard/analytics');
  return response.data;
};

export const getSubmittedApps = async (): Promise<SubmittedApp[]> => {
  const response = await axios.get('/api/dashboard/apps');
  return response.data;
};
