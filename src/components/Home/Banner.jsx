import React from 'react';
import { FaPhone } from 'react-icons/fa';
import bgImg from '../../../public/images/nathan-dumlao-43wvIhzBUBE-unsplash.jpg'

const Banner = () => {
    return (
        <div className='w-[100%] mx-auto'>
            <div className="hero min-h-screen w-[100%] h-[100vh]" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md" data-aos="fade-up" data-aos-duration="3000">
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