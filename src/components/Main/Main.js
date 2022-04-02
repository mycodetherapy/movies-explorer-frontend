import "./Main.css";
import React from "react";
import Promo from "../Promo/Prromo";
import Techs from "../Techs/Techs";

export default function Main() {
  return (
    <>
      <main className="main">
        <Promo />
        <Techs />
      </main>
    </>
  );
}
