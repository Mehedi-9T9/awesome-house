import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { loginUser, users, googleLogin } = useAuth()
    const location = useLocation()
    const from = location.state?.pathname || "/"

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                // The signed-in user info.
                const user = result.user;
                const userinfo = {
                    userName: user?.displayName,
                    userEmail: user?.email,
                    photo: user?.photoURL,
                    role: "user"
                }
                if (user) {
                    axiosPublic.post(`/socialUser?email=${user?.email}`, userinfo)
                        .then(res => console.log(res.data))
                }
                console.log(user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.

                // The AuthCredential type that was used.

                // ...
            });
    }


    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // console.log(user);
                navigate(from)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div className='bg-gray-300  md:p-20 md:flex gap-10 m-10 md:m-20 rounded-2xl'>
            <Helmet>
                <title>Awesome House || Login</title>
            </Helmet>

            <div className=' md:w-1/2 bg-slate-200 rounded-xl drop-shadow-md mb-5 md:mb-0'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10 md:p-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Email</span>
                        </label>
                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Password</span>
                        </label>
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className=" px-6 input input-bordered bg-white rounded-full drop-shadow-md" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-full bg-[#F63E7B]">Login</button>
                    </div>
                </form>
                <p className='ml-20 font-poppins'>New User <Link to="/rejister"><span className='font-bold text-[#F63E7B]'>Go Rejister</span></Link></p>

            </div>
            <div className=' md:w-1/2  bg-slate-200 rounded-xl p-20 drop-shadow-md '>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" className='w-20 h-20' alt="" />
                    <p className='text-[#F63E7B] font-roboto text-xl -mt-3'>Awesome <span className='text-black '>House</span> </p>
                </div>
                <h2 className='text-center text-[#F63E7B] font-roboto font-bold text-2xl mb-5'>Login With</h2>
                <div className='text-center space-x-4'>
                    <button onClick={handleGoogle} className='btn btn-circle drop-shadow-md'><FaGoogle></FaGoogle></button>
                    <button className='btn btn-circle drop-shadow-md'><FaFacebook></FaFacebook></button>
                    <button className='btn btn-circle drop-shadow-md'><FaTwitter></FaTwitter></button>
                </div>
            </div>
        </div>
    );
};

export default Login;