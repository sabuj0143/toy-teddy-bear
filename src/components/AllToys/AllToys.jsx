import React, { useEffect, useState } from 'react';
import AllToysCart from './AllToysCart';
import { TabTitle } from '../../Utiles/FunctionTitle';


const AllToys = () => {

    TabTitle('KindleTeddy-AllTeddy')

    const [allTeddy, setAllTeddy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teddys')
            .then(res => res.json())
            .then(data => setAllTeddy(data))
    }, [])


    return (
        <div className='my-10'>
            <>
                <div className='my-6'>
                    <div className="form-control w-[50%] mx-auto">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
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