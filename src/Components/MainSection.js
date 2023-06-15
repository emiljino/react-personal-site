/** @format */

import React from "react";
import { Button } from "./Button"; // Importing the Button component from a separate file
import "./MainSection.css"; // Importing the CSS file for this component
import "../App.css"; // Importing the global CSS file for the entire app

function MainSection() {
  return (
    <div className="main-container">
      {/* A container for the main section */}
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      {/* A video element with a specified source and attributes */}
      <h1>WELCOME</h1> {/* A title for the main section */}
      <p>Hello, I'm Emil</p> {/* A subtitle for the main section */}
      <div className="main-btns">
        {/* A container for the buttons */}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED {/* A button with specified props */}
        </Button>
      </div>
    </div>
  );
}

export default MainSection; // Exporting the component for use in other files
