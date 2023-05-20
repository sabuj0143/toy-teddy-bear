
import { useLoaderData } from 'react-router-dom';

const ViewDetailsTeddy = () => {
    const viewDetails = useLoaderData();
    console.log(viewDetails);

    return (
        <div>
            <h2>This is view details</h2>
        </div>
    );
};

export default ViewDetailsTeddy;