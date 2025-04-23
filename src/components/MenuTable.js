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
  const [searchData, setSearchData] = useState(data);

  const setData = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = data.filter((row) =>
      row.name.toLowerCase().includes(searchValue)
    );
    setSearchData(filtered);
  };

  const onSearch = (value) => {
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
