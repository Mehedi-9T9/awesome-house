import React from 'react';

const Coupons = () => {
    return (
        <div className='my-10 flex gap-20 justify-center'>

            <div className='bg-base-300 flex gap-x-20 p-20 rounded-xl drop-shadow-md'>
                <h2 className='text-yellow-500 text-3xl font-bold'>30% <span className='text-[#F63E7B]'>Off</span></h2>
                <h2 className='text-xl font-poppins'>AWSMH30</h2>
            </div>
            <div className='bg-base-300 flex gap-x-20 p-20 rounded-xl drop-shadow-md'>
                <h2 className='text-yellow-500 text-3xl font-bold'>50% <span className='text-[#F63E7B]'>Off</span></h2>
                <h2 className='text-xl font-poppins'>AWSMH50</h2>
            </div>

        </div>
    );
};

export default Coupons;