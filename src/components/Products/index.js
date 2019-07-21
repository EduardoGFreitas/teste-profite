import React from "react";

import "./styles.css";
import Card from "../../objects/Card";
const Products = () => (
  <section className="products">
    <h3 className="products-title"> Produtos</h3>
    <div className="product-carousel">
      <Card />
      <Card />
    </div>
  </section>
);

export default Products;
