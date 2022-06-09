import "./Main.css";
import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Promo from "../Promo/Prromo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
      <MoviesCardList />

      <Header />
      <main className="main">
        <Title />

        <SearchForm />
        <MoviesCard />

        <Promo />
        <Techs />
        <AboutMe />
        <Portfolio />

        <Footer />
      </main>
    </>
  );
}
