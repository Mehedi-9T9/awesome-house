import React from 'react';
import Bannar from '../Bannar/Bannar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <SectionTitle></SectionTitle>
            <About></About>
        </div>
    );
};

export default Home;