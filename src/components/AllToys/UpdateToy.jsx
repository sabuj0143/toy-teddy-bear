import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TabTitle } from '../../Utiles/FunctionTitle';

const UpdateToy = () => {

    TabTitle('KindleTeddy-UpdateTeddy')

    const toys = useLoaderData();
    // console.log(toys);
    const { _id, price,  quantity, description } = toys

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {price, quantity, description }
        // console.log(updateToy);

        // Send to data server site 
        fetch(`https://assignment-11-teddy-bear-server.vercel.app/teddys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Teddy Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }


    return (
        <div className='w-full mx-auto'>
            <div className="card-body w-[70%] mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                <h1 className="text-2xl font-bold text-white text-center">Update TEDDY TOYS !</h1>
                <hr className='my-2 w-[30%] mx-auto' />
                <form onSubmit={handleUpdateToy}>
                    <div className='md:grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="$" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter available quantity" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea type="textarea" name='description' defaultValue={description}  className="input input-bordered h-[150px] py-4" required />
                    </div>
                    <div className="form-control w-full mx-auto mt-6">
                        <input className="btn btn-primary" type="submit" value="Update teddy" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateToy;