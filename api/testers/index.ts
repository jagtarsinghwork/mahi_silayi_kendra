import { axiosInstance as axios } from '@/api';
import { apiUrl } from '../services';

export const getTestersRequest = async () => {
  try {
    return await axios.get(apiUrl.testers.testers);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const createTesterRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.testers.createTesters, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};
