import {
  getCompanyRequest,
  createCompanyRequest,
  updateCompanyRequest,
} from '@/api/company';
import {
  UseMutationOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Company {
  name: string;
  email: string;
  profile: string;
  ceo: string;
  address: string;
  user_id?: string;
}

export const useGetCompany = (): UseQueryResult<AxiosResponse<Company>> => {
  return useQuery({
    queryKey: ['company'],
    queryFn: async () => await getCompanyRequest(),
  });
};

export const useCreateCompany = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => createCompanyRequest(data),
    ...options,
  });

  return { mutation };
};

export const useUpdateCompany = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => updateCompanyRequest(data),
    ...options,
  });

  return { mutation };
};
