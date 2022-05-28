import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Features from './Features';
import Info from './Info';
import Products from './Products';
import Review from './Review';
import Service from './Service';
import Discount from './Discount';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Info></Info>
            <Discount></Discount>
            <Products></Products>
            <Features></Features>
            <Counter></Counter>
            <Review></Review>
        </div>
    );
};

export default Home;