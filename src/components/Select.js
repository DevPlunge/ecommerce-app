import React, { useContext } from 'react';
import ProductsContext from '../context/products/ProductsContext';

const Select = () => {

    const { sortProducts } = useContext( ProductsContext );

    const sortProductsInit = ( e ) => {
        sortProducts( e.target.value );
    }

    return (
        <div className="sort__select">
            <select onChange={ sortProductsInit }>
                <option defaultValue>Sort by Price</option>
                <option value="0">Lowest to highest</option>
                <option value="1">Highest to lowest</option>
            </select>
        </div>
    )
}

export default Select;
