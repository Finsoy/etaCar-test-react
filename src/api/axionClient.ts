import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// ...
const config: AxiosRequestConfig = {
  baseURL: 'https://api.coincap.io/v2/',
};
export const client: AxiosInstance = axios.create(config);
