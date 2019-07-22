import React from "react";

import "./App.css";

import Header from "./components/Header";
import CarouselProfite from "./components/CarouselProfite";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <CarouselProfite />
      <Products />
      <Footer />
    </>
  );
}

export default App;
