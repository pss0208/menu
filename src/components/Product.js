import React from "react";

const Product = ({ name, price, stocked }) => {
  return (
    <div className="product_row">
      {name}, {price}
    </div>
  );
};

export default Product;
