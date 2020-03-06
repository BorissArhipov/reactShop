import React from 'react';
import CartItemsList from '../cart-items-list/cart-items-list';

import './cart-page.css';

const CartPage = () => {
    return(
        <div className="cart-page">
            <div className="container cart-page__con">
                <CartItemsList/>
            </div>
        </div>
    );
}

export default CartPage;