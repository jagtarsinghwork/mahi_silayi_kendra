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

interface Contact {
  email: string;
  phone: string;
  website: string;
}

interface Analytics {
  totalApps: number;
  totalTesters: number;
  activeApps: number;
}

interface Company {
  _id: string;
  contact: Contact;
  analytics: Analytics;
  name: string;
  profile: string;
  ceo: string;
  address: string;
  userId: string;
  apps: string[];
  testers: string[];
  status: string;
  created_at: string;
  updated_at: string;
  __v: number;
}

interface CompanyResponse {
  data: Company;
  message: string;
  success: boolean;
  error: boolean;
}

export const useGetCompany = (): UseQueryResult<
  AxiosResponse<CompanyResponse>
> => {
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
