import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Logo from "../../images/Header/logo";
// import { Link, Route } from "react-router-dom";

const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile__title">{"Привет, Максим!"}</h2>
      <div className="profile__container">
        <div className="profile__info">
          <p className="profile__info-item">{"Имя"}</p>
          <p className="profile__info-item">{"Максим"}</p>
        </div>
        <div className="profile__info">
          <p className="profile__info-item">{"E-mail"}</p>
          <p className="profile__info-item">{"max@ya.ru"}</p>
        </div>
      </div>

      <div className="profile__link profile__link_change" type="submit">
        {"Редактировать"}
      </div>
      <div className="profile__link profile__link_exit">
        {"Выйти из аккаунта"}
      </div>
    </section>
  );
};

export default Profile;
