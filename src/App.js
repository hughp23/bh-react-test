import React, { Component } from "react";
import "./App.css";
import ProductData from "./components/ProductData";
import * as api from "./api.js";
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
    products
  };

  render() {
    const { products } = this.state;
    return (
      <main className="main-container">
        <header>
          <h1>Enter a SKU code</h1>
        </header>

        <div className="search-bar-container">
          <form
            onSubmit={evt => {
              evt.preventDefault();
            }}
          >
            <input className="search-bar" placeholder="SKU"></input>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="search-results">
          {/* RE-USABLE COMPONENT GOES HERE */}
          <ProductData products={products} />
        </div>
      </main>
    );
  }

  handleSearch = event => {
    api.getProductData().then(data => {
      console.log(data, "data after call 2");
    });
  };
}

export default App;
