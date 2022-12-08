import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Point from "../subComponents/Point";

import "../../styles/sectiontwo.css";

const SectionTwo = () => {
  return (
    <div className="SectionTwo">
      <div className="SectionTwo__partOne">
        <p className="partOne__pOne">OUR SERVICES</p>
        <p className="partOne__pTwo">
          High quality software
          <Point />
        </p>
        <ul className="partOne__ul">
            <li className="partOne__li">
              <FiArrowUpRight color="#f9d423" />
              &nbsp;Web & Mobile
            </li>
            <li className="partOne__li">
              <FiArrowUpRight color="#f9d423" />
              &nbsp;Platform & APIs
            </li>
            <li className="partOne__li">
              <FiArrowUpRight color="#f9d423" />
              &nbsp;Cloud Infrastructure
            </li>
            <li className="partOne__li">
              <FiArrowUpRight color="#f9d423" />
              &nbsp;Integrations
            </li>
            <li className="partOne__li">
              <FiArrowUpRight color="#f9d423" />
              &nbsp;AI & Machine Learning
            </li>
        </ul>
        <button className="blackButton">
          LEARN MORE
        </button> 
      </div>
      <div>
        <img
          src="https://images.ctfassets.net/76bjrz8io3om/4gQqiubBAaTDHnLGhcCa46/dfbf5f7255558a65a71520e68ff3c1d3/techwondoeLandingPage.gif"
          alt="gifs"
          className="service__media"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
