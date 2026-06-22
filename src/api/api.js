import axios from 'axios';

const BASE_URL = "https://quality-api.vercel.app/";
  // const BASE_URL = "http://localhost:6001";

const axiosInstance = axios.create({
  timeout: 100000,
  baseURL: BASE_URL,
  // baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosInstance;

