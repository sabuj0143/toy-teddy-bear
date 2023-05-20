import React from 'react';
import { FaPhone } from 'react-icons/fa';
import bgImg from '../../../public/images/nathan-dumlao-43wvIhzBUBE-unsplash.jpg'

const Banner = () => {
    return (
        <div className='w-full mx-auto'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content" data-aos="fade-down-right">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold"> <span className='text-4xl'> <span className='text-5xl text-[rgb(254,213,65)]'>W</span><span className='text-[rgb(254,213,65)]'>elcome</span></span> To Kindle Teddy</h1>
                        <p className="mb-5">Discover a world of cuddles and joy with our adorable collection of teddy bears.</p>
                        <button className="btn btn-primary">Contact Us <FaPhone className='ml-2 text-[rgb(254,213,65)]' /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;