import { axiosInstance as axios } from '@/api';
import { apiUrl } from '../services';

export const getSettingsRequest = async () => {
  try {
    return await axios.get(apiUrl.settings.getSettings);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const addSettingsRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.settings.addSettings, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};
