import React from "react";

const Product = ({ name, price, stocked }) => {
  return (
    <tr style={{ color: stocked ? "black" : "red" }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default Product;
