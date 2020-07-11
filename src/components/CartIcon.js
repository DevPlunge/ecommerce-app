import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

const CartIcon = () => {

    const { activeCart, itemsInCart } = useContext( CartContext );

    return (
        <div className="cart__icon" onClick={ activeCart }>
            <span>Cart: <strong>{ itemsInCart }</strong></span>
        </div>
    )
}

export default CartIcon;
