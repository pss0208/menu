import React from "react";
import Product from "./Product";
import Category from "./Category";

const ProductTable = ({ searchData }) => {
  //카테고리별로 상품을 묶어서 출력하는 함수
  const classifyCategory = (searchData) => {
    //카테고리와 상품을 넣을 맵(key: 카테고리, value: 상품 정보)
    const categoryMap = new Map();

    //상품 정보 배열 [{}]
    //ex)[{ category: "Fruits", price: "$1", stocked: true, name: "Apple" }, { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }]
    const categoryArr = [];

    //카테고리별 분류
    searchData.forEach((data) => {
      if (!categoryMap.has(data.category)) {
        categoryMap.set(data.category, []);
        categoryArr.push(data.category);
      }
      categoryMap.get(data.category).push(data);
    });
    return (
      <table className="col_table" style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <td className="col">Name</td>
            <td className="col">Price</td>
          </tr>
        </thead>
        {categoryArr.map((category) => {
          const data = categoryMap.get(category);
          return (
            <tbody key={category}>
              <tr>
                <td colSpan="2">
                  <Category category={category} />
                </td>
              </tr>
              {data.map((productInfo) => {
                return (
                  <Product
                    key={productInfo.name}
                    name={productInfo.name}
                    price={productInfo.price}
                    stocked={productInfo.stocked}
                  />
                );
              })}
            </tbody>
          );
        })}
      </table>
    );
  };

  return <div className="product_table">{classifyCategory(searchData)}</div>;
};

export default ProductTable;
