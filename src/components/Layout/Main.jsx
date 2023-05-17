import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;