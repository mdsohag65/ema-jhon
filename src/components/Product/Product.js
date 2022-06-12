import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleClick } = props
    const { name, price, img, ratings, seller } = product;
    // const {handleClick}= props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'><small>Manufacturer: {seller}</small></p>
                <p className='product-rating'><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => handleClick(product)} className='cart-btn'>
                <p className='btn-txt'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;