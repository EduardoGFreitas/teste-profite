import React from "react";

import "./styles.css";

import ProfiteWhite from "../../assets/img/profite_white.png";
import VtexWhite from "../../assets/img/vtex_white.png";
const Footer = () => (
  <section className="footer">
    <h3 className="footer-title">Localização </h3>
    <div className="footer-content">
      <div className="footer-locations">
        <div className="footer-location_column">
          <strong> São Paulo</strong>
          <span>Rua do Rócio, 423/1801</span>
          <span>Vila Olímpia - SP</span>
          <span> 04552-000</span>
          <span>+55 11 3333 3333</span>
        </div>
        <div className="footer-location_column">
          <strong>Rio de Janeiro</strong>
          <span>Vol. da Pátria, 301/702</span>
          <span>Botafogo - RJ</span>
          <span>22270-000</span>
          <span>+55 21 3333 3333</span>
        </div>
      </div>
      <div className="footer-actions">
        <button className="footer-button">Entre em Contato</button>
        <button className="footer-button">Fale Conosco</button>
      </div>
      <div className="footer-logos">
        <div className="footer-box">
          <strong>Created by</strong>
          <img src={ProfiteWhite} alt="profite logo" />
        </div>
        <div className="footer-box">
          <strong>Powered by</strong>
          <img src={VtexWhite} alt="vtex logo" />
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
