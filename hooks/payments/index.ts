import { getPaymentsRequest, createPaymentRequest } from '@/api/payments';
import {
  UseMutationOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Payment {
  _id: string;
  userId: string;
  appId: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: string;
  planType: string;
  billingCycle: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface PaymentsResponse {
  data: Payment[];
  totalPayments: number;
}

export const useGetPayments = (): UseQueryResult<
  AxiosResponse<PaymentsResponse>
> => {
  return useQuery({
    queryKey: ['payments'],
    queryFn: async () => await getPaymentsRequest(),
  });
};

export const useCreatePayment = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => createPaymentRequest(data),
    ...options,
  });

  return { mutation };
};
