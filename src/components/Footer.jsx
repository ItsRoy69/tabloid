import React from "react";
import Point from "./subComponents/Point";
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="Footer__brand">
        tabloid
        <Point />
      </p>
      <div className="Footer__info">
        <div className="Info__One">
          <p>ABOUT US</p>
          <p>CASE STUDIES</p>
          <p>BLOG</p>
          <p>CONTACT US</p>
        </div>
        <div className="Info__Two">
          <p>LINKEDIN</p>
          <p>HELLO@tabloid.COM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
