import React from 'react';
import Bannar from '../Bannar/Bannar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import About from '../About/About';
import Location from '../Location/Location';
import Coupons from '../Coupons/Coupons';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Awesome House || Home</title>
            </Helmet>
            <Bannar></Bannar>
            <SectionTitle heading="About of"></SectionTitle>
            <About></About>
            <SectionTitle heading="Location of"></SectionTitle>
            <Location></Location>
            <SectionTitle heading="Offers of"></SectionTitle>
            <Coupons></Coupons>
        </div>
    );
};

export default Home;