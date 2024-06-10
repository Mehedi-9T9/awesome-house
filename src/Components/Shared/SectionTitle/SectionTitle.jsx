import React from 'react';
import { motion } from "framer-motion"

const SectionTitle = ({ heading }) => {
    return (
        <div className='my-10'>
            {/* <motion.h1
                initial={{ x: 700 }}
                animate={{ x: [0, 700] }}
                transition={{
                    duration: "3",
                    delay: "1"
                }}
                className='text-3xl font-bold'
            >chek motion</motion.h1> */}
            <motion.h2
                initial={{ x: -500 }}
                animate={{ x: [0, -500, 0] }}
                transition={{
                    duration: "3",
                    delay: "1"
                }}
                whileHover={{ scale: "0.9" }}
                className='text-3xl font-roboto font-bold text-center'>{heading} <span className=' text-[#F63E7B]'>Awesome House</span></motion.h2>

        </div>
    );
};

export default SectionTitle;