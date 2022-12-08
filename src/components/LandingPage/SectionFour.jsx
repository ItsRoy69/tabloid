import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Point from "../subComponents/Point";

import "../../styles/sectionfour.css";

const SectionFour = () => {
  return (
    <div className="SectionFour">
      <p className="SectionFour__pOne">WHY US?</p>
      <div className="whyus">
          <div className="SectionFour__whyus">
            <div>
              <p className="whyus__title">
               Delivery under pressure
                <Point />
              </p>              
            </div>
            <div>
                <p className="whyus__desc">
                  <FiArrowUpRight color="#f9d423" />
                  &nbsp;Quality, on-budget and on-time are a given.
                </p>
                
            </div>
            <div></div><div></div>
            <div>
              <p className="whyus__title">
              No lock in
                <Point />
              </p>              
            </div>
            <div>
                <p className="whyus__desc">
                  <FiArrowUpRight color="#f9d423" />
                  &nbsp;Software that’s extensible.
                </p>
                <p className="whyus__desc">
                  <FiArrowUpRight color="#f9d423" />
                  &nbsp;Ongoing support but making your teams self-sufficient.
                </p>
            </div>
            <div></div><div></div>
            <div>
              <p className="whyus__title">
              Flexible ways of working
                <Point />
              </p>              
            </div>
            <div>
                <p className="whyus__desc">
                  <FiArrowUpRight color="#f9d423" />
                  &nbsp;End-to-end product development from problem discovery to product release.
                </p>
                <p className="whyus__desc">
                  <FiArrowUpRight color="#f9d423" />
                  &nbsp;Or we run the team, slotting into your ways of working.
                </p>
                <p className="whyus__desc">
                  <FiArrowUpRight color="#f9d423" />
                  &nbsp;Or our team members join in with your team.
                </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SectionFour;
