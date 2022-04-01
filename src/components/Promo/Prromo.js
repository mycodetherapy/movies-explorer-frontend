import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <h2 className="promo__title">О проекте</h2>

      <ul className="promo__wrap">
        <li className="promo__column">
          <h3 className="promo__column-title">
            Дипломный проект включает в себя 5 этапов
          </h3>
          <p className="promo__column-text">
            Составление плана, работу над бэкендом, верстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="promo__column">
          <h3 className="promo__column-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="promo__column-text">
            У каждого этапа был мягкий и жесткий дедлайн, который нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <ul className="promo__wrap">
        <li className="promo__column promo__column_modif">
          <h3 className="promo__column-title promo__column-title_modif promo__column-title_green">
            1 неделя
          </h3>
          <p className="promo__column-text promo__column-text_modif">
            Back-end
          </p>
        </li>
        <li className="promo__column promo__column_modif">
          <h3 className="promo__column-title promo__column-title_modif promo__column-title_gray">
            4 недели
          </h3>
          <p className="promo__column-text promo__column-text_modif">
            Front-end
          </p>
        </li>
      </ul>

      {/* <ul className="promo__table-wrap">
                    <li className="promo__cell promo__cell_green">1 неделя</li>
                    <li className="promo__cell promo__cell_gray">4 недели</li>
                    <li className="promo__cell">Back-end</li>
                    <li className="promo__cell">Front-end</li>
                </ul> */}
    </section>
  );
}
