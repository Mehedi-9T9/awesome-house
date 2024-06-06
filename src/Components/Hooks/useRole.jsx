import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { users } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [userRole, setUserRole] = useState({})


    useEffect(() => {
        if (users?.email) {
            axiosPublic.get(`/userRole?email=${users?.email}`)
                .then(res => setUserRole(res.data))

        }

    }, [axiosPublic, users?.email])
    // const { data: userRole = [] } = useQuery({
    //     queryKey: ["userRole"],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/userRole?email=${users?.email}`)
    //         return res.data

    //     }
    // })


    return [userRole]
};

export default useRole;