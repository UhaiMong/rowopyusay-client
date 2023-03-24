import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Isloading from '../../../Components/Isloading';
import { AuthContext } from '../../../Context/Authprovider';

const Privaterout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Isloading></Isloading>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Privaterout;