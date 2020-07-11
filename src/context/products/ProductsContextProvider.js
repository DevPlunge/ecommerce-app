import React, { useReducer } from 'react';
import ProductsContext from './ProductsContext';
import ProductsReducer from './ProductsReducer';
import { SIZE_INIT, SORT_INIT } from '../../actions';

const ProductsContextProvider = ( props ) => {

    const initialState = {
        products: [
            {
                id: 1,
                image_url: '/images/prod_1.jpg',
                shipping: 'Free Shipping',
                name: 'Cat Tee Black T-Shirt',
                price: 10.90,
                size: 'XS'
            },
            {
                id: 2,
                image_url: '/images/prod_2.jpg',
                shipping: 'Free Shipping',
                name: 'Dark Thug Blue-Navy T-Shirt',
                price: 29.45,
                size: 'S'
            },
            {
                id: 3,
                image_url: '/images/prod_3.jpg',
                shipping: 'Free Shipping',
                name: 'Sphynx Tie Dye Wine T-Shirt',
                price: 9.00,
                size: 'S'
            },
            {
                id: 4, 
                image_url: '/images/prod_4.jpg',
                shipping: 'Free Shipping',
                name: 'Skuul',
                price: 14.00,
                size: 'XS'
            },
            {
                id: 5,
                image_url: '/images/prod_5.jpg',
                shipping: 'Free Shipping',
                name: 'Wine Skul T-Shirt',
                price: 13.25,
                size: 'XXL'
            },
            {
                id: 6,
                image_url: '/images/prod_6.jpg',
                shipping: 'Free Shipping',
                name: 'Cat Tee Black T-Shirt',
                price: 10.90,
                size: 'M'
            },
            {
                id: 7,
                image_url: '/images/prod_7.jpg',
                shipping: 'Free Shipping',
                name: 'Sphynx Tie Dye Grey T-Shirt',
                price: 10.90,
                size: 'ML'
            },
            {
                id: 8,
                image_url: '/images/prod_8.jpg',
                shipping: 'Free Shipping',
                name: 'Danger Knife Grey',
                price: 14.90,
                size: 'XS'
            },
            {
                id: 9,
                image_url: '/images/prod_9.jpg',
                shipping: 'Free Shipping',
                name: 'White DGK Script Tee',
                price: 14.90,
                size: 'ML'
            },
            {
                id: 10,
                image_url: '/images/prod_10.jpg',
                shipping: 'Free Shipping',
                name: 'Born On The Streets',
                price: 25.90,
                size: 'XXL'
            },
            {
                id: 11,
                image_url: '/images/prod_11.jpg',
                shipping: 'Free Shipping',
                name: 'Tso 3D Short Sleeve T-Shirt A',
                price: 10.90,
                size: 'XL'
            },
            {
                id: 12,
                image_url: '/images/prod_12.jpg',
                shipping: 'Free Shipping',
                name: 'Man Tie Dye Cinza Grey T-Shirt',
                price: 49.90,
                size: 'XL'
            },
            {
                id: 13,
                image_url: '/images/prod_13.jpg',
                shipping: 'Free Shipping',
                name: 'Crazy Monkey Black T-Shirt',
                price: 22.90,
                size: 'L'
            },
            {
                id: 14,
                image_url: '/images/prod_14.jpg',
                shipping: 'Free Shipping',
                name: 'Tso 3D Black T-Shirt',
                price: 18.90,
                size: 'L'
            },
            {
                id: 15,
                image_url: '/images/prod_15.jpg',
                shipping: 'Free Shipping',
                name: 'Crazy Monkey Grey',
                price: 134.90,
                size: 'S'
            },
            {
                id: 16,
                image_url: '/images/prod_16.jpg',
                shipping: 'Free Shipping',
                name: 'On the streets: Black T-Shirt',
                price: 49.00,
                size: 'XXL'
            },
        ],
        totalProductsInCurrentCategory: 16,
        sizedProducts: [],
        sortingValue: null,
    };

    const [ state, dispatch ] = useReducer( ProductsReducer, initialState );

    // action dispatchers
    const changeSize = ( size ) => {
        // console.log( size );
        dispatch({ type: SIZE_INIT, payload: { productSize: size, products: state.products } });
    }

    const sortProducts = ( value ) => {
        // console.log( sortingValue );
        dispatch({ type: SORT_INIT, payload: { sortValue: value } });
    }

    return (
        <ProductsContext.Provider value={{
            products: state.products,
            totalProducts: state.totalProductsInCurrentCategory,
            changeSize,
            sizedProducts: state.sizedProducts,
            sortProducts
        }}>
            { props.children }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;
