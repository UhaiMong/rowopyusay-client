import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Advertisement from './Home/Advertisement/Advertisement';
import Banner from './Home/Banner/Banner';
import Categories from './Home/Categories/Categories';
import ProductCard from './Home/Products/Products';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
            <ProductCard/>
            <Advertisement></Advertisement>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;