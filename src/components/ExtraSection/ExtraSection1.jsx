import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../public/images/laark-boshoff-qcYO9pU5e4Y-unsplash.jpg'
import img2 from '../../../public/images/carter-baran-75IgLbgqRls-unsplash.jpg'
import img3 from '../../../public/images/l-n-3B88rmcWD98-unsplash.jpg'
import img4 from '../../../public/categoryImages/classicCuddlers.jpg'
import Cart from './Cart';

const ExtraSection1 = () => {
    const [allTeddy, setAllTeddy] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-teddy-bear-server.vercel.app/teddys')
        .then(res => res.json())
        .then(data => {
            setAllTeddy(data);
        })
    }, [])
    return (
        <>
            <Marquee className='bg-gray-200'>
                    {
                        allTeddy.map(toy => <Cart
                        key={toy._id}
                        toy={toy}
                        >

                        </Cart>)
                    }
            </Marquee>
        </>
    );
};

export default ExtraSection1;