import React from 'react';

const SelectedBrandById = ({ product, setProductInfo }) => {
    return (
        <div className='bg-[#bde0fe] shadow-xl my-4 flex flex-col justify-between p-3 rounded-lg'>
            <div className='rounded-md'>
                <img className='w-full h-52 rounded-md' src={product.picture} alt="Product" />
            </div>

            <div className="">
                <h2 className="text-xl font-semibold">{product.model}</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <p>Location: {product.location}</p>
                    <p className='line-through text-gray-500'>Tk: {product.originalPrice}</p>
                    <p>Used: {product.usedTime}</p>
                    <p className='font-semibold'>Tk: {product.resalePrice}</p>
                    <p>Posted: {product.postedDate}</p>
                    <div>
                        {
                            product.seller ?
                                <>
                                    <button className="" title='Verified'>
                                        {product?.seller}
                                        <div className="badge badge-success"></div>
                                    </button>
                                </>
                                :
                                <p>Unknown seller</p>
                        }
                    </div>
                </div>

                <div className="card-actions justify-start mt-3">

                    <button className="btn btn-accent hover:btn-outline">WishList</button>

                    <label
                        htmlFor="purchase-modal"
                        className="btn btn-success hover:btn-outline"
                        onClick={()=>setProductInfo(product)}
                    >
                        Purchase
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SelectedBrandById;