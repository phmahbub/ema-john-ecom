import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { useLoaderData } from 'react-router-dom';

const Product = ({ product, handleAddToCart }) => {
    // console.log(product)

    const { name, img, seller, price, ratings } = product;

    return (
        <div className=' max-w-sm bg-slate-400 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative'>
            <img class="rounded-t-lg" src={img} alt=""></img>
            <div className='product-info'>
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</p>
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price: ${price}</p>
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><small>Seller: {seller}</small></p>
                <p class="pb-12  text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><small>Ratings: {ratings} stars</small></p>
                <button onClick={() => handleAddToCart(product)}  class="inline-flex items-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-0 right-0">
                    <p className='text-white'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>

    );
};

export default Product;