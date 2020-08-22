import React, { Component } from "react";
import "../style/_productData.scss";

class ProductData extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="products-container flex-box">
        {/* <h1>Product Data</h1> */}
        {products.map((product, i) => {
          return (
            <section key={i} className="product-card">
              <div className="img-container">
                <p>img</p>
              </div>
              <h3>{product.name}</h3>
              <h4>{product.price}</h4>
            </section>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const { products } = this.props;
    console.log(products, "products load");
  }

  componentDidUpdate() {
    const { products } = this.props;
    console.log(products, "products update");
  }
}

export default ProductData;
