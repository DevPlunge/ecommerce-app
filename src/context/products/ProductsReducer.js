import { SIZE_INIT, SORT_INIT } from '../../actions';

const ProductsReducer = ( state, action ) => {

    // sort products from high price to low price
    const sortHighToLow = ( arrayToSort ) => {
        const sortOutProducts = arrayToSort.sort(( product1, product2 ) => {
            return product2.price - product1.price;
        });
        // console.log( sortOutProducts );
        return sortOutProducts;
    }

    // sort products from low price to high price
    const sortLowToHigh = ( arrayToSort ) => {
        const sortOutProducts = arrayToSort.sort(( product1, product2 ) => {
            return product1.price - product2.price;
        });
        return sortOutProducts;
    }

    switch( action.type ) {
        case SIZE_INIT:
            // filter the products based on product size
            const sizedProducts = action.payload.products.filter(( product ) => {
                if( product.size === action.payload.productSize ) {
                    return product;
                }
            });
            const totalProductsInCurrentCategory = sizedProducts.length;
            return {
                ...state,
                sizedProducts,
                totalProductsInCurrentCategory
            };

        case SORT_INIT:
            // console.log(typeof( action.payload.sortValue ));
            var sortedProducts;
            if( parseInt( action.payload.sortValue ) === 0 ) {
                if( state.sizedProducts.length === 0 ) {
                    sortedProducts = sortLowToHigh( state.products );
                } else {
                    sortedProducts = sortLowToHigh( state.sizedProducts );
                }
            } else if( parseInt( action.payload.sortValue) === 1 ) {
                if( state.sizedProducts.length === 0 ) {
                    sortedProducts = sortHighToLow( state.products );
                } else {
                    sortedProducts = sortHighToLow( state.sizedProducts );
                }
            } else {
                    sortedProducts = state.sizedProducts;
            }
            return {
                ...state,
                sizedProducts: sortedProducts
            }

        default:
            return state;
    }

}

export default ProductsReducer;
