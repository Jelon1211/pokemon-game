import { useState } from "react";
import "./mainmenu.css";

const MainMenu = () => {
  const [isChoosePokemonOpen, setIsChoosePokemonOpen] =
    useState<boolean>(false);

  if (isChoosePokemonOpen) {
    return (
      <>
        {" "}
        <div className="mainmenu-container">
          <div className="mainmenu-container-wrapper">
            <div>
              <img
                className="mainmenu-pokemon-image"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png"
                alt="chubby pikachu"
              />
              <p>Pikatchu</p>
            </div>
            <div>
              <img
                className="https://i.pinimg.com/originals/82/42/25/824225f61b9e0efb7e7405f8c9579f6c.png"
                alt="angry Bulbasaur"
              />
              <p>Bulbasaur</p>
            </div>
            <div>
              <img
                className="mainmenu-pokemon-image"
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png"
                alt="proud charizard"
              />
              <p>Charizard</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="mainmenu-container">
      <div className="mainmenu-container-wrapper">
        <button
          className="mainmenu-button"
          onClick={() => setIsChoosePokemonOpen(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
