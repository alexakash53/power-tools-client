import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/SV1MV6n/Premium-Vector-Construction-tools-supplies-for-home-construction-builder.png" className="max-w rounded-lg" />
                <div className='pr-20'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary text-white uppercase font-blod bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;