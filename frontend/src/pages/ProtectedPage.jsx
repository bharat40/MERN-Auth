import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);
    const fetchUserDetails = async (req, res) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST_URL}/api/auth/profile`, {
                withCredentials: true
            });
            setDetails(response.data.data);
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    const handleLogout = async (req, res) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {}, { withCredentials: true });
            alert(response.data.message);
            navigate('/');
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <section className='bg-gray-300 flex justify-center h-screen'>
            <div className='flex flex-col items-center gap-[10px] mt-[30px] bg-white h-max p-3'>
                <h1 className='font-bold text-lg'>Protected Page</h1>
                {
                    details && (
                        <div className='flex flex-col gap-[5px]'>
                            <span className='text-gray-800'>Username: {details.username}</span>
                            <span className='text-gray-800'>Email: {details.email}</span>
                        </div>
                    )
                }

                <button type="button" className='p-2 bg-blue-400 text-white shadow' onClick={() => handleLogout()}>logout</button>
            </div>
        </section>
    )
}

export default ProtectedPage
