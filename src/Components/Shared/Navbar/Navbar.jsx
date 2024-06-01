import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/apertment"}>apertment</NavLink>
    </>
    return (
        <div className="navbar bg-[#FFF8F5]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                {/* Logo part */}
                <Link to="/">
                    <div className='flex flex-col items-center px-5'>
                        <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" className='object-contain w-20 h-20' alt="" />
                        <p className='text-[#F63E7B] font-roboto font-medium text-xl -mt-3'>Awesome House</p>
                    </div>
                </Link>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-lg text-[#111430] font-poppins">
                    {navItems}

                </ul>
            </div>
            <div className="ml-5">
                <button className="btn bg-[#F63E7B] text-white font-roboto font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;