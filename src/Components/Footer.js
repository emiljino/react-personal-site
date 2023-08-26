/** @format */

import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              emil.jino <img src="../Images/CodeIcon.svg" alt="Code Icon" />
            </Link>
          </div>
          <small className="website-rights">
            Copyright © 2023 Emil Jino. All rights reserved
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link-email"
              to="mailto:emil_jino@hotmail.com"
              target="_blank"
              aria-label="Email"
            >
              <img src="../Images/email1.svg" alt="Email Icon" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="https://www.linkedin.com/in/emil-jino-dev"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link github"
              to="https://github.com/emiljino"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
