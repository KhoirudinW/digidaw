// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchGames } from '../data/GamesData';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const { cartItems } = useCart();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      const results = searchGames(query);
      setSearchResults(results);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleGameSelect = (gameId) => {
    setSearchQuery('');
    setShowDropdown(false);
    navigate(`/game/${gameId}`);
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/articles':
        return 'Artikel Game';
      case '/trending':
        return 'Trending Games';
      case '/recommended':
        return 'Recommended Games';
      case '/community':
        return 'Community';
      default:
        return null;
    }
  };

  const isActivePath = (path) => {
    if (path === '/home' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <nav className="flex flex-col bg-gray-900 p-4">
      <div className="flex items-center justify-around mb-4">
        <div className="flex items-center"> 
          <div className="text-white text-lg font-bold mr-4">
            DIGIDAW
          </div>
          <div className="relative">
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 rounded-full bg-navy-900 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Search game..."
            />
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute mt-2 w-full bg-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                {searchResults.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => handleGameSelect(game.id)}
                    className="p-2 hover:bg-gray-700 cursor-pointer text-white"
                  >
                    <div className="flex items-center">
                      <img src={game.thumbnail} alt={game.name} className="w-10 h-10 rounded mr-2" />
                      <span>{game.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex space-x-4">
          <Link 
            to="/home" 
            className={`text-white hover:text-gray-300 border-b-2 transition-colors duration-200 ${
              isActivePath('/home') ? 'border-white' : 'border-transparent hover:border-white'
            }`}
          >
            Home
          </Link>
          {/* <Link 
            to="/trending" 
            className={`text-white hover:text-gray-300 border-b-2 transition-colors duration-200 ${
              isActivePath('/trending') ? 'border-white' : 'border-transparent hover:border-white'
            }`}
          >
            Trending
          </Link>
          <Link 
            to="/recommended" 
            className={`text-white hover:text-gray-300 border-b-2 transition-colors duration-200 ${
              isActivePath('/recommended') ? 'border-white' : 'border-transparent hover:border-white'
            }`}
          >
            Recommended
          </Link> */}
          <Link 
            to="/articles" 
            className={`text-white hover:text-gray-300 border-b-2 transition-colors duration-200 ${
              isActivePath('/articles') ? 'border-white' : 'border-transparent hover:border-white'
            }`}
          >
            Articles
          </Link>
          <Link 
            to="/community" 
            className={`text-white hover:text-gray-300 border-b-2 transition-colors duration-200 ${
              isActivePath('/community') ? 'border-white' : 'border-transparent hover:border-white'
            }`}
          >
            Community
          </Link>
          <Link 
            to="/cart" 
            className="text-white hover:text-gray-300 relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link 
            to="/" 
            className={`px-4 py-2 text-white rounded-lg transition duration-200 ${
              isActivePath('/') ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Login
          </Link>

        </div>
      </div>
      {getPageTitle() && (
        <h2 className="text-white text-2xl font-bold px-8 py-4 bg-gray-800 w-full">{getPageTitle()}</h2>
      )}
    </nav>
  );
};

export default Navbar;
