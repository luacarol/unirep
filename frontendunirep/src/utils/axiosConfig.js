import axios from 'axios';
import { refreshAccessToken, isTokenExpired } from './auth';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

// Adiciona um interceptor para as requisições
axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('access_token');

        if (isTokenExpired(token)) {
            const newToken = await refreshAccessToken(); // Atualiza o token se expirado
            if (newToken) {
                config.headers['Authorization'] = `Bearer ${newToken}`;
            }
        } else {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;