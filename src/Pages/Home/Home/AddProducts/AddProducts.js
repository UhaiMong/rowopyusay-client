import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../../Context/Authprovider';

const AddProducts = () => {
    const imghostkey = process.env.IMAGE_BB_HOST_KEY;
    const { user, loader } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const productAddHandler = data => {

        const image = data.image[0];

        const formData = new FormData();

        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=772bced4f7f07efa27de0ecfb3dae49a`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success || user?.uid) {
                    console.log(imageData.data.url);
                    const seller = user.displayName;
                    const addedProduct = {
                        seller: seller,
                        email: user.email,
                        image: imageData.data.url,
                        brand: data.brand,
                        productName: data.productName,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        usedTime: data.usedTime,
                        condition: data.condition,
                        postedDate: data.date,
                    }

                    // addProducts to database collection

                    fetch('http://localhost:8000/addedProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(addedProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            alert("Successfully added the product");
                            navigate('/myProducts');
                        })
                }

            })
    }
    return (
        <div className='my-14 w-2/4 mx-auto bg-[#a8dadc] rounded-md'>
            <form onSubmit={handleSubmit(productAddHandler)}>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className="form-control w-full p-3">
                        <label className='label-text'>Product image</label>
                        <input className='input' type="file" {...register("image", {
                            required: "Photo is required"
                        })} />
                        {errors.img && <p className='text-red-700'>{errors.img.message}</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Select Categories</span>
                        </label>
                        <select className="select select-bordered w-full"
                            {...register('brand', { required: "Please select one" })}
                        >
                            <option defaultValue="Choice Brand<" disabled >Choice Brand</option>
                            <option>Sennheiser</option>
                            <option>Bose</option>
                            <option>Sony</option>
                            <option>AKG</option>
                        </select>
                    </div>
                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select className="select select-bordered w-full"
                            {...register('condition', { required: "Please select one" })}
                        >
                            <option defaultValue="Choice Condition" disabled >Choice Condition</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Product Model</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("productName", { required: true })}
                            aria-invalid={errors.productName ? "true" : "false"}
                            placeholder="e.g: Sony 9 pro"
                        />
                        {errors.productName?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your productName is required</p>}
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
                            <span className="label-text">Resale price</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("resalePrice", { required: true })}
                            aria-invalid={errors.resalePrice ? "true" : "false"}
                            placeholder="e.g: 3000"
                        />
                        {errors.resalePrice?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your resale price is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("originalPrice", { required: true })}
                            aria-invalid={errors.originalPrice ? "true" : "false"}
                            placeholder="e.g: 500"
                        />
                        {errors.originalPrice?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your original price is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">How many years/months used</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("usedTime", { required: true })}
                            aria-invalid={errors.usedTime ? "true" : "false"}
                            placeholder="e.g: 6m/1y"
                        />
                        {errors.usedTime?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your used time is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>

                        <input className="input input-bordered w-full" type='date'
                            {...register("date", { required: true })}
                            aria-invalid={errors.date ? "true" : "false"}

                        />
                        {errors.date?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your current date is required</p>}
                    </div>
                </div>

                <div className="form-control my-3">
                    <button className='btn'>Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;