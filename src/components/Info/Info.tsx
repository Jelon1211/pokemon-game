import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./info.css";

const Info = () => {
  return (
    <>
      <Header></Header>
      <div className="info-container">
        <div className="info-container-wrapper">
          <div className="info-container-inner">
            <h3 className="info-heading">Pokemon Super</h3>
            <p className="info-text">
              This is multiplayer Pokemon game. You can choose a pokemon and
              fight other players. It is dead simple but fun game. Abilities are
              based on the original Pokemon API {`:)`}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Info;
