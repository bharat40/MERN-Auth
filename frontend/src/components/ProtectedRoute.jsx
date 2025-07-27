import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const getProtectedData = async () => {
            try {
                const response = await axios.get('https://mern-auth-x7cu.onrender.com/api/protected', {
                    withCredentials: true
                });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
                alert("Access Denied");
            }
        }
        getProtectedData();
    }, []);
    if (isAuthenticated === null) {
        return <div>Checking Authentication...</div>
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" replace
        />
    }
    return children;
}

export default ProtectedRoute;
