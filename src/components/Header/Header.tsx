import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  // w

  return (
    <nav className="nav-bar">
      <div className="nav-bar-wrapper">
        <NavLink to={""} className="nav-bar-link">
          <img
            className="nav-bar-logo"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png"
          />
        </NavLink>
        <div className="nav-bar-text">
          <h1 className="nav-title">Pokemon Super</h1>
          <span className="nav-info">
            <p className="nav-inf-text">About</p>
            <p className="nav-inf-text">Info</p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
