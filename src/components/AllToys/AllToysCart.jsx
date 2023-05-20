import { Link } from 'react-router-dom';
import { TabTitle } from '../../Utiles/FunctionTitle';

const AllToysCart = ({ teddy }) => {
    TabTitle('KindleTeddy-AllTeddyCart')
    const { _id, price, toyName, subCategory, quantity, sellerName } = teddy;
    return (
        <>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th></th>
                    <td>{toyName}</td>
                    <td>{sellerName}</td>
                    <td>{subCategory}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td><Link to={`/viewDetailsTeddy/${_id}`}>
                        <button className='btn btn-outline btn-primary'>View Details</button>
                    </Link></td>
                </tr>
            </tbody>

        </>
    );
};

export default AllToysCart;



