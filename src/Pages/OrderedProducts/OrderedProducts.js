import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const OrderedProducts = () => {

    const { user } = useContext(AuthContext);

    console.log(user.email);
    const url = `https://smart-resale-stall-server.vercel.app/specificBuyer?email=${user.email}`;
    const { data: orderedProducts, refetch } = useQuery({
        queryKey: ["orderedProducts"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    });

    const handleDelete = (_id) => {
        const confirmation = window.confirm(`Are you sure that want to delete`)
        if (confirmation) {
            fetch(`https://smart-resale-stall-server.vercel.app/buyers/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("successfully deleted seller");
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <h1 className="text-3xl my-4">Your ordered list</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Product</th>
                            <th>Your Location</th>
                            <th>Price</th>
                            <th>Payment status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderedProducts?.map((ordered, i) => <tr
                                key={i}
                                i={i}

                            >
                                <th>{i + 1}</th>

                                <td>
                                    <div className='w-16'>
                                        <img src={ordered.image} alt="Product" />
                                    </div>
                                </td>
                                <td>{ordered.brand},{ordered.productName}</td>
                                <td>{ordered.buyerLocation}</td>
                                <td>{ordered.price}</td>
                                <td><button className='bg-[#A2D2FF] text-gray-600 h-7 w-auto px-3 rounded-md font-semibold shadow-lg py-2 hover:bg-none'>Pay Now</button></td>

                                <td className='hover:cursor-pointer'>
                                    <button
                                        className='bg-[#A2D2FF] text-red-500 h-7 px-4 rounded-lg shadow-lg font-semibold'
                                        onClick={() => handleDelete(ordered._id)}
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderedProducts;