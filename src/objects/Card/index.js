import React from "react";

import "./styles.css";

import TenisImage from "../../assets/img/tenis.png";
import CartIcon from "../../assets/img/cart-icon-white.png";
import RatingIcon from "../../assets/img/star.png";
const Card = () => (
  <article className="card">
    <div className="card-img">
      <img src={TenisImage} alt="tenis" />
    </div>
    <div className="card-description">
      <strong className="card-title">TÊNIS COURO PUMA R698 Q4 V2</strong>
      <div className="card-rating">
        <img src={RatingIcon} alt="" />
        <img src={RatingIcon} alt="" />
        <img src={RatingIcon} alt="" />
        <img src={RatingIcon} alt="" />
      </div>
      <div className="card-price--line-through">de R$ 299,00 </div>
      <div className="card-price">por R$ 399,00 </div>
      <div className="card-installment">ou em 3x de R$ 133,00</div>
    </div>
    <div className="card-action">
      <button className="card-button">
        <img src={CartIcon} alt="icon cart" />
        Compra
      </button>
    </div>
  </article>
);

export default Card;
