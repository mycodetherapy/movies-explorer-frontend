import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__wrap">
        <span className="techs__span">7 технологий</span>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        <li className="techs__item"><a className="techs__item-link" href="#">HTML</a></li>
        <li className="techs__item"><a className="techs__item-link" href="#">CSS</a></li>
        <li className="techs__item"><a className="techs__item-link" href="#">JS</a></li>
        <li className="techs__item"><a className="techs__item-link" href="#">React</a></li>
        <li className="techs__item"><a className="techs__item-link" href="#">Git</a></li>
        <li className="techs__item"><a className="techs__item-link" href="#">Express.js</a></li>
        <li className="techs__item"><a className="techs__item-link" href="#">mongoDB</a></li>
      </ul>
    </section>
  );
}
