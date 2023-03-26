import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider';

const Sellers = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:8000/addedProducts`;
    const { data: addedProducts, refetch } = useQuery({
        queryKey: ["addedProducts", user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    });
    const handleDelete = (_id) => {
        const confirmation = window.confirm(`Are you sure that want to delete`)
        if (confirmation) {
            fetch(`http://localhost:8000/sellers/${_id}`, {
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
    const handleVeryfied = _id => {
        fetch(`http://localhost:8000/addedProducts/verified/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Verified successfully')
                    refetch();
                }
            })
    }
    return (
        <div>
            <h1 className="text-3xl my-3">Sellers</h1>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Location</th>
                            <th>Posted date</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedProducts?.map((product, index) =>

                                <tr
                                    key={product._id}
                                    index={index}
                                >
                                    <th>{index + 1}</th>

                                    <td>{product.seller}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.location}</td>
                                    <td>{product.postedDate}</td>
                                    <td>{product.role !== 'verified' && <button onClick={() => handleVeryfied(product._id)} className='btn btn-xs btn-success'>Verify</button>}</td>

                                    <td className='hover:cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500"
                                            onClick={() => handleDelete(product._id)}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;