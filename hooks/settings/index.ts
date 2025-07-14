import { getSettingsRequest, addSettingsRequest } from '@/api/settings';
import {
  UseMutationOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Settings {
  phone_number: string;
  email: string;
  user_name: string;
  _id: string;
  s_id: string;
  user_id: string;
  fcmToken?: string;
  fcmTokenPhone?: string;
  appVersion?: string;
  firebase_uid?: string;
  position?: string | null;
  notificationPreferences?: {
    emailNotifications: boolean;
    pushNotifications: boolean;
  };
  dashboardPreferences?: {
    theme: 'dark' | 'light';
    analyticsDisplay: 'detailed' | 'summary';
  };
}

interface SettingsResponse {
  data: Settings;
  message: string;
  success: boolean;
  error: boolean;
}

export const useGetSettings = (): UseQueryResult<
  AxiosResponse<SettingsResponse>
> => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: async () => await getSettingsRequest(),
  });
};

export const useAddSettings = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<{ message: string }>,
    FormData,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => addSettingsRequest(data),
    ...options,
  });

  return { mutation };
};
