
import axiosInstance from './axiosInstance';

export const getGames = async () => {
  try {
    const response = await axiosInstance.get('/games');
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

// Add other API methods (POST, PUT, DELETE) as needed