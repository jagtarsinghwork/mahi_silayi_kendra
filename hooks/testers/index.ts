import { getTestersRequest, createTesterRequest } from '@/api/testers';
import {
  UseMutationOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface DeviceInfo {
  model: string;
  os: string;
  version: string;
}

interface Tester {
  _id: string;
  userId: string;
  appId: string | null;
  deviceInfo: DeviceInfo;
  status: string;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface TestersResponse {
  data: Tester[];
  totalTesters: number;
}

export const useGetTesters = (): UseQueryResult<
  AxiosResponse<TestersResponse>
> => {
  return useQuery({
    queryKey: ['testers'],
    queryFn: async () => await getTestersRequest(),
  });
};

export const useCreateTester = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => createTesterRequest(data),
    ...options,
  });

  return { mutation };
};
