import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useRole = () => {
    const { users } = useAuth()

    const [role, setRole] = useState({})
    console.log(role);
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        if (users?.email) {
            axiosPublic.get(`/userRole?email=${users?.email}`)
                .then(res => {
                    const role = res.data
                    setRole(role)

                })
        }
    }, [axiosPublic, users?.email])


    return role




};

export default useRole;