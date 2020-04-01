import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Backgroup image */}
        <img
          className="hero-image"
          src="/client/src/assets/aboutImage/photo-1461354464878-ad92f492a5a0.jpeg"
        ></img>

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
