import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
