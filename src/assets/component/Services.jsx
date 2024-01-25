import React, { useState } from 'react';
import Card from './card'; // Make sure the path is correct
import data from '../data/services.json';

const Services = () => {
  const [cards, setCards] = useState(data);

  const handleCardClick = (clickedId) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card, index) => {
        if (card.id === clickedId) {
          return { ...prevCards[0], isGrid1x: index === 0 };
        }
        return { ...card, isGrid1x: index === 0 ? false : card.isGrid1x };
      });
      return updatedCards;
    });
  };

  return (
    <section id="service" className="h-full relative flex flex-col justify-center lg:justify-start items-center w-full mt-20">
      <div className="grid apgrid gap-5 mx-auto h-[600px]">
        {cards.map((card) => (
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
    </section>
  );
};

export default Services;
