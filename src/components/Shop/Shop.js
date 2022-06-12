import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleClick = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <section className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='cart-info'>
                    <h3>Order Summery</h3>
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>
        </section>
    );
};

export default Shop;