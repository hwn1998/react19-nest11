// api.js
import axios from 'axios';
import axiosInstance from './axiosInstance'
// 封装 GET 请求
export const get = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 封装 POST 请求
export const post = async (endpoint, data = {}) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};