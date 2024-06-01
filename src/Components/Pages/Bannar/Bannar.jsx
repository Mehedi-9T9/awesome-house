import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Bannar.css'

const Bannar = () => {
    return (
        <div className='bannar'>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className='outer'>
                <div className='md:h-[800px]'>
                    <img src="https://i.ibb.co/2WkZPjg/bedroom-1872196-960-720.jpg" />

                </div>
                <div className='md:h-[800px]'>
                    <img src="https://i.ibb.co/C5F6dBF/01-properties.jpg" />

                </div>

                <div className='md:h-[800px]'>
                    <img src="https://i.ibb.co/PjrsZcS/bannar-2.webp" />

                </div>
            </Carousel>

        </div>
    );
};

export default Bannar;