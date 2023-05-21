import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { TabTitle } from '../../Utiles/FunctionTitle';

const AddToys = () => {

    TabTitle('KindleTeddy - AddTeddy')

    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const sellerName = form.sellerName.value;
        const email = user?.email;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newTeddy = { sellerName, email, photo, toyName, subCategory, price, rating, quantity, description }
        // console.log(newTeddy);

        // Send to data server site 
        fetch('https://assignment-11-teddy-bear-server.vercel.app/teddys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTeddy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Teddy Add Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    };


    const options = ['Squad', 'Brigade', 'Treasures', 'Haven', 'Berry teddy'];

    return (
        <div className='w-full mx-auto my-5'>
            <div className="card-body w-[70%] mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                <h1 className="text-2xl font-bold text-white text-center">ADD TEDDY TOYS !</h1>
                <hr className='my-2 w-[30%] mx-auto' />
                <form onSubmit={handleAddToy}>
                    <div className='md:grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder='Enter your name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder='Enter teddy Photo URL' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' placeholder='Enter Your Toy Name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select name="subCategory" placeholder='' className='h-[50px] rounded'>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="$" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="Enter Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Enter available quantity" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea type="textarea" name='description' className="input input-bordered h-[150px] py-4" required />
                    </div>
                    <div className="form-control w-full mx-auto mt-6">
                        <input className="btn btn-primary" type="submit" value="Add teddy" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddToys;