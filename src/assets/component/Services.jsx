import React, { useState } from "react";
import Card from "./card"; // Make sure the path is correct
import { dataServices } from "../data/services";

const Services = () => {
  const [cards, setCards] = useState(
    dataServices.map((card, index) => ({ ...card, isGrid1x: index === 0 }))
  );

  const handleCardClick = (clickedId) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card) => {
        if (card.id === clickedId) {
          return { ...card, isGrid1x: true };
        }
        return { ...card, isGrid1x: false };
      });
      return updatedCards;
    });
  };
  return (
    <section
      id="service"
      className="h-full relative flex flex-col justify-center lg:justify-start items-center w-full mt-10"
    >

      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-[76px] font-cairo font-semibold mb-4 uppercase">
          Services
        </h1>
        <p className="flex flex-col items-center justify-center text-xl font-light text-gray-400 ">
          <span>Lorem ipsum dolor sit amet.</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
        </p>
      </div>
      
      <div className="my-16 w-[80%]">
        <div className="grid apgrid gap-5 mx-auto">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              imgSrc={card.imgsrc}
              description={card.description}
              onClick={handleCardClick}
              isGrid1x={card.isGrid1x}
            />
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default Services;
