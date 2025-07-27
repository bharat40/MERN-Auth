import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUserLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://mern-auth-x7cu.onrender.com/api/auth/login', {
                email: email.trim(),
                password: password.trim()
            }, {
                withCredentials: true
            })
            alert(response.data.message);
            setEmail('');
            setPassword('');
            navigate('/protected');
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    return (
        <section className='flex justify-center h-screen bg-gray-300'>

            <form onSubmit={handleUserLogin} className='bg-white flex flex-col p-3 h-max w-[500px] mt-[30px] items-center gap-[10px]'>
                <h1 className='font-bold text-lg'>Login Page</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' className='border border-gray-300 p-2' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' className='border border-gray-300 p-2' />
                <button type="submit" className='p-2 bg-blue-400 text-white shadow'>Submit</button>
                <span className='text-sm text-gray-500'>new user? <Link to="/register">register</Link></span>
            </form>
        </section>
    )
}

export default Login
