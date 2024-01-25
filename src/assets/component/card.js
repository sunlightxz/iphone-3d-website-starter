import React from 'react';

const Card = ({ id, name, imgSrc, description, onClick, isGrid1x }) => {
  const cardClass = `overflow-hidden flex gcard flex-col relative text-white border border-l-neutral-400 justify-between transition-all duration-500 ease-in-out cursor-pointer bg-gray-700 rounded-xl p-5 ${isGrid1x ? 'grid1x' : ''}`;

  return (
    <div className={cardClass} onClick={() => onClick(id)}>
      <img src={imgSrc} alt={`Card ${id}`} className="mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
