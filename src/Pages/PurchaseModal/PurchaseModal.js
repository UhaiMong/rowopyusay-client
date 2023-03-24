import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Isloading from '../../Components/Isloading';
import { AuthContext } from '../../Context/Authprovider';

const PurchaseModal = ({ productInfo }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user.email);
    const { model, location, resalePrice, picture } = productInfo;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    if (loading) {
        return <Isloading></Isloading>
    }

    const bookingHandler = (data) => {
        const orders = {
            phone: data.phone,
            buyerName: data.name,
            buyerLocation: data.myLocation,
            seller: "admin",
            productName: data.productName,
            brand: data.productName,
            price: data.price,
            image: picture,
            email: user.email,
        }

        fetch('https://smart-resale-stall-server.vercel.app/ordered', {
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
    return (
        <>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative my-14 w-2/4 mx-auto bg-[#a8dadc] rounded-md">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{model}</h3>

                    <form onSubmit={handleSubmit(bookingHandler)}>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>

                            <div className="form-control w-full p-3">
                                <label className='label-text'>Product name</label>
                                <input className='input' defaultValue={model} readOnly type="text" {...register("productName")} />
                            </div>

                            <div className="form-control w-full p-3">
                                <label className="label">
                                    <span className="label-text">Seller Location</span>
                                </label>
                                <input className="input" type='text' defaultValue={location} readOnly
                                    {...register('location')}>
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
                                    {...register("myLocation", { required: true })}
                                    aria-invalid={errors.myLocation ? "true" : "false"}
                                    placeholder="e.g: Dhaka, Segunbagicha"
                                />
                                {errors.myLocation?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your location is required</p>}
                            </div>

                            <div className="form-control w-full p-3">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>

                                <input className="input input-bordered w-full" placeholder='Your name' type='text'
                                    {...register("name", { required: true })}
                                />
                                {errors.name?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your name is required</p>}
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
                                    <span className="label-text" defaultValue={user.email} readOnly>Your Email</span>
                                </label>

                                <input className="input input-bordered w-full" type='text' defaultValue={user?.email} readOnly
                                    {...register("email")}
                                />
                            </div>
                        </div>

                        <div className="form-control my-3">
                            <button className='btn btn-success text-white font-semibold capitalize'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default PurchaseModal;