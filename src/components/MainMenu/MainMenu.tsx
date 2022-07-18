import { useState } from "react";
import "./mainmenu.css";

const MainMenu = () => {
  const [isChoosePokemonOpen, setIsChoosePokemonOpen] =
    useState<boolean>(false);

  if (isChoosePokemonOpen) {
    return <>123</>;
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
