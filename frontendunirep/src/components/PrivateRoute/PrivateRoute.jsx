import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const accessToken = localStorage.getItem('access_token');

    // Checks if there is a token, if not, redirects to login
    if (!accessToken) {
        return <Navigate to="/" />;
    }

    return children; // Renders the protected route if the token exists
};

export default PrivateRoute;
