import React from 'react';
import './App.css';
import Auxilliary from './Auxilliary/Auxilliary';
import ProductsContextProvider from './context/products/ProductsContextProvider';
import Products from './components/Products';
import Sizes from './components/Sizes';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';
import CartItems from './components/CartItems';
import CartSubTotal from './components/CartSubTotal';
import Cross from './components/Cross';
import CartContextProvider from './context/cart/CartContextProvider';


function App() {
  return (
    <div className="container">
      <ProductsContextProvider>
        <CartContextProvider>
          <Auxilliary>
            <CartIcon />
            <Sizes />
            <div className="products__wrapper">
              <h1>Shopping Cart</h1>
              <Products />
            </div>
            <Cart>
              <Cross />
              <CartItems/>
              <CartSubTotal />
            </Cart>
          </Auxilliary>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
