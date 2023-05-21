import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [teddys, setTeddys] = useState([]);
    console.log(teddys);

    useEffect(() => {
        fetch('http://localhost:5000/teddys')
            .then(res => res.json())
            .then(data => setTeddys(data))
    }, [])

    const adorablePlushTeddys = teddys.filter(teddy => teddy.subCategory === 'Treasures');
    const adorablePlushTeddys2 = teddys.filter(teddy => teddy.subCategory === 'Squad');
    const adorablePlushTeddys3 = teddys.filter(teddy => teddy.subCategory === 'Brigade');

    return (
        <div className='w-[80%] h-[90vh] mx-auto my-10 shadow-xl rounded-lg p-4 bg-gray-200'>
            <div className='text-center text-5xl font-semibold my-4'>
                <h4>Shop By Category</h4>
                <hr className='my-4 text-red-500' />
            </div>
            <Tabs className="">
                <TabList className="text-center space-x-12">
                    <Tab>Squad Teddy</Tab>
                    <Tab selected>Treasures Teddy</Tab>
                    <Tab>Brigade Teddy</Tab>
                </TabList>

                <TabPanel>
                <div className='flex'>
                        {adorablePlushTeddys2.slice(0, 2).map(teddy => (
                            <div key={teddy._id} className="card w-[40%] h-[60vh] mx-auto bg-gray-100 shadow-xl mt-6">
                                <figure className="pt-10">
                                    <img src={teddy.photo} alt="Shoes" className="rounded-2xl w-[100%] mt-4 pt-4" />
                                </figure>
                                <div className="card-body">
                                    <h2>Teddy Name : <small>{teddy.toyName}</small></h2>
                                    <h2>Price : <small>{teddy.price}</small></h2>
                                    <h2>Rating : <small>{teddy.rating}</small></h2>
                                    <p>Description : <small>{teddy.description}</small></p>
                                    <div className="card-actions">
                                    <button className='btn btn-outline btn-primary'>View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex'>
                        {adorablePlushTeddys.slice(0, 2).map(teddy => (
                            <div key={teddy._id} className="card w-[40%] h-[60vh] mx-auto bg-gray-100 shadow-xl mt-6">
                                <figure className="pt-10">
                                    <img src={teddy.photo} alt="Shoes" className="rounded-2xl w-[100%] mt-4 pt-4" />
                                </figure>
                                <div className="card-body">
                                    <h2>Teddy Name : {teddy.toyName}</h2>
                                    <h2>Price : <small>{teddy.price}</small></h2>
                                    <h2>Rating : <small>{teddy.rating}</small></h2>
                                    <p>Description : <small>{teddy.description}</small></p>
                                    <div className="card-actions mt-4">
                                    <button className='btn btn-outline btn-primary'>View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='flex'>
                        {adorablePlushTeddys3.slice(0, 2).map(teddy => (
                            <div key={teddy._id} className="card w-[40%] h-[60vh] mx-auto bg-gray-100 shadow-xl mt-6">
                                <figure className="pt-10">
                                    <img src={teddy.photo} alt="Shoes" className="rounded-2xl w-[100%] mt-4 pt-4" />
                                </figure>
                                <div className="card-body">
                                    <h2>Teddy Name : <small>{teddy.toyName}</small></h2>
                                    <h2>Price : <small>{teddy.price}</small></h2>
                                    <h2>Rating : <small>{teddy.rating}</small></h2>
                                    <p>Description : <small>{teddy.description}</small></p>
                                    <div className="card-actions mt-4">
                                    <button className='btn btn-outline btn-primary'>View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;
