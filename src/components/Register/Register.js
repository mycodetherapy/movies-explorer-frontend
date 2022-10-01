import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../../images/Header/logo";
// import { Link, Route } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <Logo />
      <form
        name={"register_form"}
        className="register__form"
        //onSubmit={onSubmit}
        noValidate
      >
        <fieldset className="register__input-container">
          <h2 className="register__title">{"Добро пожаловать"}</h2>
          <label className="register__label" htmlFor="username">
            <span className="register__input_placeholder">Имя</span>
            <input
              className="register__input"
              id="username"
              name="username"
              type="text"
              //placeholder="Имя"
              //onChange={onEmail}
              // value={email || ""}
              value={"Максим"}
            ></input>
          </label>
          <label className="register__label" htmlFor="username">
            <span className="register__input_placeholder">Email</span>
            <input
              className="register__input"
              id="user_email"
              name="user_email"
              type="text"
              //placeholder="Email"
              //onChange={onEmail}
              //value={email || ""}
              value={"max@ya.ru"}
            ></input>
          </label>
          <label className="register__label" htmlFor="password">
            <span className="register__input_placeholder">Пароль</span>
            <input
              className="register__input"
              id="password"
              name="password"
              type="password"
              // placeholder="Пароль"
              //onChange={onPassword}
              //value={password}
              value={"12345"}
            ></input>
          </label>
        </fieldset>
        <button className="register__button" type="submit">
          {"Зарегистрироваться"}
        </button>

        <span>{"Уже зарегестрированы?"}</span>
        {/* <Link to="sign-in" className="register__link-bottom">
          {"Войти"}
        </Link> */}
      </form>
    </div>
  );
};

export default Register;
