import React, { useEffect, useState } from "react";
import { games } from "../lib/data";
const GamePicker = () => {
  const [game, setGame] = useState("");
  const [gamesList, setGamesList] = useState(games);

  useEffect(() => {
    setGamesList(games);
  }, []);

  function getRandomGame() {
    const randomIndex = Math.floor(Math.random() * gamesList.length);
    setGame(gamesList[randomIndex]);
  }

  return (
    <>
      <div className="flex flex-col bg-zinc-800 text-slate-100 font-semibold h-80 mx-auto px-28 py-2 rounded-lg shadow-sm my-4 overflow-auto">
        <ul>
          {gamesList.map((game) => (
            <li key={game}>{game}</li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="bg-yellow-500 text-slate-800 font-semibold h-10 mx-auto px-28 py-2 rounded-lg shadow-sm my-4"
          onClick={getRandomGame}
        >
          Decide for me
        </button>
        {game !== "" && (
          <h2 className="text-2xl text-center">You should play: {game}</h2>
        )}
      </div>
    </>
  );
};

export default GamePicker;
