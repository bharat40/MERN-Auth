import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUserRegister = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/auth/register', {
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
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleUserRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
