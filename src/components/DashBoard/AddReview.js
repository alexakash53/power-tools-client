import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [successRating, setSuccessRating] = useState(false)

    const onSubmit = data => {
        fetch('https://blooming-thicket-10128.herokuapp.com/rating', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccessRating(true)
                    reset()
                } else {
                    setSuccessRating(false)
                }
            })
    }
    return (
        <div>
            <h2 className='text-4xl mb-5'>Review Our Service</h2>
            {successRating && <p className='text-red-500 mb-3 font-semibold'>Rating Successfully added.</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-b-2 w-2/3 border-secondary pl-5 mb-5 rounded-full py-3 outline-none' type='name' {...register("Name", { required: true })} placeholder='Your Name' /> <br />
                <input className='border-b-2 w-2/3 border-secondary pl-5 mb-5 rounded-full py-3 outline-none' type='designation' {...register("designation", { required: true })} placeholder='Your Job Title' /> <br />
                <div>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return <label key={i}>
                            <input {...register("rating", { required: true })} type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                            <FaStar color={ratingValue <= (hover || rating) ? '#ffc107' : 'e4e5e9'} className='star inline-block text-4xl' onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}></FaStar>
                        </label>
                    })}
                </div>
                <textarea className='border-2 mt-5 rounded-full w-2/3 border-secondary pl-5 mb-5 py-3 outline-none' {...register("Review")} /> <br />
                <input type='url' className='border-b-2 w-2/3 border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("img", { required: true })} placeholder='Your Profile image url' /> <br />
                <button type='submit' className='btn border-2 border-secondary rounded-full bg-white text-black px-10'>Submit Rating</button>
            </form>
        </div>
    );
};

export default AddReview;