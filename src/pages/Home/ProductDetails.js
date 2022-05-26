import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import useAuth from '../../hooks/useAuth';


const Productdetails = () => {
    const [product, setProduct] = useState({})
    // const { user } = useAuth()
    const { id } = useParams();
    // const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://salty-beyond-08378.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    // buy now
    const onSubmit = data => {
        data.title = product.name
        data.price = product.price
        data.status = 'pending'
        fetch('https://salty-beyond-08378.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // history.push(`/payment-method/${data.insertedId}`)
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="car-details">
                        <img src='https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCE151TD1/DCE151TD1_1.jpg?resize=530x530' alt="" />
                        <h3 className='text-4xl capitalize font-semibold my-5'>{product.name}</h3>
                        <p className='font-semibold text-xl'>Price <span className='text-red-500'>${product.price}</span></p>
                        <p className='font-semibold'>The car has <span className='text-red-500'>{product.cc}cc</span> power.</p>
                        <p className='text-lg mt-5'>{product.body}</p>
                    </div>
                    <div className="puchase-info-form">
                        <h2 className='text-3xl capitalize mb-10 text-center mt-10 lg:mt-0'>Fill up the form to buy</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-b-2 w-full border- pl-5 mb-5 rounded-full py-3 outline-none' {...register("name", { required: true })} placeholder='Your Name' /> <br />
                            <input className='border-b-2 w-full border- pl-5 mb-5 rounded-full py-3 outline-none' {...register("email", { required: true })} placeholder='Email' /> <br />
                            <input className='border-b-2 w-full border- pl-5 mb-5 rounded-full py-3 outline-none' {...register("address", { required: true })} placeholder='Your Address' /> <br />
                            <input className='border-b-2 w-full border- pl-5 mb-5 rounded-full py-3 outline-none' {...register("city", { required: true })} placeholder='City' /> <br />
                            <input className='border-b-2 w-full border- pl-5 mb-5 rounded-full py-3 outline-none' {...register("phone", { required: true })} type='number' placeholder='Your Phone Number' /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.name || errors.email || errors.address || errors.city || errors.phone ? <span className='text-red-500 font-semibold  pl-5 mb-3'>Please fill all the input correctly!</span> : ""}

                            <input className='border-2 border-secondary px-14 text-lg cursor-pointer rounded-full bg-white mx-auto block py-2 mt-3' type="submit" value='Continue Payment' />
                        </form>
                        <div>
                            <p className='text-red-500 mt-10 px-10'> {`/*`} Please use the demo card number <span className='font-semibold'>4242 4242 4242 4242</span> then you can use any future date and in cvc type 5 digit {`*/`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;