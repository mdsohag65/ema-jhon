import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, img, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'><small>Manufacturer: {seller}</small></p>
                <p className='product-rating'><small>Rating: {ratings} star</small></p>
            </div>
            <button className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;