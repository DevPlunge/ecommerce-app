import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

const Cart = ( props ) => {

    const { isCartActive } = useContext( CartContext );

    return (
        <div className={ isCartActive ? 'cart active' : 'cart' }>
            { props.children }
        </div>
    )
}

export default Cart;
