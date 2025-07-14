import { getAppsRequest, createAppRequest, updateAppRequest } from '@/api/apps';
import {
  UseMutationOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface App {
  _id: string;
  userId: string;
  name: string;
  packageName: string;
  description: string;
  iconUrl: string;
  playStoreUrl: string;
  status: string;
  currentVersion: string;
  testingConfig: {
    devices: string[];
    countries: string[];
    testDuration: number;
  };
  analytics: {
    installs: number;
    activeUsers: number;
    crashRate: number;
    rating: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AppsResponse {
  data: App[];
  totalUsers: number;
  totalApps: number;
  totalOrders: number;
  successfulPayments: number;
}

export const useGetApps = (): UseQueryResult<AxiosResponse<AppsResponse>> => {
  return useQuery({
    queryKey: ['apps'],
    queryFn: async () => await getAppsRequest(),
  });
};

export const useCreateApp = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => createAppRequest(data),
    ...options,
  });

  return { mutation };
};

export const useUpdateApp = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => updateAppRequest(data),
    ...options,
  });

  return { mutation };
};
