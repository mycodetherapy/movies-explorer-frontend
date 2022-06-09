import React from "react";
import "./MoviesCard.css";
import image from "../../images/benksi_1.jpg";
const MoviesCard = () => {
  return (
    <article className="card">
      <div className="card__heading">
        <h2 className="card__heading-title">В погоне за Бенкси</h2>
        <span className="card__heading-duration">27 минут</span>
      </div>
      <a className="card__image-link" href="#">
        <img src={image} className="card__image" alt="Банер" />
      </a>
      <button className="card__button">Сохранить</button>
    </article>
  );
};

export default MoviesCard;
