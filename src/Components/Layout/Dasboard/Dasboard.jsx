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
        <div className='md:flex '>
            <div className='md:w-[20%] bg-[#FFF8F5]  '>
                <Link to="/">
                    <div className='flex flex-col items-center px-5 justify-center'>
                        <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" className='object-contain w-20 md:w-20 h-20 md:h-20' alt="" />
                        <p className='text-[#F63E7B] md:text-black font-roboto font-medium text-xl -mt-3'>Awesome House</p>
                    </div>
                </Link>
                {
                    currentUserRole === 'user' ? <div className='mt-10 space-y-3'>
                        <NavLink to="/dasboard/userProfile"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>My Profile</li></NavLink>
                        <NavLink to="/dasboard/userAnnaousment"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Annousments</li></NavLink>
                    </div> : null
                }
                {
                    currentUserRole === "member" ? <div className='mt-10 space-y-3'>
                        <NavLink to="/dasboard/memberProfile"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>My Profile</li></NavLink>
                        <NavLink to="/dasboard/makePayment"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Make Payment</li></NavLink>
                        <NavLink to="/dasboard/paymentHistory"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Payment History</li></NavLink>
                        <NavLink to="/dasboard/memberAnnaousment"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Annousments</li></NavLink>
                    </div> : null
                }
                {
                    currentUserRole === "admin" ? <div className='mt-10'>
                        <NavLink to="/dasboard/adminProfile"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none  py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Admin Profile</li></NavLink>
                        <NavLink to="/dasboard/manageMember"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none   py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Manage Members</li></NavLink>
                        <NavLink to="/dasboard/makeAnnousement"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none  py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Make Announcement</li></NavLink>
                        <NavLink to="/dasboard/agreementRequest"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none  py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Agreement Request</li></NavLink>
                        <NavLink to="/dasboard/manageCoupons"><li className='text-xl bg-slate-100 md:bg-[#FFF8F5] border md:border-none py-5 md:py-0 md:text-lg font-poppins list-none md:ml-5 md:mb-3 text-center md:text-start'>Manage Coupons</li></NavLink>

                    </div> : null
                }

            </div>


            <div className='md:w-4/5'>


                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dasboard;