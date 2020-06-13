import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-center">
          <span className="nav-icon">
            <i className="fas fa-bars"></i>
          </span>
          <img src="" alt="store logo" />
          <div className="cart-btn">
            <span className="nav-icon">
              <i className="fas fa-cart-plus"></i>
            </span>
            <div className="cart-items">0</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
