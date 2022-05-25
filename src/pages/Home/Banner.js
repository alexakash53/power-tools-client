import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/CSS/Banner.css'
// ..
AOS.init();

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    // data-aos="zoom-in" data-aos-duration="2000" data-aos-delay='300'
    return (
        <div>
            <Slider {...settings}>
                <div className='slider-bg slide-1 slider-box bg-opacity-50 bg-blend-overlay bg-black'>
                    <div className="hero-text text-center mb-5 md:mb-0">
                        <h2 className='text-3xl lg:text-6xl font-medium capitalize mb-5 text-white'>Best power tools and sales available</h2>
                        <p className='mb-5 text-white'>Our power tools are made to live on the jobsite. That’s where they’re tested. And if there’s a problem, it’s where we solve it. The result is tools that we can stand behind.</p>
                        <Link to='/explore-cars'>
                            <button className='bg-accent rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-white md:font-medium px-8 py-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg mb-1'>Explore Tools</button>
                        </Link>
                        <Link to='/about'>
                            <button className='bg-primary rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-black md:font-medium px-8 py-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg'>About Us</button>
                        </Link>
                    </div>
                </div>
                <div className='slider-bg slide-2 slider-box bg-opacity-50 bg-blend-overlay bg-black'>
                    <div className="hero-text text-center mb-5 md:mb-0">
                        <h2 className='text-4xl lg:text-6xl font-medium capitalize mb-5 text-white'>New Collections and reparing</h2>
                        <p className='mb-5 text-white'>Our power tools are made to live on the jobsite. That’s where they’re tested. And if there’s a problem, it’s where we solve it. The result is tools that we can stand behind.</p>
                        <Link to='/explore-cars'>
                            <button className='bg-primary rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-black md:font-medium px-8 py-2 border-2 border-transparent hover:border-secondary hover:bg-white hover:text-black md:text-lg'>Explore Tools</button>
                        </Link>
                    </div>
                </div>
                <div className='slider-bg slide-3 slider-box bg-opacity-50 bg-blend-overlay bg-black'>
                    <div className="hero-text text-center mb-5 md:mb-0">
                        <h2 className='text-4xl lg:text-6xl font-medium capitalize mb-5 text-white'>Want to Look Dewalt Tools</h2>
                        <p className='mb-5 text-white'>Our power tools are made to live on the jobsite. That’s where they’re tested. And if there’s a problem, it’s where we solve it. The result is tools that we can stand behind.</p>
                        <Link to='/explore-cars'>
                            <button className='bg-primary rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-black md:font-medium px-8 py-2 border-2 border-transparent hover:border-secondary hover:bg-white hover:text-black md:text-lg'>Explore Tools</button>
                        </Link>
                    </div>
                </div>
            </Slider>
            {/* <div className="md:container md:mx-auto px-5 lg:px-0 py-10  items-center overflow-x-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div className="hero-text mb-5 md:mb-0" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay='300'>
                        <h2 className='text-4xl lg:text-6xl font-medium capitalize mb-5 text-gray-700'>Best car solution <br /> and sales available</h2>
                        <p className='md:font-medium mb-5'>We are a company who sales latest brand car from direct car company.A lot of car collection is available at our showroom.We are a renowned company all over the world for car wholesale.</p>
                        <Link to='/explore-cars'>
                            <button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-white md:font-medium px-8 py-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg'>Explore Cars</button>
                        </Link>
                        <Link to='/about'>
                            <button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-white md:font-medium px-8 py-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg'>About Us</button>
                        </Link>
                    </div>
                    <div className="hero-img overflow-hidden rounded-md" data-aos="fade-left" data-aos-duration="2000" data-aos-delay='300'>
                        <img className='hover:scale-105 z-0 rounded-md transform duration-300 transition-all' src="https://image.freepik.com/free-photo/woman-sitting-red-car-receiving-keys_1303-14094.jpg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Hero;