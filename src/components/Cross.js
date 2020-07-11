import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

const Cross = () => {

    const { activeCart } = useContext( CartContext );

    return (
        <div className="close__cart" onClick={ activeCart }></div>
    )
}

export default Cross;
