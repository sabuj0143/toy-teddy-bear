import React from 'react';
import img1 from '../../../public/images/laark-boshoff-qcYO9pU5e4Y-unsplash.jpg'
import img2 from '../../../public/images/carter-baran-75IgLbgqRls-unsplash.jpg'
import img3 from '../../../public/images/l-n-3B88rmcWD98-unsplash.jpg'
import img4 from '../../../public/categoryImages/classicCuddlers.jpg'

const ExtraSection1 = () => {
    return (
        <>
            <div className="carousel w-[100%] h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-[100%] h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-[100%] h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-[100%] h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-[100%] h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExtraSection1;