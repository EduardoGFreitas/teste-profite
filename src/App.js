import React from "react";

import "./App.css";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Products />
      <Footer />
    </>
  );
}

export default App;
