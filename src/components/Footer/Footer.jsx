import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <secton className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__content">
        <span className="footer__copyright">
          &#169; {`${new Date().getFullYear()} Maksim Ovchinnikov`}
        </span>
        <ul className="footer__links">
          <li className="footer__link-wrap">
            <a href="#" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link-wrap">
            <a href="#" className="footer__link">
              Github
            </a>
          </li>
          <li className="footer__link-wrap">
            <a href="#" className="footer__link">
              Vk
            </a>
          </li>
        </ul>
      </div>
    </secton>
  );
};

export default Footer;
