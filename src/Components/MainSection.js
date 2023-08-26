/** @format */

import React from "react";
import "../Styles/MainSection.css"; // Importing the CSS file for this component
import "../App.css"; // Importing the global CSS file for the entire app

function MainSection() {
  return (
    <div className="main-container">
      <h1>WELCOME</h1> {/* A title for the main section */}
      <div className="main-text-container">
        {/* A container for the main section */}
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
        {/* A video element with a specified source and attributes */}
        <p className="name">Hello, I'm Emil</p>{" "}
        {/* A subtitle for the main section */}
        <p className="intro">
          I'm a software engineer in my 4th year at the University of Bristol,
          studying computer science. With a strong foundation in Python, Java
          and C++, I've completed a variety of projects, highlighting my
          technical skills, problem-solving abilities, and collaboration
          aptitude. Explore my portfolio to learn more about me!
        </p>
      </div>
    </div>
  );
}

export default MainSection; // Exporting the component for use in other files
