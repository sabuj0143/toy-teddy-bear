import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Gallery from './Gallery';
import Category from '../Category/Category';
import ExtraSection1 from '../ExtraSection/ExtraSection1';
import ExtraSection2 from '../ExtraSection/ExtraSection2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraSection2></ExtraSection2>
            {/* <Gallery></Gallery> */}
            {/* <Category></Category> */}
            <Outlet></Outlet>
            {/* <ExtraSection1></ExtraSection1> */}
        </div>
    );
};

export default Home;