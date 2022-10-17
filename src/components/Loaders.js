import React from 'react';
import { getStoredCart } from '../utilities/fakedb';

const ProductsLoaders = async() => {
    const productsData = await fetch('products.json')
    const products = await productsData.json()
    const savedCart = getStoredCart()
    console.log(savedCart)
    const previousCart = []
    for(const id in savedCart){
        const addedProduct = products.find(product =>product.id === id)
        if(addedProduct){
            const quantity = savedCart[id]
            addedProduct.quantity = quantity
            previousCart.push(addedProduct)
        }
    }
return {products, previousCart}
};

export default ProductsLoaders;