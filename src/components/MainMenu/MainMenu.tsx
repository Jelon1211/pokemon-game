import { useEffect, useState } from "react";
import PokemonData from "../../Data/PokemonData";
import "./mainmenu.css";

interface IPokemonData {
  id: number;
  name: string;
  isChosen: boolean;
}

const MainMenu = () => {
  const [isChoosePokemonOpen, setIsChoosePokemonOpen] =
    useState<boolean>(false);

  const [isActivePokemon, setIsActivePokemon] = useState<IPokemonData[]>([]);

  useEffect(() => {
    setIsActivePokemon(PokemonData);
  }, []);

  const handleClickedPokemon = () => {};

  if (isChoosePokemonOpen) {
    return (
      <>
        {" "}
        <div className="mainmenu-container">
          <div className="mainmenu-container-wrapper">
            <div className="mainmenu-container-pokemons">
              <div
                className={`mainmenu-pokemon-container
                  ${
                    isActivePokemon[0].isChosen
                      ? " mainmenu-chosen-pokemon"
                      : ""
                  }
                `}
                onClick={handleClickedPokemon}
              >
                <img
                  className="mainmenu-pokemon-image"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png"
                  alt="chubby pikachu"
                />
                <p className="mainmenu-pokemon-name">Pikatchu</p>
              </div>
              <div
                className={`mainmenu-pokemon-container
                  ${
                    isActivePokemon[1].isChosen
                      ? " mainmenu-chosen-pokemon"
                      : ""
                  }
                `}
                onClick={handleClickedPokemon}
              >
                <img
                  className="mainmenu-pokemon-image"
                  src="https://www.pngkey.com/png/full/99-992091_adorable-bulbasaur-and-chibi-image-bulbasaur-chibi.png"
                  alt="cute Bulbasaur"
                />
                <p className="mainmenu-pokemon-name">Bulbasaur</p>
              </div>
              <div
                className={`mainmenu-pokemon-container
                  ${
                    isActivePokemon[2].isChosen
                      ? " mainmenu-chosen-pokemon"
                      : ""
                  }
                `}
                onClick={handleClickedPokemon}
              >
                <img
                  className="mainmenu-pokemon-image"
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png"
                  alt="proud charizard"
                />
                <p className="mainmenu-pokemon-name">Charizard</p>
              </div>
            </div>
            <div>
              <button className="mainmenu-findgame-button-container">
                Find Game
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="mainmenu-container">
      <div className="mainmenu-container-wrapper-home">
        <button
          className="mainmenu-start-button"
          onClick={() => setIsChoosePokemonOpen(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
