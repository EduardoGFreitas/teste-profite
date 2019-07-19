import React from "react";
import "./styles.css";

import Logo from "../../objects/Logo";
import Menu from "../../objects/Menu";
import MiniCart from "../../objects/Minicart";
import Quantity from "../../objects/Quantity";
import Search from "../../objects/Search";

const Header = () => (
  <header className="header">
    <Menu />
    <Logo />
    <div className="header-cart_container">
      <MiniCart />
      <Quantity />
    </div>
    <Search />
  </header>
);

export default Header;
