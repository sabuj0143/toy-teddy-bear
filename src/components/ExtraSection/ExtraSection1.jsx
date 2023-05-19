import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../public/images/laark-boshoff-qcYO9pU5e4Y-unsplash.jpg'
import img2 from '../../../public/images/carter-baran-75IgLbgqRls-unsplash.jpg'
import img3 from '../../../public/images/l-n-3B88rmcWD98-unsplash.jpg'
import img4 from '../../../public/categoryImages/classicCuddlers.jpg'

const ExtraSection1 = () => {
    return (
        <>
            <Marquee>
                <div className="container w-[70%] h-[20vh] flex space-x-8">
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src={img1} alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px]' src={img2} alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px]' src={img3} alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px]' src={img4} alt="" />
                    </div>
                </div>
            </Marquee>
        </>
    );
};

export default ExtraSection1;