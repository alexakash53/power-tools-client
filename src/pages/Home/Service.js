import React from 'react';
import { FaPiggyBank, FaHeadset, FaShippingFast } from "react-icons/fa";

const Service = () => {
    return (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-20 text-center'>
                <div className="service">
                    <FaPiggyBank className='text-5xl mb-4 inline-block text-center'/>
                    <h2 className='font-bold text-xl'>Big Savings</h2>
                    <p>Get Big Discount Everyday</p>
                </div>
                <div className="service">
                    <FaHeadset className='text-5xl mb-4 inline-block text-center'/>
                    <h2 className='font-bold text-xl'>24*7 Support</h2>
                    <p>Awesome Support Everyday</p>
                </div>
                <div className="service">
                    <FaShippingFast className='text-5xl mb-4 inline-block text-center'/>
                    <h2 className='font-bold text-xl'>Free Shipping</h2>
                    <p>On Order Over $ 150.00</p>
                </div>
            </div>
    );
};

export default Service;