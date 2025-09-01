import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.API_BASE_URL,
    withCredentials: true  // This enables cookies for all requests
});



export default axiosInstance;