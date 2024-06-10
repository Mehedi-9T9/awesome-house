import { FaRegCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className='md:flex gap-5'>
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: [-1000, 0] }}
                transition={{ duration: "2", delay: "1" }}
                className='md:w-1/2 drop-shadow-md bg-[#FFF8F5] p-10 rounded-xl'>
                <h2 className='text-3xl font-roboto font-bold  text-[#F63E7B]  mb-4'>Awesome House</h2>
                <p className='text-lg font-poppins '>A stunning modern house featuring expansive glass walls, lush gardens, an infinity pool, and sleek, minimalist interiors, seamlessly blending luxury and comfort in a serene, picturesque setting.A stunning modern house featuring expansive glass walls,</p>
                <ul className="ml-10 mt-3 space-y-3">
                    <li className="text-lg text-[#F63E7B] font-poppins font-semibold "><FaRegCircleCheck className="inline-block mr-2 text-xl text-green-500" /> House Complate Secure</li>
                    <li className="text-lg text-[#F63E7B] font-poppins font-semibold"><FaRegCircleCheck className="inline-block mr-2 text-xl text-green-500" /> Weather Always Positive</li>
                    <li className="text-lg text-[#F63E7B] font-poppins font-semibold"><FaRegCircleCheck className="inline-block mr-2 text-xl text-green-500" /> House Complate Secure</li>
                    <li className="text-lg text-[#F63E7B] font-poppins font-semibold"><FaRegCircleCheck className="inline-block mr-2 text-xl text-green-500" /> House Complate Secure</li>
                    <li className="text-lg text-[#F63E7B] font-poppins font-semibold"><FaRegCircleCheck className="inline-block mr-2 text-xl text-green-500" /> House Complate Secure</li>


                </ul>
            </motion.div>
            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: [1000, 0] }}
                transition={{ duration: "2", delay: "1" }}
                className='md:w-1/2 drop-shadow-md bg-[#FFF8F5] p-10 rounded-xl'>
                <img src="https://i.ibb.co/8PgnHHV/aboute.jpg" alt="" className='rounded-xl' />
            </motion.div>


        </div>
    );
};

export default About;