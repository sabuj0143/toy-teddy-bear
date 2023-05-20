import React, { useEffect, useState } from 'react';
import AllToysCart from './AllToysCart';
import { TabTitle } from '../../Utiles/FunctionTitle';


const AllToys = () => {

    TabTitle('KindleTeddy-AllToys')

    const [allTeddy, setAllTeddy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teddys')
            .then(res => res.json())
            .then(data => setAllTeddy(data))
    }, [])


    return (
        <div className='my-10'>
            <>
                    <div className='text-center my-6'>
                        <h3>Input here</h3>
                    </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>View Details</th>
                            </tr>
                        </thead>

                        {/* Map  */}

                        {
                            allTeddy.map(teddy => <AllToysCart
                                key={teddy._id}
                                teddy={teddy}
                            >

                            </AllToysCart>)
                        }

                    </table>
                </div>


            </>
        </div>
    );
};

export default AllToys;