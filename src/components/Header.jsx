import React from "react";
import Point from "./subComponents/Point";
import { HiMenuAlt4 } from "react-icons/hi";

import "../styles/header.css"

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__menu">
        <HiMenuAlt4 color="rgba(256,256,256,0.4)" size="3rem" />
        <p className="menu__p">MENU</p>
      </div>
      <div>
        <p className="Header__brand">
          tabloid
          <Point />
        </p>
      </div>
    </header>
  );
};

export default Header;
