import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import CartItem from './CartItem';

const CartItems = () => {

    const { cart, emptyCart } = useContext( CartContext );

    if( cart.length === 0 ) {
        return <p className="empty-cart">Cart is empty!</p>;
    }

    return (
        <div className="cart__items">
            <button className="empty-cart-btn" onClick={ emptyCart }>Empty Cart!</button>
            { cart.map(( cartItem, index ) => {
                return <CartItem
                            key={ index } 
                            id={ cartItem.id } 
                            name={ cartItem.name } 
                            price={ cartItem.price }
                            imageUrl={ cartItem.image_url }
                        />;
            }) }
        </div>
    )
}

export default CartItems;
