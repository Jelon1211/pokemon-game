import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonData } from "../../Models/PokemonData";
import PokemonData from "../../Data/PokemonData";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./gamescreen.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const GameScreen = () => {
  const [testCount, setTestCount] = useState<number>(0);
  const [yourPokemon, setYourPokemon] = useState<IPokemonData>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { gameId } = useParams<string>();

  const handleYourPokemon = useCallback(() => {
    const id = parseInt(String(gameId), 10);
    if (typeof id !== "number") {
      return setIsLoading(true);
    }
    for (let element of PokemonData) {
      if (element.id === id) {
        setYourPokemon(element);
      }
    }
    setIsLoading(false);
  }, [gameId]);

  useEffect(() => {
    (async () => {
      await handleYourPokemon();
    })();
  }, [handleYourPokemon]);

  console.log(yourPokemon);

  if (isLoading)
    return (
      <>
        <Header></Header>
        <div className="gamescreen-container">
          <div className="gamescreen-container-wrapper">
            <div className="gamescreen-container-inner">
              <LoadingScreen />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  return (
    <>
      <Header></Header>
      <div className="gamescreen-container">
        <div className="gamescreen-container-wrapper">
          <div className="gamescreen-container-inner">
            <p> TEST SCREEN</p>
            <button
              className="button-game"
              onClick={() => setTestCount((prevCount) => prevCount + 1)}
            >
              Test button - {testCount}
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default GameScreen;
