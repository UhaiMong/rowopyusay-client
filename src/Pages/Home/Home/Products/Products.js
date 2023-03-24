import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../../Components/Loading';
import ProductCard from './SingleProduct';

const Products = () => {
    // query
    const { data: products,isLoading } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch("products.json");
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return <Loading/>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {
                products &&
                products.map(product => (
                    <ProductCard product={product} key={product.product_id} />
                ))
            }
        </div>
    );
};

export default Products;