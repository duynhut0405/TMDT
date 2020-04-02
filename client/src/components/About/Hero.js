import React from "react";
import Image0 from "../../assets/aboutImage/bgAbout.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Backgroup image */}
        <img className="hero-image" src={Image0}></img>

        {/* text */}
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Why Choose Uncle Farm</p>
          <p>
            We Offer Organic Fruits Anh Vegetables Fresh From Our Field To Your
            Home
          </p>
          <p>Visit Our Site For A Complete List Of Exclusive We Are Stocking</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
