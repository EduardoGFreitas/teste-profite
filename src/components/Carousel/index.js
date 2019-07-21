import React, { Component } from "react";
import "./styles.css";

//import BulletProfite from "../../objects/BulletProfite";

import ArrowProfite from "../../objects/ArrowProfite";
import HeroCard from "../../objects/HeroCard";
export default class Carousel extends Component {
  handleClickBullet = (event, id) => {
    event.preventDefault();
    console.log(event, id);
  };
  render() {
    return (
      <section className="wrapper-carousel">
        <ol className="carousel-hero">
          <li>
            <ArrowProfite content="Anterior" isActive rightOrLeft="left" />
          </li>
          <li>
            <HeroCard />
          </li>
          <li>
            <ArrowProfite content="Próximo" isActive rightOrLeft="right" />
          </li>
        </ol>
        <ol className="bullets">bullets</ol>
      </section>
    );
  }
}
