import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleTeddy = ({ teddy, teddys, setTeddys }) => {
    const { _id, price, email, toyName, photo, sellerName, rating, description } = teddy;


    const handleDelete = _id => {
        console.log(_id);


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-teddy-bear-server.vercel.app/teddys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Teddy has been deleted.',
                                'success'
                            )
                            const remaining = teddys.filter(toy => toy._id !== _id)
                            setTeddys(remaining)
                        }
                    })

            }
        });

    };

    return (
        <div className="card card-side w-[50%] mx-auto bg-base-100 shadow-xl items-center">
            <figure><img className="w-[300px] h-[200px] p-8 py-4 rounded" src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full p-6 pr-4">
                <div>
                    <h3>Toy Name :  {toyName}</h3>
                    <p> Seller Name :  {sellerName}</p>
                    <p> User Email : {email}</p>
                    <p> Price : {price}</p>
                    <p> Rating : {rating}</p>
                    <p> Description : <small> {description}</small></p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <Link to={`/updateToy/${_id}`}>
                            <button className="btn btn-outline btn-info">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTeddy;