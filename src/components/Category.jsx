import React from "react";

const Category = ({product}) => {
  return (
    <div className="category">
      <img
        src={product.product_image}
        alt=""
        srcset=""
      />
      <a href="#">
        <span>{product.product_name}</span>
        <i class="fa-solid fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Category;
