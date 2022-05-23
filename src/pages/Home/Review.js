import React, { useEffect, useState } from 'react';
// import Rating from './Rating/Rating';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
// import StarRatingComponent from 'react-star-rating-component';
import Rating from "react-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/CSS/Review.css'

const Review = () => {
    const [ratings, setRatings] = useState([])

    useEffect(() => {
        fetch('./FakeData/reviews.json')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
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
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-5 md:py-16 overflow-x-hidden">
                <div className="section-title text-center mb-14">
                    <h2 className='text-3xl capitalize font-semibold'>Our customer reviews</h2>
                    <span className='block w-28 mt-3 h-1 bg-primary mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-accent mx-auto'></span>
                </div>
                <div className="grid grid-cols-6">
                    <div className="col-start-2 col-span-4">
                        <Slider {...settings}>
                            {
                                ratings.map(rating => <div key={rating._id}>
                                    <div className="single-review text-center border-2 border-secondary rounded-tl-3xl rounded-br-3xl px-10 py-10">
                                        <img className='w-28 mb-5 rounded-full mx-auto' src={rating.img} alt="" />
                                        <div className="review-text">
                                            <div>
                                                <Rating
                                                    emptySymbol={<FaStarHalfAlt className="text-gray-600 text-xl" />}
                                                    fullSymbol={<FaStar className="text-yellow-600 text-xl" />}
                                                    initialRating={`${rating.rating}`}
                                                    readonly
                                                />
                                            </div>
                                            <h2 className='text-gray-800 text-2xl font-semibold my-3'>{rating.Name}</h2>
                                            <h4 className='capitalize font-semibold text-xl mb-2'>{rating.designation}</h4>
                                            <p className='font-medium'>{rating.Review}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;