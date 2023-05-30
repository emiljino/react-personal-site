/** @format */

/* Importing React and CSS file for Button component */
import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

// Define possible styles and sizes for the button
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

// Define the Button component
export const Button = ({
  children, // Text inside the button
  type, // Type of button (e.g. "submit", "reset", "button")
  onClick, // Function to be called when button is clicked
  buttonStyle, // Style of the button (e.g. "btn--primary", "btn--outline")
  buttonSize, // Size of the button (e.g. "btn--medium", "btn--large")
}) => {
  // Check if buttonStyle prop is valid, default to first style if not
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // Check if buttonSize prop is valid, default to first size if not
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Render the button element wrapped in a Link component
  return (
    <Link to="/contact" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} // Set class name based on style and size props
        onClick={onClick} // Set onClick function
        type={type} // Set type of button
      >
        {children} {/* Render text inside button */}
      </button>
    </Link>
  );
};
