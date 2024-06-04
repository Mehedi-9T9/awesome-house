import React from 'react';

const SectionTitle = ({ heading }) => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-roboto font-bold text-center'>{heading} <span className=' text-[#F63E7B]'>Awesome House</span></h2>

        </div>
    );
};

export default SectionTitle;