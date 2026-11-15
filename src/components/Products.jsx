import React from "react";
import "./Products.css";
import { useState } from "react";

const Products = ({ product, cart, setCart }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="card">
      <div className="card-img">
        <img src={product.product_image} alt="" srcset="" />
      </div>
      <div className="card-footer">
        <p className="product-name">{product.product_name}</p>
        <p className="price">
          <span className="current-price">₹{product.current_price}</span>
          <span className="original-price">₹{product.original_price}</span>
        </p>
        {!clicked ? (
          <button
            onClick={() => {
              setCart(cart + 1);
              setClicked(!clicked);
            }}
            className="btn add-cart-btn"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => {
              setCart(cart - 1);
              setClicked(!clicked);
            }}
            className="btn remove-cart-btn"
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
