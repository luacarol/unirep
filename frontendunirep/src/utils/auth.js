import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/token/';

export const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');

    if (!refreshToken) {
        // Redirecionar para a página de login se não houver refresh token
        window.location.href = '/login';
        return null;
    }

    try {
        const response = await axios.post(`${API_URL}refresh/`, {
            refresh: refreshToken,
        });

        // Atualizar o access token no localStorage
        localStorage.setItem('access_token', response.data.access);
        return response.data.access; // Retorna o novo access token
    } catch (error) {
        console.error('Erro ao atualizar o token:', error);
        // Redirecionar para a página de login se a atualização falhar
        window.location.href = '/login';
        return null;
    }
};

export const isTokenExpired = (token) => {
    if (!token) return true; // Se não houver token, está expirado

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000; // exp está em segundos, converta para milissegundos

    console.log('Token expira em:', new Date(exp)); // Adicione um log para ver a expiração
    console.log('Data atual:', new Date(Date.now())); // Adicione um log para a data atual

    return Date.now() >= exp; // Verifica se a data atual é maior ou igual à expiração
};