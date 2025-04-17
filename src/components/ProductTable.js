import React from "react";
import Product from "./Product";
import Category from "./Category";

const ProductTable = ({ data, searchData }) => {
  //카테고리별로 상품을 묶어서 출력하는 함수
  const classifyCategory = (data) => {
    //카테고리와 상품을 넣을 맵(key: 카테고리, value: 상품 정보)
    const categoryMap = new Map();
    //상품 정보 배열 [{}]
    const categoryArr = [];
    data.map((data) => {
      if (categoryMap.has(data.category)) {
        categoryMap.get(data.category).push(data);
      } else {
        categoryMap.set(data.category, []);
        categoryArr.push(data.category);
      }
      return null;
    });
    return (
      <>
        {categoryArr.map((category, idx) => {
          const data = categoryMap.get(category);
          return (
            <div key={idx}>
              <Category category={category} />
              {data.map((productInfo, i) => {
                return (
                  <Product
                    name={productInfo.name}
                    price={productInfo.price}
                    stocked={productInfo.stocked}
                  />
                );
              })}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="product_table">
      <table className="col_table">
        <tbody>
          <tr>
            <td className="col">Name</td>
            <td className="col">Price</td>
          </tr>
        </tbody>
      </table>
      {classifyCategory(data)}
    </div>
  );
};

export default ProductTable;
