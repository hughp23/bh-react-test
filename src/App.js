import React, { Component } from "react";
import "./App.css";
import "../src/style/_main.scss";
import ProductData from "./components/ProductData";
// import { handleSearch } from "./utils.js";
// import * as api from "./api.js";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
const products = require("./data/products.json");

// // add a SKU parameter to the end of this string to call for product data
// const productEndpoint = "http://pr-2124.bhtesting.co.uk/rest/V1/products/";

// // add this token to the headers of your AJAX call to gain GET access to the REST API
// const bearerToken = "afuog84dkzuu8vf0z32n8ty1g1lfsk7i";

// // add an image path from the AJAX response data to the end of this string to get a full image path
// const imageDirectory = "http://pr-2124.bhtesting.co.uk/media/catalog/product";

// // SKU codes that you can use to test: BH2024, MX207, MX407, PD025

class App extends Component {
  state = {
    products,
    inputValue: ""
  };

  render() {
    const { products, inputValue } = this.state;
    return (
      <main className="main-container">
        <header>
          <h1>Enter a SKU code</h1>
        </header>
        <SearchBar
          changeProductValue={this.changeProductValue}
          inputValue={inputValue}
          handleSearch={this.handleSearch}
        />
        <section className="results-filter-container flex-box">
          <div className="side-bar-menu">
            <SideBar inputValue={inputValue} handleSearch={this.handleSearch} />
          </div>
          <div className="search-results flex-box-column">
            {/* RE-USABLE COMPONENT GOES HERE */}
            <ProductData products={products} />
          </div>
        </section>
      </main>
    );
  }

  handleSearch = (productValue, sort = "") => {
    //sort and filters are most likely performed server side but this is just to show what can be done client side
    //pull back products depending on input and filter methods chosen
    //get all products if no input value entered and set state with all
    let sortedProducts;
    let filteredProducts;
    console.log(productValue, "productValue");
    if (productValue === "") {
      if (sort !== "") {
        if (sort === "AZ&ASC") {
          sortedProducts = products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          this.setState({ products: sortedProducts });
        } else if (sort === "AZ&DESC") {
          sortedProducts = products.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          this.setState({ products: sortedProducts });
        } else if (sort === "Price&ASC") {
          sortedProducts = products.sort((a, b) => {
            return parseFloat(a.price) - parseFloat(b.price);
          });
          this.setState({ products: sortedProducts });
        } else if (sort === "Price&DESC") {
          sortedProducts = products.sort((a, b) => {
            return parseFloat(b.price) - parseFloat(a.price);
          });
          this.setState({ products: sortedProducts });
        }
      } else {
        this.setState({ products });
      }
    } else {
      filteredProducts = products.filter(product => {
        console.log(product.sku, "product");
        console.log(productValue, "productValue");
        return product.sku
          .trim()
          .toLowerCase()
          .includes(productValue.trim().toLowerCase());
      });
      if (sort !== "") {
        sortedProducts = filteredProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this.setState({ products: sortedProducts });
      } else {
        this.setState({ products: filteredProducts });
      }
    }
  };

  changeProductValue = inputValue => {
    console.log(inputValue, "inputValue");
    this.setState({ inputValue });
  };
}

export default App;
