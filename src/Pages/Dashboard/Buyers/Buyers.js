import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider';

const Buyers = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const url = `https://smart-resale-stall-server.vercel.app/allBuyers`;
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
            <h1 className="text-3xl my-3">Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyers Name</th>
                            <th>Product</th>
                            <th>Buyer Location</th>
                            <th>Price</th>
                            <th>Payment Status</th>
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

                                <td>{ordered.buyerName}</td>
                                <td>{ordered.brand},{ordered.productName}</td>
                                <td>{ordered.buyerLocation}</td>
                                <td>{ordered.price}</td>
                                <td><button className='bg-[#A2D2FF] text-gray-600 h-7 w-auto px-3 rounded-md font-semibold shadow-lg'>Paid/Unpaid</button></td>

                                <td className='hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-500"
                                    onClick={() => handleDelete(ordered._id)}
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;