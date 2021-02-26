import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.product.price, 0);
    const shippingTotal = cart.reduce((total, prd) => total + prd.product.shipping, 0);
    const tax = Math.round((totalPrice + shippingTotal) * 0.1);
    return (
        <div>
            <h2 className="header">Order Summary</h2>
            <p className="header">Items ordered: {cart.length}</p>
            <div className="content">
            <p><small>Items: ${Math.round(totalPrice)}</small></p>
            <p><small>Shipping and Handling: ${Math.round(shippingTotal)}</small></p>
            <p><small>Before Tax: ${Math.round(totalPrice + shippingTotal)}</small></p>
            <p><small>Estimated Tax: ${tax}</small></p>
            <p className="order"><small>Order Total: ${Math.round(totalPrice + shippingTotal + tax)}</small></p>
            </div>

        </div>
    );
};

export default Cart;