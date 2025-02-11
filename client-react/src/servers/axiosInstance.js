// src/services/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间，单位为毫秒
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加认证令牌
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 对响应错误做点什么，例如统一处理错误
    if (error.response) {
      // 服务器响应了一个状态码在 2xx 以外的响应
      switch (error.response.status) {
        case 401:
          // 未授权，重定向到登录页面
          window.location.href = "/login";
          break;
        case 403:
          // 禁止访问，可以显示一个错误消息
          alert("您没有权限访问该资源");
          break;
        case 500:
          // 服务器内部错误，可以显示一个错误消息
          alert("服务器内部错误");
          break;
        default:
          // 其他错误
          alert(`错误 ${error.response.status}: ${error.response.statusText}`);
      }
    } else if (error.request) {
      // 请求已经发出，但没有收到响应
      alert("请求已发出，但没有收到响应");
    } else {
      // 其他错误
      alert("请求错误");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
