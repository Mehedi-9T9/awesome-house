
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Loader from '../Shared/Loader/Loader';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { users, loading } = useAuth()
    const [userRole] = useRole()

    if (loading) {
        return <Loader></Loader>
    }
    if (!users) {
        return <Navigate to="/login"></Navigate>
    }
    if (users && userRole.role === "admin") {
        return children
    }


};

export default AdminRoute;