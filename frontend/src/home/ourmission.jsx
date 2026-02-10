import React from "react";
import OurMissionLogo from "../assets/ourmission-logo.png";

const OurMission = () => {
  return (
    <>
      <div className="ourmission-header">
        <div className="ourmission-container">
          <img className="ourmission-img" src={OurMissionLogo} alt="" />
        </div>
        <div className="ourmission-header2">
          <h1 className="ourmission-head">Our Mission</h1>
          <p className="ourmission-para">
            To provide clients with the greatest outcomes, Digital Marketing
            Severus consistently chooses the newest tools and cutting-edge
            strategies. However, our skilled web developers and digital
            marketers carefully examine the specifications and create an outline
            to show clients any adjustments that are needed on their end. Our
            goal as the top digital marketing agency in India is to help our
            clients succeed in their companies. We guarantee total openness
            throughout the project and open discussion to serve value by saving
            our clients the most money and time possible.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurMission;
