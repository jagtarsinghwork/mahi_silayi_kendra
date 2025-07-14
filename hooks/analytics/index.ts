import { getAnalyticsRequest, createAnalyticsRequest } from '@/api/analytics';
import {
  UseMutationOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Metrics {
  dailyInstalls: number;
  dailyActiveUsers: number;
  retentionRate: number;
  crashReports: number;
  averageSessionDuration: number;
}

interface Analytic {
  _id: string;
  appId: string;
  date: string;
  metrics: Metrics;
  createdAt: string;
  updatedAt: string;
}

interface AnalyticsResponse {
  data: Analytic[];
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

export const useGetAnalytics = (): UseQueryResult<
  AxiosResponse<AnalyticsResponse>
> => {
  return useQuery({
    queryKey: ['analytics'],
    queryFn: async () => await getAnalyticsRequest(),
  });
};

export const useCreateAnalytics = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => createAnalyticsRequest(data),
    ...options,
  });

  return { mutation };
};
