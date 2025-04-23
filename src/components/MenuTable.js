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

//Todo
//실시간검색기능 추가

const MenuTable = () => {
  //   const [searchKeyword, setSearchKeyword] = useState("");
  //const [searchData, setSearchData] = useState(Array(data.length).fill(null));
  const [searchData, setSearchData] = useState(data);

  // const setData = (value) => {
  //   const arr = data.slice();
  //   let rtnArr = [];
  //   arr.forEach((row) => {
  //     if (row.name.toLowerCase().indexOf(value) !== -1) rtnArr.push(row);
  //   });
  //   setSearchData(rtnArr);
  // };
  const setData = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = data.filter((row) =>
      row.name.toLowerCase().includes(searchValue)
    );
    setSearchData(filtered);
  };

  const onSearch = (value) => {
    // setSearchKeyword(value);
    setData(value);
  };

  return (
    <div className="menu_table">
      <SearchBar onChange={onSearch} />
      <ProductTable searchData={searchData} />
    </div>
  );
};

export default MenuTable;
