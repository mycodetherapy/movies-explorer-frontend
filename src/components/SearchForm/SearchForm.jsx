import "./SearchForm.css";
import searchIcon from "../../images/SearchForm/searchicon.svg";
import findIcon from "../../images/SearchForm/find.svg";

export default function SearchForm() {
  return (
    <form className="form-search">
      <div className="form-searhc__wrap">
        <button
          className="form-search__button form-search__button_search"
          type="button"
        >
          <img
            className="form-search__icon-search"
            src={searchIcon}
            alt="Поиск"
          />
        </button>
        {/* <img className="form-search__icon-search" src={searchIcon} alt="Поиск"></img> */}
        <input
          className="form-search__input"
          type="search"
          placeholder="Фильм"
        />
        <button
          className="form-search__button form-search__button_find"
          type="button"
        >
          <img className="form-search__icon-find" src={findIcon} alt="Искать" />
        </button>
      </div>
      <div className="form-search__switch-wrap">
        <label className="form-search__switch" for="input-check">
          <input
            className="form-search__input-check"
            type="checkbox"
            id="input-check"
          />
          <span className="form-search__switch-ball"></span>
        </label>
        <span className="form-search__switch-text">Короткометражки</span>
      </div>
    </form>
  );
}
