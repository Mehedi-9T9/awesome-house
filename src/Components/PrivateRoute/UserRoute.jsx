import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Loader from '../Shared/Loader/Loader';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const { users, loading } = useAuth()
    const [userRole] = useRole()
    if (loading) {
        return <Loader></Loader>
    }
    if (!users) {
        return <Navigate to="/login"></Navigate>

    }
    if (users && userRole.role === "user") {
        return children
    }
    //  else {
    //     return <Navigate to="/login"></Navigate>
    // }


};

export default UserRoute;