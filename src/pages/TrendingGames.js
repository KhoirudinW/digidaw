// src/pages/TrendingGames.js
import React from 'react';
import GameSection from '../components/GameSection';
import { getTrendingGames } from '../data/GamesData';

const TrendingGames = () => {
  const trendingGames = getTrendingGames();

  return (
    <div>
      <GameSection 
        title="Trending Game" 
        games={trendingGames} 
        seeAllLink="/trending"
      />
    </div>
  );
};

export default TrendingGames;
