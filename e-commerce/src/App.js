import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
