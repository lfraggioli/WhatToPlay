import React from "react";
import { Carousel } from "primereact/carousel";
import { juegos } from "../lib/data";

const GameCard = () => {
  // The cardTemplate function should return the JSX, added return statement

  const cardTemplate = (juegos) => (
    <div className="flex w-[170px] px-1" key={juegos.name}>
      <img
        className="h-fit rounded-md"
        src={juegos.coverUrl}
        alt={juegos.name}
      />
    </div>
  );

  return (
    <>
      <div className="flex flex-row">
        <Carousel
          className="w-[800px] p-2"
          value={juegos}
          numVisible={4}
          numScroll={3}
          itemTemplate={cardTemplate}
          autoplayInterval={3000}
        />
      </div>
    </>
  );
};

export default GameCard;
