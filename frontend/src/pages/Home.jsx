import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to='/register'>register</Link></li>
                <li><Link to='/login'>login</Link></li>
            </ul>
        </div>
    )
}

export default Home
