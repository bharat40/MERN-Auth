import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUserLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
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
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleUserLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
