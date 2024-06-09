import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageCoupons = () => {
    const [coupons, setCoupons] = useState({})
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get("/coupons")
            .then(res => setCoupons(res.data))
    }, [axiosSecure])
    const handleUpdate = (e) => {
        e.preventDefault()
        const inputOffer = parseInt(e.target.offer.value)
        const inputCoupon = e.target.coupon.value
        const couponInfo = { inputOffer, inputCoupon }
        // console.log(couponInfo);
        axiosSecure.patch(`/updateCoupon?couponId=${coupons._id}`, couponInfo)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Coupons Update Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            })


    }
    return (
        <div className=' bg-slate-200 h-screen'>
            <Helmet>
                <title>Awesome House || Manage Coupons</title>
            </Helmet>
            <div className='py-10 bg-[#FFF8F5]'>
                < h2 className='text-3xl font-bold  ml-10' > Manage Coupons</h2 >
            </div >
            <div className='m-20'>
                <form onSubmit={handleUpdate} className='flex flex-col w-1/2 mx-auto space-y-5 bg-gray-300 p-10 items-center rounded-xl'>
                    <input type="text" name='offer' placeholder="Type here" defaultValue={coupons.offer} className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" name='coupon' defaultValue={coupons.coupon} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                    <button className="btn btn-secondary  w-full max-w-xs">
                        Update
                        <FaEdit></FaEdit>

                    </button>

                </form>
            </div>
        </div>
    );
};

export default ManageCoupons;