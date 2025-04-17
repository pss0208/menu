import React, { useState } from "react";

const SearchBar = ({ onChange }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const search = (value) => {
    setSearchKeyword(value);
    onChange(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
