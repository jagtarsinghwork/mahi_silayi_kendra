import { axiosInstance as axios } from '@/api';
import { apiUrl } from '../services';

export const signUpRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.auth.signUp, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const signInRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.auth.signIn, data);
  } catch (error) {
    console.log(error, '-----------w--- axios error');
    throw error;
  }
};

export const verifyOtpRequest = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.auth.verifyOtp, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const getUserRequest = async () => {
  try {
    return await axios.get(apiUrl.auth.user);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const getClientGoalRequest = async () => {
  try {
    return await axios.get(apiUrl.auth.goal);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};

export const updateUserProfile = async (data: FormData) => {
  try {
    return await axios.post(apiUrl.auth.updateProfile, data);
  } catch (error) {
    console.log(error, '-------------- axios error');
    throw error;
  }
};
