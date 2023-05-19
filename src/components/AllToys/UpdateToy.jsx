import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const toys = useLoaderData();
    // console.log(toys);
    const { _id, price, toyName, photo, quantity, email, subCategory, sellerName, rating, description } = toys

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = { sellerName, email, photo, toyName, subCategory, price, rating, quantity, description }
        // console.log(updateToy);

        // Send to data server site 
        fetch(`http://localhost:5000/teddys/${_id}`, {
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
                        text: 'Coffee Update Successfully',
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
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' defaultValue={sellerName} placeholder='Enter your name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' defaultValue={photo} placeholder='Enter teddy Photo URL' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' defaultValue={toyName} placeholder='Enter Your Toy Name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" name='subCategory' placeholder='Enter Sub-category' defaultValue={subCategory} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="$" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' defaultValue={rating} placeholder="Enter Rating" className="input input-bordered" required />
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
                        <input type="text" name='description' defaultValue={description} placeholder="Enter Description" className="input input-bordered" required />
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