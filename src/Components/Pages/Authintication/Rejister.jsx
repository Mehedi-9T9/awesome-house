import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Rejister = () => {
    return (
        <div className='bg-gray-300 p-20 flex gap-10 m-20 rounded-2xl'>
            <div className=' w-1/2  bg-slate-200 rounded-xl p-20 drop-shadow-md '>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" className='w-20 h-20' alt="" />
                    <p className='text-[#F63E7B] font-roboto text-xl -mt-3'>Awesome <span className='text-black '>House</span> </p>
                </div>
                <h2 className='text-center text-[#F63E7B] font-roboto font-bold text-2xl mb-5'>Create With</h2>
                <div className='text-center space-x-4'>
                    <button className='btn btn-circle drop-shadow-md'><FaGoogle></FaGoogle></button>
                    <button className='btn btn-circle drop-shadow-md'><FaFacebook></FaFacebook></button>
                    <button className='btn btn-circle drop-shadow-md'><FaTwitter></FaTwitter></button>
                </div>
            </div>

            <div className=' w-1/2 bg-slate-200 rounded-xl drop-shadow-md'>
                <form className="card-body px-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Email</span>
                        </label>
                        <input type="text" placeholder="Name" className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Email</span>
                        </label>
                        <input type="url" placeholder="Photo URL" className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#F63E7B] font-roboto ml-6">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="px-6 input input-bordered bg-white rounded-full drop-shadow-md" required />

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