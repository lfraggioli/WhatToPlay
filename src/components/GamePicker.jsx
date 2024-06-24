import React, { useEffect, useState } from "react";
import { juegos } from "../lib/data";
import GameCard from "./GameCard";
import RandomGame from "./RandomGame";
const GamePicker = () => {
  const [game, setGame] = useState("");
  const [gamesList, setGamesList] = useState(juegos);

  useEffect(() => {
    setGamesList(juegos);
  }, []);

  function getRandomGame() {
    const randomIndex = Math.floor(Math.random() * gamesList.length);
    setGame(gamesList[randomIndex]);
  }

  return (
    <>
      <div className="flex flex-row bg-zinc-800 text-slate-100 font-semibold py-2 rounded-lg shadow-sm my-4">
        <GameCard />
      </div>
      <div>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 transition-colors hover:text-slate-200 duration-300 text-slate-800 font-semibold h-10 mx-auto px-28 py-2 rounded-lg shadow-sm my-4"
          onClick={getRandomGame}
        >
          Decide for me
        </button>
        {game !== "" && <RandomGame game={game} />}
      </div>
    </>
  );
};

export default GamePicker;
