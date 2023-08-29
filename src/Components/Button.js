/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Button.css";
const STYLES = ["btn--primary", "btn--outline", "btn--text"];
const SIZES = ["btn--medium", "btn--medium2", "btn--large"];

// Define the Button component
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
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
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
