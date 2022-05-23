import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/ChwcKNW/slider1.png" class="w-full"/> 
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-primary bg-inherit">❮</a> 
                <a href="#slide2" class="btn btn-primary bg-inherit">❯</a>
            </div>
            </div> 
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/4fDytg9/slider3.png" class="w-full"/> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-primary bg-inherit">❮</a> 
                <a href="#slide3" class="btn btn-primary bg-inherit">❯</a>
                </div>
            </div> 
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/0yPq3x8/slider4.png" class="w-full"/> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-primary bg-inherit">❮</a> 
                <a href="#slide3" class="btn btn-primary bg-inherit">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;