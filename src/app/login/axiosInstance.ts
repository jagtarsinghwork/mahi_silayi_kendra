import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.31.47:3000/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: localStorage.getItem('token'),
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    // Modify request config before sending
    // const token = localStorage?.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      console.error('Unauthorized, logging out...');
      // Perform logout actions or redirect to login page
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
