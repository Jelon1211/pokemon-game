import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonData from "../../Data/PokemonData";
import { IPokemonData } from "../../Models/PokemonData";
import "./mainmenu.css";

const MainMenu = () => {
  const [isChoosePokemonOpen, setIsChoosePokemonOpen] =
    useState<boolean>(false);
  const [isActivePokemon, setIsActivePokemon] = useState<IPokemonData[]>([]);
  const [chosenPokemon, setChosenPokemon] = useState<IPokemonData>();

  useEffect(() => {
    setIsActivePokemon(PokemonData);
  }, []);

  const handleClickedPokemon = useCallback(
    (id: number) => {
      const indexOfId = isActivePokemon
        .map((x) => Object.values(x)[0])
        .indexOf(id);
      for (let element of isActivePokemon) {
        if (element.id === id) {
          const copyOfChcecked = [...isActivePokemon];
          isActivePokemon[indexOfId].isChosen =
            !isActivePokemon[indexOfId].isChosen;
          setIsActivePokemon(copyOfChcecked);
        }
        if (element.isChosen && element.id !== id) {
          const copyOfChcecked = [...isActivePokemon];
          element.isChosen = false;
          setIsActivePokemon(copyOfChcecked);
        }
      }
    },
    [isActivePokemon]
  );

  useEffect(() => {
    setChosenPokemon(
      isActivePokemon.find((element) => element.isChosen === true)
    );
  }, [chosenPokemon, handleClickedPokemon, isActivePokemon]);

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
                onClick={() => handleClickedPokemon(1)}
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
                onClick={() => handleClickedPokemon(2)}
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
                onClick={() => handleClickedPokemon(3)}
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
              <Link to={`/game/${chosenPokemon?.id}`}>
                <button className="mainmenu-findgame-button-container">
                  {isActivePokemon.every((elment) => elment.isChosen === false)
                    ? "Choose a Pokemon"
                    : `Find Game as ${chosenPokemon?.name}`}
                </button>
              </Link>
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
