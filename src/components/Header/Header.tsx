import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-wrapper">
        <div className="nav-link-wrapper">
          <a href="/*" className="nav-bar-link">
            <img
              className="nav-bar-logo"
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png"
              alt="charizard icon"
            />
          </a>
        </div>
        <div className="nav-bar-text">
          <h1 className="nav-title">Pokemon Super</h1>
          <span className="nav-info">
            <a href="/*">
              <p className="nav-inf-text">Home</p>
            </a>
            <Link to={"/about"}>
              <p className="nav-inf-text">About</p>
            </Link>
            <Link to={"/info"}>
              <p className="nav-inf-text">Info</p>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
