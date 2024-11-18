// src/pages/RecommendedGames.js
import React from 'react';
import GameSection from '../components/GameSection';
import { getRecommendedGames } from '../data/GamesData';

const RecommendedGames = () => {
  const recommendedGames = getRecommendedGames();

  return (
    <div>
      <GameSection 
        title="Recommended Game" 
        games={recommendedGames} 
        seeAllLink="/recommended"
      />
    </div>
  );
};

export default RecommendedGames;
