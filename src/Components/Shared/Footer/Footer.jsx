import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#F63E7B] text-neutral-content ">
            <aside>
                <img src="https://i.ibb.co/8s2NNSq/vecteezy-home-icon-png-transparent-9589471.png" alt="" className='w-20 h-20' />
                <p>Awesome House Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="text-2xl font-semibold font-roboto">Connect With</h6>
                <div className="grid grid-flow-col gap-6">
                    <a className='text-xl text-blue-500 '><FaFacebook></FaFacebook></a>
                    <a className='text-xl text-orange-500'><FaInstagram></FaInstagram></a>
                    <a className='text-xl text-blue-500 '><FaTwitter></FaTwitter></a>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;