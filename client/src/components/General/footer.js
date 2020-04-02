import React from "react";
import Image from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container">
      {/* footer logo */}
      <div className="footer-logo">
        <img src={Image} alt="logo" className="footer-logo__image" />
        <p className="footer-logo__text">copyright@2020</p>
      </div>

      {/* footer nav */}
      <nav className="footer-nav">
        <ul className="footer-nav__menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Products">
            <li>Our product</li>
          </Link>
          <Link to="/Policy">
            <li>Policy</li>
          </Link>
          <Link to="/About">
            <li>About us</li>
          </Link>
        </ul>
      </nav>

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
            <FontAwesomeIcon icon={faFacebookSquare} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
