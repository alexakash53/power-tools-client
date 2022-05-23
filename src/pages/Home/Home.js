import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Info from './Info';
import Review from './Review';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Info></Info>
            <Review></Review>
            <Counter></Counter>
        </div>
    );
};

export default Home;