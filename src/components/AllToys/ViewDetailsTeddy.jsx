
import { Link, useLoaderData } from 'react-router-dom';
import { TabTitle } from '../../Utiles/FunctionTitle';

const ViewDetailsTeddy = () => {

    TabTitle('KindleTeddy-ViewDetailsTeddy')

    const viewDetails = useLoaderData();
    const { sellerName, email, photo, toyName, subCategory, price, rating, quantity, description } = viewDetails;

    return (
        <div className='w-full my-7'>
            <div className="card w-[50%] h-[100vh] mx-auto bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <figure><img className='w-[40%] rounded-xl' src={photo} alt="Shoes" /></figure>
                <div className="card-body text-white">
                    <hr  className='my-2 w-[70%] mx-auto'/>
                    <hr  className='my-2 w-[10%] mx-auto'/>
                    <h3 className="card-title">Toy Name : <small>{toyName}</small></h3>
                    <h3 className="card-title"> Seller Name :  <small>{sellerName}</small></h3>
                    <p className="card-title">Email : <small>{email}</small></p>
                    <p className="card-title">Price : <small>{price}</small></p>
                    <p>Rating : <small>{rating}</small></p>
                    <p>Quantity : <small>{quantity}</small></p>
                    <p>Sub Category : <small>{subCategory}</small></p>
                    <p>Description : <small>{description}</small></p>
                    <hr  className='my-2 w-[70%] mx-auto'/>
                    <div className="card-actions justify-end my-4">
                        <Link to="/alltoys">
                            <button className="btn btn-primary">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetailsTeddy;