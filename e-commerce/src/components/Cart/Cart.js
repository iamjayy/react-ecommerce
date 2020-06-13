import React, { Component } from "react";
import product1 from "../../images/product-1.jpeg";

class Cart extends Component {
  render() {
    return (
      <div className="cart-overlay">
        <div className="cart">
          <span className="close-cart">
            <i className="fas fa-window-close"></i>
          </span>
          <h2>Your Cart</h2>
          <div className="cart-content">
            {/* cart item  */}
            <div className="cart-item">
              <img src={product1} alt="product" />
              <div>
                <h4>Queen bed</h4>
                <h5>$9.00</h5>
                <span className="remove-item">remove</span>
              </div>
              <div>
                <i className="fas fa-chevron-up"></i>
                <p className="item-amount">1</p>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            {/* end cart item */}
            <div className="cart-footer">
              <h3>
                Your total : $ <span className="cart-total">0</span>
              </h3>
              <button className="clear-cart banner-btn">clear cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
