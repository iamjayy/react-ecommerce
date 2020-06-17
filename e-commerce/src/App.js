import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Items from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
//import Main from "./MainJavascript/Main";

function App() {
  const cartBtn = document.querySelector(".cart-btn");
  const closeCartBtn = document.querySelector(".close-cart");
  const clearCartBtn = document.querySelector(".clear-cart");
  const cartDOM = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");
  const cartItems = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".cart-total");
  const cartContent = document.querySelector(".cart-content");
  const productsDom = document.querySelector(".products-center");

  //cart
  let cart = [];

  //getting products
  class Products {
    async getProducts() {
      try {
        let result = await fetch("products.json");
        let data = await result.json();

        let products = data.items;
        products = products.map(item => {
          const { title, price } = item.fields;
          const { id } = item.sys;
          const image = item.fields.image.fields.file.url;
          return { title, price, id, image };
        });
        return products;
      } catch (error) {
        console.log(error);
      }
    }
  }

  //display products
  class UI {
    displayProducts(products) {
      console.log(products);
    }
  }

  //local storage
  class Storage {}

  document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    //get all products
    products.getProducts().then(products => ui.displayProducts(products));
  });

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Items />
      <Cart />
    </div>
  );
}

export default App;
