import React from 'react';
import Bannar from '../Bannar/Bannar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import About from '../About/About';
import Location from '../Location/Location';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <SectionTitle></SectionTitle>
            <About></About>
            <SectionTitle></SectionTitle>
            <Location></Location>
            <SectionTitle></SectionTitle>
        </div>
    );
};

export default Home;