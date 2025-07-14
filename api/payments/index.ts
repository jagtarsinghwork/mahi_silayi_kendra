import { axiosInstance as axios } from '@/api';
import { apiUrl } from '../services';

export const getPaymentsRequest = async () => {
  try {
    return await axios.get(apiUrl.payments.payments);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const createPaymentRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.payments.createPayments, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};
