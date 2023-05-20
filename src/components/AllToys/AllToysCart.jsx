import React from 'react';

const AllToysCart = ({ teddy }) => {

    const { _id, price, toyName, subCategory, quantity, sellerName } = teddy;
    return (
        <>
            {/* <div className='w-[80%] mx-auto'>
                <div className="card w-96 h-[60vh] bg-base-100 shadow-xl">
                    <figure><img className='w-[200px] h-[150px]' src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {toyName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{price}</p>
                        <p>{quantity}</p>
                        <p></p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">View Details</div>
                        </div>
                    </div>
                </div>
            </div> */}

            <tbody>
                {/* row 1 */}
                <tr>
                    <th></th>
                    <td>{sellerName}</td>
                    <td>{toyName}</td>
                    <td>{subCategory}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td><button className='btn btn-primary'>View Details</button></td>
                </tr>
            </tbody>

        </>
    );
};

export default AllToysCart;



