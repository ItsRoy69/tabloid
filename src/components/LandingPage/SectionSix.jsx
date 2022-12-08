import React from "react";
import { Input, TextArea } from "../subComponents/Input";
import Point from "../subComponents/Point";

import "../../styles/sectionsix.css";

const SectionSix = () => {
  return (
    <div className="SecSix">
      <div className="SectionSix">
        <p className="SectionSix__pOne">contact</p>
        <p className="SectionSix__pTwo">
          Let{`'`}s start
          <br />
          your project
          <Point />
        </p>
      </div>
      <div className="form">
        <form className="form__section">
          <div className="form__input">
            <Input label="NAME" type="text" />
            <Input label="EMAIL ADDRESS" type="email" />
            <TextArea label="MESSAGE" rows="3" cols="32" />
          </div>
          <div>
              <p className="form__check">WHAT ARE YOU LOOKING FOR</p>
              <Input label="Web Design" type="checkbox" />
              <Input label="Web App" type="checkbox" />
              <Input label="Mobile App" type="checkbox" />
              <Input label="API" type="checkbox" />
              <Input label="Cloud Infrastructure" type="checkbox" />
              <Input label="AI" type="checkbox" />
              <Input label="Software Development" type="checkbox" />
              <Input label="Other" type="checkbox" />
              <button className="orangeButton customStyles">
                ENQUIRE NOW
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default SectionSix;
