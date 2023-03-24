import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../../Components/Loading';

const Categories = () => {
    const { data: brands, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            // const res = await fetch('https://smart-resale-stall-server.vercel.app/allBrandsProducts');
            const res = await fetch("brand.json")
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div >
            <h1 className='text-3xl font-semibold my-7'>Select Categories</h1>

            <select className='select select-secondary w-2/5'>
                <option value="" selected>All</option>
                <option value="">
                    Thami
                </option>
                <option value="">
                    T-shirt
                </option>
                <option value="">
                    Skirt
                </option>
                <option value="">
                    Hand bag
                </option>
                <option value="">
                    Pussy cat
                </option>
                <option value="">
                    Nailpalish
                </option>
            </select>

            {/* <div className='flex border-dotted border-2 border-sky-500 gap-x-7 p-3 rounded-md bg-[#a8dadc]'>
                {
                    brands?.map(brand =>
                        <div
                            key={brand._id}
                        >
                            <div className='cursor-pointer border-2 border-solid border-blue-400 rounded-md p-2' title={brand.brand}>
                                <img className='hidden md:block' src={brand.imgURL} alt="" />

                                <Link to={`/selectedBrand/${brand._id}`} className='text-xl md:text-2xl font-semibold hover:underline'>{brand.brand}</Link>
                            </div>
                        </div>
                    )
                }
            </div> */}
        </div>
    );
};

export default Categories;