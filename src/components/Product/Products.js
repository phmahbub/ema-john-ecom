import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const {products, previousCart} = useLoaderData()
    console.log(products)
    
    
    
    return (
        <div className='grid gap-5 lg:grid-cols-4'>
            {
                products.map(product=>(
                    <Product product={product}/>
                ))
            }
        </div>
    );
};

export default Products;