import React from "react";
import Point from "../subComponents/Point";
import TestimonialSwiper from "../subComponents/TestimonialSwiper";

import "../../styles/sectionfive.css";

const SectionFive = ({ data }) => {
  return (
    <div className="SectionFive">
      <p className="SectionFive__pOne">TESTIMONIALS</p>
      <p className="SectionFive__pTwo">
        What they{`'`}re saying about us
        <Point />
      </p>
      <div className="SectionFive__testimonial">
        <TestimonialSwiper />
      </div>
    </div>
  );
};

export default SectionFive;
