import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const Coupons = () => {
    const { users } = useAuth()
    const [coupons, setCoupons] = useState({})
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get("/coupons")
            .then(res => setCoupons(res.data))
    }, [axiosSecure])
    return (
        <div className='my-10 md:flex  md:gap-20 justify-center'>


            <div className='bg-base-300 flex flex-col gap-x-20 p-10 rounded-xl drop-shadow-md'>
                <h2 className='text-yellow-500 text-3xl font-bold'>Hey {users ? users.displayName : "guys"}</h2>
                <h2 className='text-xl font-poppins'>we are provite offers for sometimes</h2>
                <h2 className='text-xl font-poppins text-[#F63E7B]'>You Apply now</h2>
            </div>
            <div className='bg-base-300 flex gap-x-20 md:p-20 p-10 rounded-xl drop-shadow-md mt-10 md:mt-0'>
                <h2 className='text-yellow-500 text-3xl md:text-xl font-bold'>{coupons.offer}% <span className='text-[#F63E7B]'>Off</span></h2>
                <h2 className='text-xl md:text-lg font-poppins'>{coupons.coupon}</h2>
            </div>

        </div>
    );
};

export default Coupons;