import React, { Component } from "react";
import "../assets/_productData.scss";

class ProductData extends Component {
  render() {
    return (
      <div>
        <h1>Product Data</h1>
      </div>
    );
  }

  componentDidMount() {
    const { products } = this.props;
    console.log(products, "products");
  }
}

export default ProductData;
