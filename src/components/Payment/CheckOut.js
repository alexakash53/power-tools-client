import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const CheckOut = () => {
    const [product, setProduct] = useState({})
    // const { user } = useAuth()
    const { id } = useParams();
    const navigate = useNavigate()

    console.log(id)
    // const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
     // buy now
     const onSubmit = data => {
        data.name = product.name
        data.price = product.price
        data.quantity = localStorage.getItem('quantity')
        data.status = 'pending'
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    navigate(`/payment/${data.insertedId}`)
                    reset()
                    localStorage.removeItem('quantity')
                }
            })
    }
    return (
        <div className='p-20'> 
            <div className="grid grid-cols-6 gap-5">
            <div className="puchase-info-form col-start-2 col-span-4">
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
    );
};

export default CheckOut;