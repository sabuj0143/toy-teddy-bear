import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;