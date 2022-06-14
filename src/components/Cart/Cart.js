import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <section>
            <div className='cart-section'>
                <h3>Order Summery</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
        </section>
    );
};

export default Cart;