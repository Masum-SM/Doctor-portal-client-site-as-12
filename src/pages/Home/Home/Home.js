import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApoinmentBanner from '../ApoinmentBanner/ApoinmentBanner';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Care></Care>
            <ApoinmentBanner></ApoinmentBanner>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;