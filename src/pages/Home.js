// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import GameSection from '../components/GameSection';
import ArticleSection from '../components/ArticleSection';
import { allGames } from '../data/GamesData';
import { articles } from '../data/ArticleData';
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <div>
      <Banner />
      
      <div className="flex justify-between px-40 my-4 items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Trending Game</h2>
        <Link to="/trending">
          <button 
            className="px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg transition duration-200"
        >
            See All
          </button>
        </Link>
      </div>
      <GameSection title="Trending Game" games={allGames} />

      <div className="flex justify-between px-40 my-4 items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Recommended Game</h2>
        <Link to="/recommended">
          <button
            className="px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg transition duration-200"
        >
            See All
          </button>
        </Link>
      </div>
      <GameSection title="Recommended Game" games={allGames} /> 

      <div className="flex justify-between px-40 my-4 items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Artikel Game</h2>
        <Link to="/articles">
          <button className="px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg transition duration-200">
            See All
          </button>
        </Link>
      </div>
      <ArticleSection articles={articles} />
    </div>
  );
};

export default Home;
