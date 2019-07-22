import React from "react";

import ImageHero from "../../assets/img/image-hero.png";

import "./styles.css";

const HeroCard = () => (
  <article
    style={{ backgroundImage: `url(${ImageHero})` }}
    className="hero-card"
  >
    teste
  </article>
);

export default HeroCard;
