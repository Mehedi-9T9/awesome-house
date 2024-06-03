import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageMember = () => {
    const axiosSecure = useAxiosSecure()
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        axiosSecure.get("/users")
            .then(res => setUsersData(res.data))
    }, [])
    return (
        <div className=' bg-slate-200 h-screen'>
            <div className='py-10 bg-[#FFF8F5]'>
                <h2 className='text-3xl font-bold  ml-10'>Manage Member</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
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
                                <button className='btn btn-ghost'>Remove</button>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMember;