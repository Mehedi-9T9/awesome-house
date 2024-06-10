import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AgrementRequestCard = ({ request, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { apertmentNo, image, floorNo, blockName, rent, status, userName, userEmail, date, _id, oldId } = request


    const handleAccept = (id) => {
        axiosSecure.patch(`/booking?userId=${id}&email=${userEmail}&oldId=${oldId}`)
            .then(res => {
                console.log(res.data)
                refetch()
            })
    }
    const handleReject = (id) => {
        axiosSecure.delete(`/deleteApertment?id=${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl m-10 flex flex-col-reverse md:flex-row">

            <div className="card-body">
                <div className='border-b py-5'>
                    <h2 className="card-title">Name: <span className='text-[#F63E7B]'>{userName}</span></h2>
                    <h2 className="card-title">Name: <span className='text-[#F63E7B]'>{userEmail}</span> </h2>
                </div>
                <div className='flex text-black font-medium'>
                    <p>Apertment No: <span className='text-[#F63E7B] font-bold'>{apertmentNo}</span></p>
                    <p>Floor No: <span className='text-[#F63E7B] font-bold'>{floorNo}</span></p>

                </div>

                <div className='flex text-black font-medium'>
                    <p>Block Name: <span className='text-[#F63E7B] font-bold'> {blockName}</span></p>
                    <p>Rent: <span className='text-amber-400 text-xl'>$</span><span className='text-[#F63E7B] font-bold'>{rent}</span></p>
                </div>
                <div className='flex text-black font-medium'>
                    <p>Status: <span className='text-[#F63E7B] font-bold'> {status}</span></p>
                    <p>date: <span className='text-[#F63E7B] font-bold'>{date}</span></p>
                </div>
                <div className='border-t p-5 space-x-5 '>
                    <button onClick={() => handleAccept(_id)} className='btn bg-[#F63E7B] text-white '>Accept</button>
                    <button onClick={() => handleReject(_id)} className='btn bg-[#F63E7B] text-white '>Reject</button>
                </div>


            </div>
            <figure><img src={image} className='md:w-1/2 h-3/4 rounded-xl drop-shadow-md' alt="Movie" /></figure>
        </div>
    );
};

export default AgrementRequestCard;