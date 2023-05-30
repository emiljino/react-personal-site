/** @format */

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Take a look at my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="A page showcasing my past and current projects"
              label="Projects"
              path="/projects"
            />
            <CardItem
              src="images/img-8.jpg"
              text="A page showcasing my past and current projects 2"
              label="Projects 2"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-7.jpg"
              text="A page showcasing my past and current projects 3"
              label="Projects 3"
              path="/projects"
            />
            <CardItem
              src="images/img-6.jpg"
              text="A page showcasing my past and current projects 4"
              label="Projects 4"
              path="/projects"
            />
            <CardItem
              src="images/img-5.jpg"
              text="A page showcasing my past and current projects 5"
              label="Projects 5"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
