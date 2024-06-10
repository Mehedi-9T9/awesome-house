import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async';


const AdminProfile = () => {
    const { users } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [adminInfo, setAdminInfo] = useState({})
    useEffect(() => {
        axiosSecure.get("/adminInfo")
            .then(res => setAdminInfo(res.data))
    }, [axiosSecure])


    return (
        <div className=' bg-slate-200 h-screen'>
            <Helmet>
                <title>Awesome House || My Profile</title>
            </Helmet>
            <div className='py-10 bg-[#FFF8F5]'>
                < h2 className='text-3xl font-bold  ml-10' > Admin Profile</h2 >
            </div >
            <div className='md:grid grid-cols-3 gap-5 items-center p-10 space-y-5'>
                <div className='p-10 bg-yellow-500 rounded-xl drop-shadow-md'>
                    <h2 className='text-xl font-bold font-roboto'>Name: <span className='text-[#F63E7B]'>{users.displayName}</span></h2>
                    <p className='text-lg font-bold font-roboto'>Email: <span className='text-[#F63E7b]'>{users?.email}</span></p>
                </div>
                <img src={users.photoURL} className='w-[200px] h-[135px] rounded-xl' alt="" />
                <div className='px-10 py-14 bg-yellow-500 rounded-xl'>
                    <h2 className='text-xl font-roboto font-bold text-black'>Total Rooms: <span className='text-[#F63E7B] font-poppins'>{adminInfo?.totalRoom}</span></h2>
                </div>
                <div className='px-10 py-14 bg-yellow-500 rounded-xl'>
                    <h2 className='text-xl font-roboto font-bold text-black'>Available Rooms: <span className='text-[#F63E7B] font-poppins'>{adminInfo?.availableRoom}%</span></h2>
                </div>
                <div className='px-10 py-14 bg-yellow-500 rounded-xl'>
                    <h2 className='text-xl font-roboto font-bold text-black'>Agreement Rooms: <span className='text-[#F63E7B] font-poppins'>{adminInfo?.bookedRoom}%</span></h2>
                </div>
                <div className='px-10 py-14 bg-yellow-500 rounded-xl'>
                    <h2 className='text-xl font-roboto font-bold text-black'>Total Users: <span className='text-[#F63E7B] font-poppins'>{adminInfo?.totalUsers}</span></h2>
                </div>
                <div className='px-10 py-14 bg-yellow-500 rounded-xl'>
                    <h2 className='text-xl font-roboto font-bold text-black'>Total Members: <span className='text-[#F63E7B] font-poppins'>{adminInfo?.totalMember}</span></h2>
                </div>
            </div>
        </div >
    );
};

export default AdminProfile;