import { axiosInstance as axios } from '@/api';
import { apiUrl } from '../services';

export const getAnalyticsRequest = async () => {
  try {
    return await axios.get(apiUrl.analytics.analytics);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const createAnalyticsRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.analytics.createAnalytics, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};
