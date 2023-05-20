import React from 'react';

const Cart = ({ toy }) => {

    const { photo, toyName, price, rating } = toy;

    return (
        <div className='w-[80%] my-7'>
            <div className="card w-[400px] h-[350px] mx-4 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <figure><img className='rounded-xl w-full mt-11 pt-16' src={photo} alt="Shoes" /></figure>
                <div className="card-body text-white">
                    <hr className='my-2 w-[70%] mx-auto' />
                    <p>Teddy Name :  <small>{toyName}</small></p>
                    <p>Price :  <small>{price}</small></p>
                    <p>Rating :  <small>{rating}</small></p>
                </div>
                <button className="btn btn-primary">Buy Now</button>
            </div>

        </div>
    );
};

export default Cart;