import React from 'react';

const CartItem = ({ name, price, imageUrl }) => {
    return (
        <div className="cart__item">
            <img src={ imageUrl } alt={ name } />
            <p>{ name }</p>
            <p>Price: { price }</p>
        </div>
    )
}

export default CartItem;
