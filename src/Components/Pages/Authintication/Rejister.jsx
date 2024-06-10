import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form"
import { getAuth, updateProfile } from "firebase/auth";
import { app } from '../../../../firebase/firabase.config';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const Rejister = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { createUser, googleLogin } = useAuth()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                // The signed-in user info.
                const user = result.user;
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                const userinfo = {
                    userName: user?.displayName,
                    userEmail: user?.email,
                    photo: user?.photoURL,
                    role: "user"
                }
                axiosPublic.post(`/socialUser?email=${user?.email}`, userinfo)
                    .then(res => console.log(res.data))
                console.log(user);
                navigate("/")
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
        const { email, password, name, photo } = data
        createUser(email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
                reset()
                navigate('/')
                const userinfo = {
                    userName: name,
                    userEmail: email,
                    photo: photo,
                    role: "user"
                }
                axiosPublic.post("/user", userinfo)
                    .then(res => console.log(res.data))

                // ...
                updateProfile(user, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Rejister Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        console.log(data)
    }
    return (
        <div className='bg-gray-300 p-10 md:p-20 md:flex gap-10 md:m-20 rounded-2xl'>
            <Helmet>
                <title>Awesome House || Rejister</title>
            </Helmet>
            <div className=' md:w-1/2  bg-slate-200 rounded-xl p-20 drop-shadow-md '>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" className='w-20 h-20' alt="" />
                    <p className='text-[#F63E7B] font-roboto text-xl -mt-3'>Awesome <span className='text-black '>House</span> </p>
                </div>
                <h2 className='text-center text-[#F63E7B] font-roboto font-bold text-2xl mb-5'>Create With</h2>
                <div className='text-center space-x-4'>
                    <button onClick={handleGoogle} className='btn btn-circle drop-shadow-md'><FaGoogle></FaGoogle></button>
                    <button className='btn btn-circle drop-shadow-md'><FaFacebook></FaFacebook></button>
                    <button className='btn btn-circle drop-shadow-md'><FaTwitter></FaTwitter></button>
                </div>
            </div>

            <div className=' md:w-1/2 bg-slate-200 rounded-xl drop-shadow-md mt-5 md:mt-0'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body md:px-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Name</span>
                        </label>
                        <input type="text" placeholder="Name" {...register("name", { required: true })} className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" />
                        {errors.name && <span className='text-red-700'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Photo</span>
                        </label>
                        <input type="url" placeholder="Photo URL" {...register("photo", { required: true })} className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" />
                        {errors.photo && <span className='text-red-700'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Email</span>
                        </label>
                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" />
                        {errors.email && <span className='text-red-700'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Password</span>
                        </label>
                        {/* todo: regex added */}
                        <input type="password" placeholder="Password"  {...register("password", { required: true })} className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" required />
                        {errors.password && <span className='text-red-700'>This field is required</span>}

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-full bg-[#F63E7B]">Rejister</button>
                    </div>
                </form>
                <p className='ml-20 font-poppins'>Have an Account <Link to="/login"><span className='font-bold text-[#F63E7B]'>Go Login</span></Link></p>

            </div>

        </div>
    );
};

export default Rejister;