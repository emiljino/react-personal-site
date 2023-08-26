/** @format */

import React from "react";
import CardItem from "./CardItem";
import "../Styles/Cards.css";
function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <h1>Projects</h1>
        <p>Take a look at my past and current projects</p>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Website.jpg"
              text="Personal website built using React.js and CSS, to showcase my projects and frontend development skills."
              label="Personal Portfolio"
              path="/project/1"
            />
            <CardItem
              src="images/MarcoPred.jpg"
              text="Room-scale mixed reality PvP unity game. Real-life humans are mapped into the 'Alien' virtual world using Kinect cameras and AR phones while the 'Alien' plays in full Metaquest VR."
              label="Marco Predatoro"
              path="/project/2"
            />
            <CardItem
              src="images/NFLSS.jpg"
              text="Analysed NFL data to predict the success of plays using machine learning techniques and statistical models."
              label="NFL Data Science Project"
              path="/project/3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/CG.jpg"
              text="C++ program to render Cornell Box using various techniques."
              label="C++ Graphics Renderer"
              path="/project/4"
            />
            <CardItem
              src="images/GoL.jpg"
              text="Simulation of John Conway's Game of Life written in GOLang, with a parallelised implementation as well as a distributed implementation using AWS nodes."
              label="Game of Life simulation"
              path="/project/5"
            />
            <CardItem
              src="images/Gromitposter.jpg"
              text="Further developed a system that would allow video connection between two screens placed inside Gromit Sculptures across the city of Bristol."
              label="Gromit 2 "
              path="/project/6"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/SYaiscreenshot.jpg"
              text="Modelled game mechanics and created a playable prototype of the board game Scotland Yard using Java."
              label="ScotLand Yard "
              path="/project/7"
            />
            <CardItem
              src=""
              text=""
              label=""
              path=""
              empty // Add this prop to indicate it's an empty card
            />
            <CardItem
              src=""
              text=""
              label=""
              path=""
              empty // Add this prop to indicate it's an empty card
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
