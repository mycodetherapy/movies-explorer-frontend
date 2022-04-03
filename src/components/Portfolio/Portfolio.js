import "./Portfolio.css";
import Arrow from "../../images/Portfolio/arrow.png";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            Статичный сайт
          </a>
          <a href="#" className="portfolio__link">
            <img
              className="portfolio__link-icon"
              src={Arrow}
              alt="Стрелка"
            ></img>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            Адаптивный сайт
          </a>
          <a href="#" className="portfolio__link">
            <img
              className="portfolio__link-icon"
              src={Arrow}
              alt="Стрелка"
            ></img>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            Одностраничное приложение
          </a>
          <a href="#" className="portfolio__link">
            <img
              className="portfolio__link-icon"
              src={Arrow}
              alt="Стрелка"
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
}
