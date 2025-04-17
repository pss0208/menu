import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const MenuTable = () => {
  //   const [searchKeyword, setSearchKeyword] = useState("");
  const [searchData, setSearchData] = useState(Array(data.length).fill(null));

  const setData = (value) => {
    const arr = data.slice();
    let rtnArr = [];
    arr.map((row) => {
      if (row.name.indexOf(value) !== -1) rtnArr.push(row);
    });
    setSearchData(rtnArr);
    console.log(searchData);
  };

  const onSearch = (value) => {
    // setSearchKeyword(value);
    setData(value);
  };

  return (
    <div className="menu_table">
      <SearchBar onChange={onSearch} />
      <ProductTable data={data} searchData={searchData} />
    </div>
  );
};

export default MenuTable;
