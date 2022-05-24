import React from 'react';
import '../../assets/CSS/Features.css'

const Features = () => {
    return (
        <div className='feature-area grid lg:grid-cols-2 sm:grid-cols-1 p-20'>
            <div className="text-feature mb-10 lg:mb-0">
                <h2>Don’t Wait For<br /><span>anything. Buy it today!</span></h2>
                <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexe rc itation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure.</p>
                <button className='btn btn-primary mt-2'>Shop April Sale</button>
            </div>
            <div className="img-banner">
                < img src = "https://i.ibb.co/nb5DJqT/feature.png" alt = "tools" / >
            </div>
        </div>
    );
};

export default Features;