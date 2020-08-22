import React from "react";
import "../App.css";

const SearchBar = props => {
  const { changeProductValue, handleSearch, inputValue } = props;
  return (
    <div className="search-bar-container">
      <form
        onSubmit={evt => {
          evt.preventDefault();
          handleSearch(inputValue);
        }}
      >
        <input
          id="product-input"
          className="search-bar"
          placeholder="SKU"
          // value={inputValue}
          onChange={evt => changeProductValue(evt.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
