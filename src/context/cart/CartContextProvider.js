import React, { useContext, useReducer } from 'react';
import CartContext from './CartContext';
import { ACTIVE_CART, ADD_TO_CART, EMPTY_CART } from '../../actions';
import CartReducer from './CartReducer';
import ProductsContext from '../products/ProductsContext';

const CartContextProvider = ( props ) => {

    const { products, sizedProducts } = useContext( ProductsContext );
    
    // initial state
    const initialState = {
        cart: [],
        itemsInCart: 0,
        subtotal: 0,
        cartActive: false,
    };

    const [state, dispatch] = useReducer(CartReducer, initialState)

    // action dispatchers
    const activeCart = () => {
        dispatch({ type: ACTIVE_CART });
    }

    const addToCart = ( product_id ) => {
        dispatch({ type: ADD_TO_CART, payload: { products, product_id, cart: state.cart, subtotal: state.subtotal } });
    }

    const emptyCart = () => {
        dispatch({ type: EMPTY_CART });
    }

    return <CartContext.Provider value={{
        isCartActive: state.cartActive,
        activeCart,
        addToCart,
        cart: state.cart,
        subtotal: state.subtotal,
        itemsInCart: state.itemsInCart,
        emptyCart
    }}>
        { props.children }
    </CartContext.Provider>
}

export default CartContextProvider;