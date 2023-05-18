import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Gallery from './Gallery';
import Category from '../Category/Category';
import ExtraSection1 from '../ExtraSection/ExtraSection1';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Outlet></Outlet>
            {/* <Gallery></Gallery> */}
            <ExtraSection1></ExtraSection1>
        </div>
    );
};

export default Home;