import React from "react";
import "./Footer.scss";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import ContentWrapper from "./ContentWrapper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">Empowering individuals through creativity since 2023. Explore our story and join the movement.
        </div>
        <div className="infoText">Thanks for visiting! Connect with us on social media, explore our blog, or contact us directly. We're always happy to hear from you.
        </div>
        
        <div className="socialIcons">
          <span className="icon">
          <Link to = "https://github.com/rakshit2812"><FaGithub /></Link>
          </span>
          <span className="icon">
          <Link to = "https://www.instagram.com/rakshitgupta2812/"><FaInstagram /></Link>
          </span>
          <span className="icon">
          <Link to = "https://twitter.com/Rakshit51225079"><FaTwitter /></Link>
          </span>
          <span className="icon">
          <Link to = "https://www.linkedin.com/in/rakshitgupta0/"><FaLinkedin /></Link>
          {/* <FaLinkedin /> */}
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
