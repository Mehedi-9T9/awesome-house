import React from 'react';
import { FaLocationCrosshairs } from 'react-icons/fa6';


const Location = () => {
    return (
        <div className='md:flex justify-center '>
            <div className='md:w-1/2  drop-shadow-md mb-10 md:mb-0'><img src="https://i.ibb.co/F6TnJ2K/location.png" className=' rounded-xl' alt="" /></div>
            <div className='md:w-1/2 drop-shadow-md p-10 bg-[#FFF8F5] rounded-xl md:-ml-20'>
                <h2 className='text-3xl font-roboto font-bold  text-[#F63E7B]  '>Awesome <span className='text-black'>House</span></h2>
                <p className='text-black font-poppins'><FaLocationCrosshairs className='inline-block text-red-500'></FaLocationCrosshairs> Dhaka</p>
                <div className='mt-10'>
                    <h2 className='text-xl font-roboto font-bold'>Address:</h2>
                    <p className='text-lg font-roboto ml-10 text-gray-500'>Charming house on Elm Street,</p>
                    <p className='text-lg font-roboto ml-10 text-gray-500'>near the park,</p>
                    <p className='text-lg font-roboto ml-10 text-gray-500'>with blue shutters and </p>
                    <p className='text-lg font-roboto ml-10 text-gray-500'>a white picket fence.</p>
                </div>
            </div>
        </div>

    );
};

export default Location;