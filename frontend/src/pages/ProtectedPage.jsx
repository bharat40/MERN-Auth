import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);
    const fetchUserDetails = async (req, res) => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/profile', {
                withCredentials: true
            });
            setDetails(response.data.data);
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    const handleLogout = async (req, res) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
            alert(response.data.message);
            navigate('/login');
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <div>
            <h1>Protected Page</h1>
            {
                details && (
                    <div>
                        <span>username: {details.username}</span>
                        <span>email: {details.email}</span>
                    </div>
                )
            }

            <button type="button" onClick={() => handleLogout()}>logout</button>
        </div>
    )
}

export default ProtectedPage
