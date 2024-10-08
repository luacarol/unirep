import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('access_token'); // Verifica se o token está presente

    // Checks if there is a token, if not, redirects to login
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
