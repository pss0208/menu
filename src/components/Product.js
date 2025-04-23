import React from "react";

const Product = ({ name, price, stocked }) => {
  return (
    <tr>
      <td style={{ color: stocked ? "black" : "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default Product;
