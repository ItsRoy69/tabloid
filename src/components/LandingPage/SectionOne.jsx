import React from "react";
import Point from "../subComponents/Point";

import "../../styles/sectionone.css";

const SectionOne = () => {
  return (
    <div className="SectionOne">
      <div>
        <p className="SectionOne__pOne">
          WE{`'`}RE EXPERIENCED SOFTWARE PRODUCT BUILDERS
        </p>
        <p className="SectionOne__pTwo">
          Kickass software
          <br />
          development
          <Point />
        </p>
        <div className="SectionOne__button">
          <button className="orangeButton customStyles">
            ENQUIRE NOW
          </button>
          <button className="blackButton">
            VIEW CASE STUDIES
          </button>          
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
