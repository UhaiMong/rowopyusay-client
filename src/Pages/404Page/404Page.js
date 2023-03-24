import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/404page.png'

const PageNotFound = () => {
    return (
        <div className='text-center w-1/2 mx-auto mt-11 rounded-md'>
            <img className='rounded-md' src={img} alt="404 page" />
            <h1 className='text-6xl font-extrabold my-5 text-blue-900'>Opps!<span className='text-red-500'>!</span></h1>
            <h1 className='text-3xl font-bold'>The page is not found <span className='text-red-500'>!</span><span className='text-blue-500'>!</span></h1>
            <Link to='/' className='text-2xl text-blue-500 hover:underline mt-4 font-bold text-center'>Go to home page</Link>
        </div>
    );
};

export default PageNotFound;