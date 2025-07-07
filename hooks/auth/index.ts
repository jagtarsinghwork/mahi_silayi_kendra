import {
  getClientGoalRequest,
  getUserRequest,
  signInRequest,
  signUpRequest,
  updateUserProfile,
  verifyOtpRequest,
} from '@/api/auth';
import { ApiResponse } from '@/types/api';
import { ClientGoal, User } from '@/types/auth';
import {
  UseMutationOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const useSignUpRequest = (
  options?: UseMutationOptions<AxiosResponse, Error, FormData, unknown>,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => signUpRequest(data),
    ...options,
  });

  return { mutation };
};

export const useSignInRequest = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => signInRequest(data),
    ...options,
  });

  return { mutation };
};

export const useVerifyOtpRequest = (
  options?: UseMutationOptions<AxiosResponse, Error, FormData, unknown>,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => verifyOtpRequest(data),
    ...options,
  });

  return { mutation };
};

export const useUserRequest = (): UseQueryResult<
  AxiosResponse<ApiResponse<User>>
> => {
  const data = useQuery({
    queryKey: ['user'],
    queryFn: async () => await getUserRequest(),
  });

  return data;
};

export const useClientGoalRequest = (): UseQueryResult<
  AxiosResponse<ClientGoal[]>
> => {
  const data = useQuery({
    queryKey: ['client-goal'],
    queryFn: async () => await getClientGoalRequest(),
  });

  return data;
};

export const useUserUpdateProfile = (
  options?: UseMutationOptions<AxiosResponse, Error, FormData, unknown>,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => updateUserProfile(data),
    ...options,
  });

  return { mutation };
};
