// api/company.ts
import { axiosInstance as axios } from '@/api';
import { apiUrl } from '../services';

export const getCompanyRequest = async () => {
  try {
    return await axios.get(apiUrl.company.getCompany);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const createCompanyRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.company.createCompany, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const updateCompanyRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.company.updateCompany, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};
