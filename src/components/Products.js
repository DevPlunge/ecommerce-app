import React, { useContext } from 'react';
import ProductsContext from '../context/products/ProductsContext';
import Product from './Product';
import Select from './Select';

const Products = () => {

    const { products, totalProducts, sizedProducts } = useContext( ProductsContext );

    // get the products to loop through either all or sized
    const productsToLoopThrough = ( sizedProducts.length > 0 ) ? sizedProducts : products;

    return (
        <>
        <div className="total__products">
            <p>Total Products: <span>{ totalProducts }</span></p>
            <Select />
        </div>
        <div className="products">
            { productsToLoopThrough.map(( product_item ) => {
                return <Product
                    key={ product_item.id }
                    id={ product_item.id }
                    url={ product_item.image_url }
                    name={ product_item.name }
                    shipping={ product_item.shipping }
                    price={ product_item.price }
                />
            }) }
        </div>
        </>
    )
    
}

export default Products;
