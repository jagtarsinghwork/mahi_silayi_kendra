import axios from 'axios';
import { baseURL } from './config';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || baseURL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config if needed
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response error
    console.error(
      'HTTP error:',
      error.response?.status,
      error.response?.statusText,
    );
    return Promise.reject(error);
  },
);

export default axiosInstance;
