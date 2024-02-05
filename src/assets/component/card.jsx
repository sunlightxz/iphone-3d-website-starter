// Import React and any other necessary dependencies
import React from 'react';

const Card = ({ id, name, imgSrc, description, onClick, isGrid1x }) => {
  const cardClass = `cardshadow overflow-hidden flex gcard flex-col relative text-white border border-neutral-500 justify-between transition-all duration-500 ease-in-out cursor-pointer bg-[#252525] rounded-xl p-5 ${isGrid1x ? 'grid1x h-[600px]' : ' h-44'}`;

  return (
    <div className={cardClass}  onClick={() => onClick(id)}>
      <div className="flex flec-row justify-between">
        <h2 className="text-4xl font-light my-2 uppercase">{name}</h2>
        {
          isGrid1x ? 
          <img src="Frame.svg" className='rotate-45' width={24} height={24} alt="" />
          :
          <img src="Frame.svg" width={24} height={24} alt="" />
        }
      </div>
      {
        isGrid1x &&   
        <div className="">
          <div className="mt-5 flex justify-between flex-col">
            <div className="flex flex-col gap-2">
              <img src={imgSrc} width={400} height={200} alt={`Card ${id}`} className="mb-4 w-full h-40 object-cover rounded-md" /> 
              <p className="text-base px-2">{description}</p>
            </div>
          </div>
        <div className="px-2">
          <button className='my-6 glowingButton items-center justify-start border w-fit px-5 py-3 overflow-hidden font-bold rounded-[10px] group/btn'>Contact Us</button>
        </div>
        </div>
      }
    </div>
  );
};

export default Card;
