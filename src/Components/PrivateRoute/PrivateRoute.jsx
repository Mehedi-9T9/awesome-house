import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';
import useRole from '../Hooks/useRole';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useAuth()
    const [userRole] = useRole()
    if (loading) {
        return <Loader></Loader>
    }
    if (users || userRole.role === "user") {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;