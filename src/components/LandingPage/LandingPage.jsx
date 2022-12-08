import React from "react";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import { useState } from "react";
import SectionFive from "./SectionFive";

const LandingPage = () => {
  const [data, setData] = useState([]);
  
  return (
    <div style={{ padding: "0 9vw" }}>
      <SectionOne />
      <SectionTwo />
      <SectionThree data={data} />
      <SectionFour data={data} />
      <SectionFive data={data} />
      <SectionSix data={data} />
    </div>
  );
};

export default LandingPage;
