import React from "react";
import data from "../../fakeData";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const fakeData = data.slice(0, 10);
  console.log(fakeData)
  const [products] = useState(fakeData);
  const [cart, setCart] = useState([]);
  console.log(cart)
  const handleAddProduct = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    
  }

  return (
    <div className="shop-container">
      <div className="product-container">
          {

            products.map((product) => <Product key={product.key} product={product} handleAddProduct={handleAddProduct}></Product>)
          
          }
      </div>
      <div className="shopping-cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
