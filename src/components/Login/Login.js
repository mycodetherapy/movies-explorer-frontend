import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../images/Header/logo";
// import { Link, Route } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Logo />
      <form
        name={"login_form"}
        className="login__form"
        //onSubmit={onSubmit}
        noValidate
      >
        <fieldset className="login__input-container">
          <h2 className="login__title">{"Рады видеть!"}</h2>
          <label className="login__label" htmlFor="useremail">
            <span className="login__input_placeholder">Email</span>
            <input
              className="login__input"
              id="user_email"
              name="user_email"
              type="text"
              //placeholder="Email"
              //onChange={onEmail}
              //value={email || ""}
              value={"max@ya.ru"}
            ></input>
          </label>
          <label className="login__label" htmlFor="password">
            <span className="login__input_placeholder">Пароль</span>
            <input
              className="login__input"
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
        <button className="login__button" type="submit">
          {"Войти"}
        </button>

        <span>
          {"Еще не зарегестрированы?"}
          {/* <Link to="sign-in" className="login__link-bottom">
            {"Зарегестрироваться"}
          </Link> */}
        </span>
      </form>
    </div>
  );
};

export default Login;
