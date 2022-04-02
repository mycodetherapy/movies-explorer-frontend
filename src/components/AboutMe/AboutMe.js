import "./AboutMe.css";
import photo from "../../images/AboutMe/ava.png";

export default function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__wrap">
        <article className="aboutMe__info">
          <span className="aboutMe__name">Максим</span>
          <p className="aboutMe__status">Web-разработчик, 38 лет</p>
          <p className="aboutMe__desciption">
            Еще до прихода в Яндекс Практикум открыл для себя образовательную
            платформу Stepik, где проходил и прохожу такие курсы как:
            «JavaScript для начинающих», «Основы HTML и CSS», «Веб-разработка
            для начинающих: HTML и CSS», «Основы программирования (С#)»,
            «Введение в Data Science и машинное обучение», «Аналитик данных».
            Помимо программирования увлекаюсь туризмом по дикой природе и
            сплавами по малым рекам. Также меня беспокоят экологические
            проблемы, поэтому я стараюсь поддерживать раздельный сбор
            пластиковых отходов.
          </p>
          <ul className="aboutMe__social">
            <li className="aboutMe__social-item">
              <a href="#" className="aboutMe__social-item-link">Github</a>
            </li>
            <li className="aboutMe__social-item">
              <a href="#" className="aboutMe__social-item-link">vk</a>
            </li>
          </ul>
        </article>
        <img className="aboutMe__photo" src={photo} alt="Фото"></img>
      </div>
    </section>
  );
}
