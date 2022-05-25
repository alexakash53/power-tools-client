import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../../assets/CSS/Products.css'
const Products = () => {
    return (
        <div>
            <div className='px-20 pt-20 pb-6 grid lg:grid-cols-3 grid-cols-1 gap-10'>
                <div className="products">
                    <div className='img-info'>
                        <img src="https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCH416X2/DCH416X2_1.jpg?resize=530x530" alt="" />
                        <button className='btn btn-primary'>purchase</button>
                    </div>
                    <div className="products-info">
                        <p>DCH416X2</p>
                        <h2>60V MAX* 1-1/4 In. Brushless Cordless SDS PLUS Rotary Hammer Kit</h2>
                    </div>
                </div>
                <div className="products">
                    <div className='img-info'>
                        <img src="https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCH416X2/DCH416X2_1.jpg?resize=530x530" alt="" />
                        <button className='btn btn-primary'>purchase</button>
                    </div>
                    <div className="products-info">
                        <p>DCH416X2</p>
                        <h2>60V MAX* 1-1/4 In. Brushless Cordless SDS PLUS Rotary Hammer Kit</h2>
                    </div>
                </div>
                <div className="products">
                    <div className='img-info'>
                        <img src="https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCH416X2/DCH416X2_1.jpg?resize=530x530" alt="" />
                        <button className='btn btn-primary'>purchase</button>
                    </div>
                    <div className="products-info">
                        <p>DCH416X2</p>
                        <h2>60V MAX* 1-1/4 In. Brushless Cordless SDS PLUS Rotary Hammer Kit</h2>
                    </div>
                </div>
                <div className="products">
                    <div className='img-info'>
                        <img src="https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCH416X2/DCH416X2_1.jpg?resize=530x530" alt="" />
                        <button className='btn btn-primary'>purchase</button>
                    </div>
                    <div className="products-info">
                        <p>DCH416X2</p>
                        <h2>60V MAX* 1-1/4 In. Brushless Cordless SDS PLUS Rotary Hammer Kit</h2>
                    </div>
                </div>
                <div className="products">
                    <div className='img-info'>
                        <img src="https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCH416X2/DCH416X2_1.jpg?resize=530x530" alt="" />
                        <button className='btn btn-primary'>purchase</button>
                    </div>
                    <div className="products-info">
                        <p>DCH416X2</p>
                        <h2>60V MAX* 1-1/4 In. Brushless Cordless SDS PLUS Rotary Hammer Kit</h2>
                    </div>
                </div>
                <div className="products">
                    <div className='img-info'>
                        <img src="https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCH416X2/DCH416X2_1.jpg?resize=530x530" alt="" />
                        <button className='btn btn-primary'>purchase</button>
                    </div>
                    <div className="products-info">
                        <p>DCH416X2</p>
                        <h2>60V MAX* 1-1/4 In. Brushless Cordless SDS PLUS Rotary Hammer Kit</h2>
                    </div>
                </div>
            </div>
            <div className='text-center px-20'>
                <button className='btn btn-primary px-10 text-black'>All Products <FaArrowRight className='text-black ml-3'/></button>
            </div>
        </div>
    );
};

export default Products;

