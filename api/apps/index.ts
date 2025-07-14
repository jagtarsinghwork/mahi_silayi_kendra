import { axiosInstance as axios } from '@/api';
import { apiUrl } from '../services';

export const getAppsRequest = async () => {
  try {
    return await axios.get(apiUrl.apps.apps);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const createAppRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.apps.createApps, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const updateAppRequest = async (data: FormData) => {
  try {
    return await axios.post(
      `${apiUrl.apps.editApp}?id=${data.get('id')}`,
      data,
    );
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};
