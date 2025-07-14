import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
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
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // if (config.data instanceof FormData) {
    //   config.headers['Content-Type'] = 'multipart/form-data';
    // }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, logging out...');
      localStorage.removeItem('token'); // Clear invalid token
      window.location.href = '/signin'; // Redirect to login
    }
    return Promise.reject(error);
  },
);

// Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle response errors
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized error
//       console.error('Unauthorized, logging out...');
//       // Perform logout actions or redirect to login page
//     }
//     return Promise.reject(error);
//   },
// );

export { axiosInstance };
