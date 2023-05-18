import React, { useEffect, useState } from 'react';
import SingleTeddy from './SingleTeddy';

const MyToys = () => {

    const [teddys, setTeddys] = useState([]);
    console.log(teddys);

    useEffect(() => {
        fetch('http://localhost:5000/teddys')
            .then(res => res.json())
            .then(data => setTeddys(data))
    }, [])

    return (
        <div>
            <h2>This is My Toys: {teddys.length}</h2>
            <div className='mt-4'>
                {
                    teddys.map(teddy => <SingleTeddy
                        key={teddy._id}
                        teddy={teddy}
                    >
                    </SingleTeddy>)
                }
            </div>
        </div>
    );
};

export default MyToys;