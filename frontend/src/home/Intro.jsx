import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="parent">
        <div className="child">
          <h1 className="intro-heading">
            We Help Brands <span>Grow Online</span>
          </h1>
          <p className="intro-para">
            Severus Agency is a performance-driven digital marketing agency
            helping businesses scale through SEO, paid ads, and high-converting
            websites.
          </p>

          <Link className="aboutus-link" to="/about">
            Learn More
          </Link>
        </div>
        <div className="child1">
          <img
            className="intro-img"
            src={Logo}
            alt="Digital Marketing Agency"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
