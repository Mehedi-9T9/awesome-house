
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { users, logoutUser } = useAuth()

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                // Sign-out successful.
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                // An error happened.
            });
    }

    const navItems = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apertments">apertments</NavLink>
    </>
    return (
        <div className="navbar bg-[#FFF8F5] p-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mb-5 space-y-3">
                        {navItems}
                    </ul>
                </div>
                {/* Logo part */}
                <Link to="/">
                    <div className='flex flex-col items-center px-5 justify-center'>
                        <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" className='object-contain w-10 md:w-20 h-10 md:h-20' alt="" />
                        <p className='text-[#F63E7B] font-roboto font-medium md:text-xl -mt-3'>Awesome House</p>
                    </div>
                </Link>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-lg text-[#111430] font-poppins">
                    {navItems}

                </ul>
            </div>
            {
                users ? <div className="  md:ml-5 dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={users?.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {users?.displayName}

                            </a>
                        </li>
                        <Link to="/dasboard/manageMember"><li><a>Dashboard</a></li></Link>
                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                </div>
                    :
                    <div className=" ml-28  md:ml-5">
                        <Link to="/login"><button className="btn bg-[#F63E7B] text-white font-roboto font-semibold">Login</button></Link>
                    </div>
            }
        </div>
    );
};

export default Navbar;