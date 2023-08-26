/** @format */

import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  if (props.empty) {
    // If it's an empty card, render it with special styling
    return (
      <li className="cards__item empty">
        <div className="empty-card-content">
          {/* You can customize the content for the empty card */}
        </div>
      </li>
    );
  }
  // Otherwise, render the card with the normal styling
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Project"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
