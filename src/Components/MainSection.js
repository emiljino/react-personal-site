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
          I'm a Software Consultant specialising in Atlassian products. With a strong foundation in Python, Java, and C++, 
          I continue to explore my passion for programming and machine learning. 
          My journey from studying computer science at the University of Bristol to working 
          in the tech industry showcases my technical expertise, problem-solving abilities, 
          and collaborative skills. Explore my portfolio to learn more about me!
        </p>
      </div>
    </div>
  );
}

export default MainSection;
