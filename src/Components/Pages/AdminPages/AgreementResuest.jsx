import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import AgrementRequestCard from './AgrementRequestCard';


const AgreementResuest = () => {
    const axiosSecure = useAxiosSecure()
    const { data: requestData = [], refetch } = useQuery({
        queryKey: ["requestData"],
        queryFn: async () => {
            const res = await axiosSecure.get("/pendingData")
            return res.data
        }

    })



    return (
        <div className=' bg-slate-200 h-screen'>
            <div className='py-10 bg-[#FFF8F5]'>
                <h2 className='text-3xl font-bold  ml-10'>Agreements Request</h2>
            </div>
            <div>
                {
                    requestData?.map(request => <AgrementRequestCard key={request._id} refetch={refetch} request={request}></AgrementRequestCard>)
                }
            </div>
        </div>
    );
};

export default AgreementResuest;