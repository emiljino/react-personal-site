/** @format */

import React from "react";
import "../Styles/MainSection.css";
import "../App.css";

function MainSection() {
  return (
    <div className="main-container">
      <h1>WELCOME</h1>
      <div className="main-text-container">
        <p className="name">Hello, I'm Emil</p>{" "}
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

export default MainSection;
