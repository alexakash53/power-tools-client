import React from 'react';

const Discount = () => {
    return (
        <div style={{marginTop:'60px',backgroundImage:'url(https://i.ibb.co/WKvbd5Q/Offer-banner.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',minHeight:'300px'}}>
            <div className='grid md:grid-cols-2 grid-cols-1 p-20'>
                <div>
                    <h2 className='text-3xl font-bold'>Magnatic Drill machine</h2>
                    <p className='my-5'>Now In All Color Variant Avaiable Grab This Offer Now...</p>
                    <button className='btn btn-neutral'>Shop Now</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Discount;