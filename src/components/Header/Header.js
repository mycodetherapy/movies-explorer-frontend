import "./Header.css";
// import Logo from "../../images/Header/logo.png";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Navigation />
      {/* <img className="header__logo" src={Logo} alt="Логотип"></img> */}
    </header>
  );
}
