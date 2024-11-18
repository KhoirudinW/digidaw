// src/components/GameSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameSection = ({ games}) => {
  const navigate = useNavigate();

  const handleGameClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  return (
    <section className="mt-8 w-[80%] mx-auto pb-4">
      <div className="grid grid-cols-8 grid-rows-2 gap-4 mt-4">
        {games.map((game, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg p-4 w-[170px] h-[250px] cursor-pointer transform hover:scale-105 transition duration-200" 
            onClick={() => handleGameClick(game.id)}
          >
            <div className="relative">
              <img 
                src={game.image} 
                alt={game.name} 
                className="h-[190px] w-full object-cover rounded-md" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition duration-200 rounded-md flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 transition duration-200">
                  View Details
                </span>
              </div>
            </div>
            <span className="block mt-2 text-center text-yellow-400 font-bold">{game.rating}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameSection;
