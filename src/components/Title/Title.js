import "./Title.css";
import Logo from "../../images/Title/title-logo.png"

export default function Title() {
  return (
    <section className="title">
      <h1 className="title__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="title__logo" src={Logo}></img>
    </section>
  );
}
