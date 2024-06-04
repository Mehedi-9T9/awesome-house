import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyRoom = () => {
    const axiosSecure = useAxiosSecure()
    const { users } = useAuth()
    const { data: myRoom = [] } = useQuery({
        queryKey: ['myRoom'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myRoom?email=${users?.email}`)
            return res.data
        }
    })
    return [myRoom]



};

export default useMyRoom;