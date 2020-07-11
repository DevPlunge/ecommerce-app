import { ACTIVE_CART, ADD_TO_CART, EMPTY_CART } from '../../actions';

const CartReducer = ( state, action ) => {

    switch( action.type ) {
        case ACTIVE_CART:
            return {
                ...state,
                cartActive: !state.cartActive
            }
        case ADD_TO_CART:
            const cartProduct = action.payload.products.filter(( product ) => {
                if( parseInt( action.payload.product_id ) === product.id ) {
                    // console.log(action.payload.product_id, product.id);
                    return product;
                }
            });
            const subTotal = cartProduct[0].price + action.payload.subtotal;
            action.payload.cart.push( cartProduct[0] );
            const cartLength = action.payload.cart.length;
            // console.log( cartProduct );
            return {
                ...state,
                cart: action.payload.cart,
                subtotal: subTotal,
                itemsInCart: cartLength
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                subtotal: 0,
                itemsInCart: 0,
            }
        default:
            return state;
    }

}

export default CartReducer;
