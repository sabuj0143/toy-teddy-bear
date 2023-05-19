import React, { useContext, useEffect, useState } from 'react';
import SingleTeddy from './SingleTeddy';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [teddys, setTeddys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/teddy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTeddys(data))
    }, [])

    return (
        <div>
            <div className='w-full gap-4 md:grid grid-cols-1'>
                {
                    teddys.map(teddy => <SingleTeddy
                        key={teddy._id}
                        teddy={teddy}
                        setTeddys={setTeddys}
                        teddys={teddys}
                    >
                    </SingleTeddy>)
                }
            </div>
        </div>
    );
};

export default MyToys;