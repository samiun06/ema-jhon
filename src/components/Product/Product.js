import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  const { name, img, price, seller, stock,  features } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="product-description">
        <h4>{name}</h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <div className="product-overall">
          <div className="product-specification">
            <p>${price}</p>
            <p>
              <small>Only {stock} left in stock -order soon</small>
            </p>
            <button onClick={() => props.handleAddProduct(props)}><FontAwesomeIcon icon={faShoppingCart} className="icon"/>add to cart</button>
          </div>
          <div className="product-feature">

            <h3>Features</h3>
            <ul>
              {features.map((feature) => (
                <li key={feature.description}>
                  {feature.description}: {feature.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
