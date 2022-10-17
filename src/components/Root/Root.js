import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <hr className='border-1 border-purple-300'/>
            <Footer/>
        </div>
    );
};

export default Root;