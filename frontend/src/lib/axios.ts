import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.API_BASE_URL,
    withCredentials: true  // This enables cookies for all requests
});

// // Add request interceptor for debugging
// axiosInstance.interceptors.request.use(
//     (configReq) => {
//         config.debug(`Making ${configReq.method?.toUpperCase()} request to: ${configReq.baseURL}${configReq.url}`);
//         return configReq;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;