import React, {useState } from 'react';
import { useLoaderData } from 'react-router';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import SelectedBrandById from './SelectedBrandById';

const SelectedBrand = () => {
    const products = useLoaderData();
    const [productInfo, setProductInfo] = useState(null);
    const elements = products.elements
    return (
        <div>
            <h1 className='text-2xl font-semibold'>You selected brand found {products.elements.length} products</h1>
            <h1 className='lg:text-3xl text-xl font-semibold'>Brand: {products.brand}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products &&
                    elements.map(product => <SelectedBrandById
                        key={product}
                        product={product}
                        setProductInfo={setProductInfo}
                    >
                        
                    </SelectedBrandById>)
                }
                
            </div>

            {
                productInfo &&
                <PurchaseModal
                productInfo={productInfo}
            >

            </PurchaseModal>}
        </div>
    );
};

export default SelectedBrand;