import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import useAuth from '../../hooks/useAuth';


const Productdetails = () => {
    const [product, setProduct] = useState({})
    // const { user } = useAuth()
    const { id } = useParams();
    const navigate = useNavigate()

    console.log(id)
    // const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://blooming-thicket-10128.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])


    const onSubmit = data => {
        localStorage.setItem('quantity',data.quantity)
        if(data.quantity <15){
            return alert('Quantity must be 15 or bigger than 15')
        }
        data.quantity=product.quantity-data.quantity
        fetch(`https://blooming-thicket-10128.herokuapp.com/product/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                // console.log()
                if (data.modifiedCount) {
                    navigate(`/checkOut/${product._id}`)
                    reset()
                }
            })
    }
   
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="car-details">
                        <img style={{width:"80%"}} src={product.img} alt="" />
                    </div>
                    <div>
                    <h3 className='text-4xl capitalize font-semibold my-5'>{product.name}</h3>
                        <p className='font-semibold text-xl'>Model <span className='text-gray-600'>{product.model}</span></p>
                        <p className='font-semibold text-xl'>Quantity <span className='text-gray-600'>{product.quantity}</span></p>
                        <p className='font-semibold text-xl'>Price <span className='text-gray-600'>${product.price}</span></p>
                        <p className='font-semibold'>Product Details <span className='text-gray-600'>{product.description}</span></p>
                        <p className='description mt-5'>{product.body}</p>
                        <div className="puchase-info-form">
                        <h2 className='text-3xl capitalize mb-10 text-center mt-10 lg:mt-0'>Enter Quantity to Continue</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input className='border-b-2 w-full border- pl-5 mb-5 rounded-full py-3 outline-none' {...register("quantity", { required: true })} min='15' max={product.quantity} type='number' placeholder={`Enter Min 15 Tools Or max ${product.quantity}`} /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.name || errors.email || errors.address || errors.city || errors.phone ? <span className='text-red-500 font-semibold  pl-5 mb-3'>Please fill all the input correctly!</span> : ""}

                            <input className='border-2 border-secondary px-14 text-lg cursor-pointer rounded-full bg-white mx-auto block py-2 mt-3' type="submit" value='Purchase' />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;