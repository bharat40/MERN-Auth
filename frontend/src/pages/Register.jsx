import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUserRegister = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
            username: username.trim(),
            email: email.trim(),
            password: password.trim()
        });
        alert(response.data.message)
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/login');
    }
    return (
        <section className='h-screen bg-gray-300 flex justify-center'>
            <form onSubmit={handleUserRegister} className='bg-white flex flex-col items-center w-[500px] h-max p-3 mt-[30px] gap-[10px]'>
                <h1 className='font-bold text-lg'>Register Page</h1>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' className='border border-gray-300 p-2' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' className='border border-gray-300 p-2' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' className='border border-gray-300 p-2' />
                <button type="submit" className='p-2 bg-blue-400 text-white shadow'>Submit</button>
                <span className='text-sm text-gray-500'>already registered? <Link to="/login">login</Link></span>
            </form>
        </section>
    )
}

export default Register
