import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

const Product = ({ id, url, name, shipping, price }) => {

    const { addToCart } = useContext( CartContext );

    const addToCartInit = ( e ) => {
        // console.log(e.target.id);
        addToCart( e.target.id );
    }

    return (
        <div className="product" id={ id }>
            <img src={ url } alt={ name } />
            <p className="name"><strong>{ name }</strong></p>
            <p className="price">{ price }</p>
            <p className="shipping">{ shipping }</p>
            <button className="button" onClick={ addToCartInit } id={ id }>Add to Cart</button>
        </div>
    )
}

export default Product;
