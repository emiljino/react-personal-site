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
              src="images/SYaiscreenshot.jpg"
              text="Modelled game mechanics and created a playable prototype of the board game Scotland Yard"
              label="ScotLand Yard CW"
              path="/project/1"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Did some cool rendering stuff with OpenGL and C++"
              label="Computer Graphics CW"
              path="/project/2"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-7.jpg"
              text="A page showcasing my past and current projects 3"
              label="Projects 3"
              path="/project/3"
            />
            <CardItem
              src="images/img-6.jpg"
              text="A page showcasing my past and current projects 4"
              label="Projects 4"
              path="/project/4"
            />
            <CardItem
              src="images/img-5.jpg"
              text="A page showcasing my past and current projects 5"
              label="Projects 5"
              path="/project/5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
