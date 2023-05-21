import React from 'react';

const Cart = ({ toy }) => {

    const { photo, toyName, price, rating } = toy;

    return (
        <div className='w-[80%] my-7'>
            <div className="card w-[400px] h-[350px] mx-4 bg-base-100 shadow-xl text-black">
                <figure><img className='rounded-xl w-full mt-11 pt-16' src={photo} alt="Shoes" /></figure>
                <div className="card-body text-white">
                    <hr className='my-2 w-[70%] mx-auto' />
                    <p className='text-gray-950 font-extrabold text-xl'>Teddy Name :  <small>{toyName}</small></p>
                    <p className='text-gray-950 font-extrabold text-xl'>Price :  <small>{price}</small></p>
                    <p className='text-gray-950 font-extrabold text-xl'>Rating :  <small>{rating}</small></p>
                </div>
                <button className="btn btn-warning font-extrabold text-xl">Buy Now</button>
            </div>

        </div>
    );
};

export default Cart;