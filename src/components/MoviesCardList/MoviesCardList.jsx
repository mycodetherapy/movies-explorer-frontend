import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  const cards = [];
  for (let i = 0; i < 9; i++) {
    cards.push(<MoviesCard key={i} />);
  }
  return (
    <section className="mowies__wrapper">
      <div className="movies">{cards}</div>
      <div className="movies__button-wrapper">
        <button className="movies__button">Ещё</button>
      </div>
    </section>
  );
};

export default MoviesCardList;
