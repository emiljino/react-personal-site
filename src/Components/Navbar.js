/** @format */

// Importing necessary dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { Button } from "./Button";

// Defining the Navbar component
function Navbar() {
  // Setting up state variables for click and button
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Function to close the mobile menu
  const closeMobileMenu = () => setClick(false);
  // Function to handle the click event on the menu icon
  const handleClick = () => setClick(!click);

  // Function to show or hide the contact button based on screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  // Adding an event listener to the window to call the showButton function on resize
  window.addEventListener("resize", showButton);

  // Returning the JSX for the Navbar component
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Link to the home page */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            emil.jino <img src="../Images/CodeIcon.svg" alt="Code Icon" />
          </Link>
          {/* Menu icon for mobile devices */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* Navigation menu */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* Link to the home page */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* Link to the projects page */}
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            {/* Link to the CV page */}
            <li className="nav-item">
              <a
                href={process.env.PUBLIC_URL + "/Software_Engineer_CV.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CV
              </a>
            </li>
            {/* Link to the contact page */}
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Contact button */}
          {button && <Button buttonStyle="btn--outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
}

// Exporting the Navbar component
export default Navbar;
