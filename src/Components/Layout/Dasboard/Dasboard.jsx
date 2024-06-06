import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./Dasboard.css"
import useRole from '../../Hooks/useRole';

const Dasboard = () => {
    // const users = 'admin'
    const [userRole] = useRole()
    const currentUserRole = userRole.role
    // console.log(role);
    return (
        <div className='flex '>
            <div className='w-[20%] bg-[#FFF8F5]  '>
                <Link to="/">
                    <div className='flex flex-col items-center px-5 justify-center'>
                        <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" className='object-contain w-10 md:w-20 h-10 md:h-20' alt="" />
                        <p className='text-black font-roboto font-medium md:text-xl -mt-3'>Awesome House</p>
                    </div>
                </Link>
                {
                    currentUserRole === 'user' ? <div className='mt-10 space-y-3'>
                        <NavLink to="/dasboard/userProfile"><li className='text-lg  font-poppins list-none ml-10 mb-3'>My Profile</li></NavLink>
                        <NavLink to="/dasboard/userAnnaousment"><li className='text-lg  font-poppins list-none ml-10'>Annousments</li></NavLink>
                    </div> : null
                }
                {
                    currentUserRole === "member" ? <div className='mt-10 space-y-3'>
                        <NavLink to="/dasboard/memberProfile"><li className='text-lg font-poppins list-none ml-10 mb-3'>My Profile</li></NavLink>
                        <NavLink to="/dasboard/makePayment"><li className='text-lg font-poppins list-none ml-10 mb-3'>Make Payment</li></NavLink>
                        <NavLink to="/dasboard/paymentHistory"><li className='text-lg font-poppins list-none ml-10 mb-3'>Payment History</li></NavLink>
                        <NavLink to="/dasboard/memberAnnaousment"><li className='text-lg font-poppins list-none ml-10 mb-3'>Annousments</li></NavLink>
                    </div> : null
                }
                {
                    currentUserRole === "admin" ? <div className='mt-10'>
                        <NavLink to="/dasboard/adminProfile"><li className='text-lg font-poppins list-none ml-5 mb-3'>Admin Profile</li></NavLink>
                        <NavLink to="/dasboard/manageMember"><li className='text-lg  font-poppins list-none ml-5 mb-3'>Manage Members</li></NavLink>
                        <NavLink to="/dasboard/makeAnnousement"><li className='text-lg  font-poppins list-none ml-5 mb-3'>Make Announcement</li></NavLink>
                        <NavLink to="/dasboard/agreementRequest"><li className='text-lg  font-poppins list-none ml-5 mb-3'>Agreement Request</li></NavLink>
                        <NavLink to="/dasboard/manageCoupons"><li className='text-lg  font-poppins list-none ml-5'>Manage Coupons</li></NavLink>

                    </div> : null
                }

            </div>


            <div className='w-4/5'>


                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dasboard;