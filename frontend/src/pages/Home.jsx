import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='h-screen bg-gray-300 flex justify-center'>
            <div className='flex flex-col items-center gap-[10px] w-[500px] bg-white h-max p-3 mt-[30px]'>
                <h1 className='font-bold text-lg '>BHARAT DHIMAN</h1>
                <h3 className='font-semibold'>WEB DEVELOPER</h3>
                <p className='text-red-400'>check out my portfolio. <a href="https://thunderous-hamster-c30399.netlify.app/">click me</a></p>
                <div className='flex gap-[30px]'>
                    <Link to="/register"><button className='p-2 bg-blue-400 text-white shadow'>Register</button></Link>
                    <Link to="/login"><button className='p-2 bg-blue-400 text-white shadow'>Login</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Home;
