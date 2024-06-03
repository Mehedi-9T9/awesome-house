import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageMember = () => {
    const axiosSecure = useAxiosSecure()
    // const [usersData, setUsersData] = useState([])
    // useEffect(() => {
    //     axiosSecure.get("/users")
    //         .then(res => setUsersData(res.data))
    // }, [axiosSecure])
    const { data: usersData = [], refetch } = useQuery({
        queryKey: ['usersData'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })

    const handleRemove = (email) => {
        axiosSecure.patch(`/demotionUser?email=${email}`)
            .then(res => {
                console.log(res.data);
                refetch()
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Make User Done",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
        console.log(email);
    }
    return (
        <div className=' bg-slate-200 h-screen'>
            <div className='py-10 bg-[#FFF8F5]'>
                <h2 className='text-3xl font-bold  ml-10'>Manage Member</h2>
            </div>
            <div className="overflow-x-auto p-20 drop-shadow-md">
                <table className="table bg-white">
                    {/* head */}
                    <thead className='bg-[#F63E7B] text-xl'>
                        <tr className=''>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Demotion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            usersData?.map((user, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <button onClick={() => handleRemove(user.userEmail)} className='btn btn-ghost'>Remove</button>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMember;