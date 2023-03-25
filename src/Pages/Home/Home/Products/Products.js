import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../../Components/Loading';
import ProductCard from './SingleProduct';

const Products = () => {
    const [filterProduct, setFilterProduct] = useState("All");

    // query
    const { data: products, isLoading } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch("products.json");
            const data = await res.json();
            return data
        }
    })

    const filterCategory = filterProduct === "All" ? products : products.filter((item) => item.category === filterProduct)
    console.log(filterCategory);
    const handleSelect = () => {
        let options = document.getElementById("userSelect").value;
        setFilterProduct(options)
        console.log(options);
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <div>
                <select
                    onChange={() => handleSelect()}
                    id="userSelect"
                    className='select select-secondary w-2/5'
                >
                    <option value="All" selected>All</option>
                    <option value="Thami">
                        Thami
                    </option>
                    <option value="T-shirt">
                        T-shirt
                    </option>
                    <option value="Skirt">
                        Skirt
                    </option>
                    <option value="Hand-bag">
                        Hand bag
                    </option>
                    <option value="Cat">
                        Pussy cat
                    </option>
                    <option value="Nail">
                        Nailpalish
                    </option>
                    <option value="Flower">
                        Flower
                    </option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                {
                    filterCategory &&
                    filterCategory.map(product => (
                        <ProductCard product={product} key={product.product_id} />
                    ))
                }
            </div>
        </>
    );
};

export default Products;