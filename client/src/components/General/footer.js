import React from "react";

const footer = () => {
  return (
    <div className="container">
      {/* footer logo */}
      <div className="footer-logo">
        <img
          src="/UNCLE FARM/2760326405_b53faeac-cb65-48b7-9e2e-00bfa0806a32.png"
          alt="logo"
          className="footer-logo__image"
        />
        <p className="footer-logo__text">copyright@2020</p>
      </div>

      {/* footer nav */}
      <div className="footer-nav">
        <ul className="footer-nav__menu">
          <li>
            <a href="#"></a>HOME
          </li>
          <li>
            <a href="#"></a>ABOUT
          </li>
          <li>
            <a href="#"></a>CONTACT
          </li>
        </ul>
      </div>

      {/* <!-- footer contact --> */}
      <div className="footer-contact">
        <div className="footer-contact__info">
          <i className="fas fa-map-marked-alt"></i>
          <p>TP HCM. VIETNAM</p>
        </div>
        <div className="footer-contact__info">
          <i className="fas fa-envelope"></i>
          <p>contact@gmail.com</p>
        </div>
        <div className="footer-contact__info">
          <i className="fas fa-phone-alt"></i>
          <p>+09. 123456789</p>
        </div>
      </div>

      {/* <!-- footer about --> */}
      <div className="footer-about">
        <p>ABOUT THE COMPANY</p>
        <p>UncleFarm is a company for buying food and vegetable</p>
        <ul className="footer-about__icon">
          <li>
            <i className="fab fa-facebook-square"></i>
          </li>
          <li>
            <i className="fab fa-instagram-square"></i>
          </li>
          <li>
            <i className="fab fa-twitter-square"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
