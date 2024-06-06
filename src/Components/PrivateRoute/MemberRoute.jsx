import React from 'react';
import useRole from '../Hooks/useRole';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';

const MemberRoute = ({ children }) => {
    const { users, loading } = useAuth()
    const [userRole] = useRole()
    if (loading) {
        return <Loader></Loader>
    }
    if (!users) {
        return <Navigate to="/login"></Navigate>
    }

    if (users && userRole.role === "member") {
        return children
    }

};

export default MemberRoute;