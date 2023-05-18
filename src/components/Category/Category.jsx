import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../public/categoryImages/classicCuddlers.jpg'
import img2 from '../../../public/categoryImages/adorableTeddy.jpg'
import img3 from '../../../public/categoryImages/huggableTreasures.jpg'
import SubCategory from './SubCategory';

const Category = () => {
    return (
        <div className='w-[80%] h-[80vh] mx-auto my-10'>
            <div className='text-center text-5xl font-semibold my-4'>
                <h4>Shop By Category</h4>
                <hr className='my-4' />
            </div>
            <Tabs className="">
                <TabList className="text-center space-x-12">
                    <Tab>Classic Cuddlers 1</Tab>
                    <Tab>Adorable Plush Pals 2</Tab>
                    <Tab>Huggable Treasures 3</Tab>
                </TabList>

                <TabPanel>
                    <div className="card w-[40%] h-[60vh] mx-auto bg-gray-100 shadow-xl mt-6">
                        <figure className="pt-10">
                            <img src={img1} alt="Shoes" className="rounded-2xl w-[100%] mt-4 pt-4" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Classic Cuddlers</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">More category</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SubCategory></SubCategory>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card w-[40%] h-[60vh] mx-auto bg-gray-100 shadow-xl mt-6">
                        <figure className="pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl w-[100%] mt-4 pt-4" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Adorable Plush</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">More category</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card w-[40%] h-[60vh] mx-auto bg-gray-100 shadow-xl mt-6">
                        <figure className="pt-20">
                            <img src={img3} alt="Shoes" className="rounded-xl w-[100%] mt-4 pt-4" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Huggable Treasures</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">More category</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;