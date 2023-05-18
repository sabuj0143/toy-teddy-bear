import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

const PrivateRoute = () => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className='w-[500%] text-center items-center justify-center'>
                <GridLoader color="#36d7b7" />
            </div>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;