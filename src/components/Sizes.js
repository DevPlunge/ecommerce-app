import React, { useContext } from 'react';
import ProductsContext from '../context/products/ProductsContext';

const Sizes = () => {

    const { changeSize } = useContext( ProductsContext );

    // handlers
    const changeSizeInit = ( e ) => {
        changeSize( e.target.value );
    }

    return (
        <>
        <p>Sizes:</p>
        <div className="product__sizes">
            <div className="size__checkbox">
                <input id="XS" type="checkbox" value="XS" onChange={ changeSizeInit } />
                <label htmlFor="XS">XS</label>
            </div>
            <div className="size__checkbox">
                <input id="S" type="checkbox" value="S" onChange={ changeSizeInit } />
                <label htmlFor="S">S</label>
            </div>
            <div className="size__checkbox">
                <input id="M" type="checkbox" value="M" onChange={ changeSizeInit } />
                <label htmlFor="M">M</label>
            </div>
            <div className="size__checkbox">
                <input id="ML" type="checkbox" value="ML" onChange={ changeSizeInit } />
                <label htmlFor="ML">ML</label>
            </div>
            <div className="size__checkbox">
                <input id="L" type="checkbox" value="L" onChange={ changeSizeInit } />
                <label htmlFor="L">L</label>
            </div>
            <div className="size__checkbox">
                <input id="XL" type="checkbox" value="XL" onChange={ changeSizeInit } />
                <label htmlFor="XL">XL</label>
            </div>
            <div className="size__checkbox">
                <input id="XXL" type="checkbox" value="XXL" onChange={ changeSizeInit } />
                <label htmlFor="XXL">XXL</label>
            </div>
        </div>
        </>
    )
}

export default Sizes;
