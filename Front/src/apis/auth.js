import apiClient from './apiClient';

export const login = async (email, password) => {
    const response = await apiClient.post('/login', {
        email,
        password,
    });
    return response.data;
};
