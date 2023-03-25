import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../../Components/Loading';

const Advertisement = () => {

    // query
    const { data: products, isLoading } = useQuery({
        queryKey: ['addedProducts'],
        queryFn: async () => {
            const res = await fetch('https://smart-resale-stall-server.vercel.app/addedProducts', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading />
    }

    // handlerWishList

    const handlerWishList = (data) => {

    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mt-8'>Advertisement</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    products &&
                    products?.map(product =>
                        <div className="bg-neutral shadow-xl hover:shadow-2xl my-4 flex flex-col justify-between p-3 rounded-lg"
                        key={product._id}
                    >

                        <div className='rounded-md'>
                            <img className='w-full h-52 rounded-md' src={product.image} alt="Product" />
                        </div>

                        <div className="text-white">
                            <h2 className="text-xl font-semibold">{product.brand}</h2>

                            <div className='flex flex-col items-start'>
                                <p>Location: {product.location}</p>
                                <p className='line-through'>Tk: {product.originalPrice}</p>
                                <p>Used: {product.usedTime}</p>
                                <p className='font-semibold'>Tk: {product.resalePrice}</p>
                                <p>Posted: {product.postedDate}</p>
                                <p>Condition: {product.condition}</p>
                                <div>
                                    {
                                        product.role ?
                                            <>
                                                <button className="" title='Verified'>
                                                    Verified seller: {product.seller}
                                                    <div className="badge badge-info"></div>
                                                </button>
                                            </>
                                            :
                                            <p>Unknown seller</p>
                                    }
                                </div>
                            </div>

                            <div className="card-actions justify-start mt-3">

                                <button onClick={handlerWishList} className="btn btn-info text-white hover:btn-outline capitalize">Add To Cart</button>

                                <Link
                                    to={`/myOrders/${product._id}`}
                                >
                                    <button className="btn btn-secondary text-white hover:btn-outline capitalize" >Buy</button>
                                </Link>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Advertisement;