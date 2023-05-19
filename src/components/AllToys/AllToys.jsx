import React, { useEffect, useState } from 'react';
import AllToysCart from './AllToysCart';


const AllToys = () => {

    const [allTeddy, setAllTeddy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teddys')
            .then(res => res.json())
            .then(data => setAllTeddy(data))
    }, [])


    return (
        <>
            <div className='md:grid grid-cols-3'>
                {
                    allTeddy.map(teddy => <AllToysCart
                        key={teddy._id}
                        teddy={teddy}
                    >

                    </AllToysCart>)
                }
            </div>
        </>
    );
};

export default AllToys;