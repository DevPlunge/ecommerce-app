import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import CartContextProvider from '../context/cart/CartContextProvider';

const CartSubTotal = () => {

    const { subtotal } = useContext( CartContext );

    return (
        <div className="cart__subtotal">
            <p><strong>Subtotal: { Math.floor( subtotal ) }$</strong></p>
        </div>
    )
}

export default CartSubTotal;