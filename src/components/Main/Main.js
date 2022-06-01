import "./Main.css";
import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Promo from "../Promo/Prromo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

import SearchForm from "../SearchForm/SearchForm";

export default function Main() {
  return (
    <>
    <Header />
      <main className="main">
        <Title />

        <SearchForm />

        <Promo />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
    </>
  );
}
