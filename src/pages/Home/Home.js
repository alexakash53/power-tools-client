import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Features from './Features';
import Info from './Info';
import Products from './Products';
import Review from './Review';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Info></Info>
            <Products></Products>
            <Features></Features>
            <Review></Review>
            <Counter></Counter>
        </div>
    );
};

export default Home;