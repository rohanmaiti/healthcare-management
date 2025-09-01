import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true  // This enables cookies for all requests
});



export default axiosInstance;