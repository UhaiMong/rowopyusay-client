import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Isloading from '../../../../Components/Isloading';
import { AuthContext } from '../../../../Context/Authprovider';

const Myorders = () => {
    const { user, loading } = useContext(AuthContext);

    const orders = useLoaderData();
    const { brand, image, resalePrice, seller, productName } = orders;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const bookingHandler = data => {
        if (loading) {
            return <Isloading />
        }

        // addProducts to database collection

        const orders = {
            phone: data.phone,
            buyerName: data.name,
            buyerLocation: data.location,
            seller: data.seller,
            productName: data.productName,
            brand: data.brand,
            price: data.price,
            image,
            email: user.email,
        }

        fetch('http://localhost:8000/ordered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Successfully booked the product.');
                navigate('/orderedProduct');
            })
    }
    if (loading) {
        return <Isloading />
    }

    return (
        <div className='my-14 w-2/4 mx-auto bg-primary rounded-md'>
            <h1 className='text-2xl font-semibold p-3 underline text-white'>Please Check before your confirmation</h1>
            <form onSubmit={handleSubmit(bookingHandler)}>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    <div className="form-control w-full p-3">
                        <label className='label-text'>Product name</label>
                        <input className='input' defaultValue={productName} readOnly type="text" {...register("productName")} />
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Brand name</span>
                        </label>
                        <input className="input" type='text' defaultValue={brand} readOnly
                            {...register('brand')}>
                        </input>
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>

                        <input className="input input-bordered w-full" type='text' defaultValue={resalePrice} readOnly {...register("price")}
                        />
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Your Location</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("location", { required: true })}
                            aria-invalid={errors.location ? "true" : "false"}
                            placeholder="e.g: Dhaka, Segunbagicha"
                        />
                        {errors.location?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your location is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Seller</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            defaultValue={seller} readOnly
                            {...register("seller")}
                        />
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Your Phone number</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("phone", { required: true })}
                            aria-invalid={errors.originalPrice ? "true" : "false"}
                            placeholder="e.g: 01234567890"
                        />
                        {errors.originalPrice?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your Phone number is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("name", { required: true })}
                            aria-invalid={errors.originalPrice ? "true" : "false"}
                            placeholder="e.g: your name"
                        />
                        {errors.originalPrice?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your name is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Your email</span>
                        </label>

                        <input className="input input-bordered w-full" defaultValue={user.email} readOnly type='text'
                            {...register("email")}
                        />
                    </div>
                </div>

                <div className="form-control my-3 flex-row justify-end gap-5 items-center p-4">
                    <button className='btn btn-info text-white font-semibold capitalize'>Checkout</button>

                    <Link to='/' className='btn btn-warning text-white font-semibold capitalize'>Cancel</Link>
                </div>
            </form>
        </div>
    );
};

export default Myorders;