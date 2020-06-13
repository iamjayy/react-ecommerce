import React, { Component } from "react";
import product1 from "../../images/product-1.jpeg";

class Items extends Component {
  render() {
    return (
      <section className="products">
        <div className="section-title">
          <h2>Our Products</h2>
        </div>
        <div className="products-center">
          {/* single product */}
          <article className="product">
            <div className="img-container">
              <img src={product1} alt="product" className="product-img" />
              <button className="bag-btn" data-id="1">
                <i className="fas fa-shopping-cart">Add To Bag</i>
              </button>
            </div>
            <h3>Jordan 1 Retro High Off-White University Blue</h3>
            <h4>$500</h4>
          </article>
        </div>
      </section>
    );
  }
}

export default Items;
