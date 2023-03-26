// import 'daisyui/dist/index.css';
import 'tailwindcss/tailwind.css';
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Modal from '../../../Modal/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


const ProductCard = ({ product }) => {
    // const rating = Math.floor(product.rating);
    // const hasHalfStar = rating !== product.rating;


    const styles = {
        media: {
            height: "200px",
        }
    }
    

    return (
        <Card className="border border-gray-200 rounded-md shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <CardMedia
                component="img"
                height="0"
                image={product.image}
                alt={product.product_name}
                style={styles?.media}
                className="w-full object-cover"
            />
            <CardContent className="py-4 px-6">
                <Typography variant="subtitle4" component="h2" className="mb-2 font-medium">
                    {product.product_name}
                </Typography>
                <Typography>
                    {product.features}
                </Typography>
                {/* <div className="flex items-center mb-2">
                    {[...Array(rating)].map((_, i) => (
                        <FontAwesomeIcon icon={faStar} key={i} className="text-yellow-500 mr-1" />
                    ))}
                    {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500 mr-1" />}
                    {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                        <FontAwesomeIcon icon={farStar} key={i} className="text-gray-300 mr-1" />
                    ))}
                    <Typography variant="subtitle2" component="span" className="text-gray-500 ml-2">
                        {product.rating} ({product.reviews} reviews)
                    </Typography>
                </div> */}
                <Typography variant="subtitle1" component="h3" className="text-lg font-bold mb-2">
                    {product.currency} {product.price.toFixed(2)}
                </Typography>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mr-3">
                        Add to Cart
                    </button>

                    <label htmlFor="my-modal-6" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">Buy</label>

                    <Link
                        to={`/myOrders/${product?.product_id}`}
                    >
                    </Link>

                </div>
            </CardContent>
            <Modal
                product={product}
            />
        </Card>
    );
};

export default ProductCard;
