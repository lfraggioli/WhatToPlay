import React from "react";

const RandomGame = ({ game }) => {
  return (
    <>
      <div className="flex flex-row bg-zinc-800 p-3 my-3 mx-auto justify-center w-[600px]">
        <div className="flex flex-col text-left my-auto px-2 mr-2 w-[400px]">
          <h2 className="underline">You should play</h2>
          <h1 className="text-3xl">{game.name}</h1>
        </div>
        <div className="w-[200px]">
          <img
            className="h-fit rounded-lg"
            src={game.coverUrl}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
};

export default RandomGame;
