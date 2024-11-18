// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TrendingGames from './pages/TrendingGames';
import RecommendedGames from './pages/RecommendedGames';
import Articles from './pages/Articles.js';
import Login from './pages/Login';
import Register from './pages/Register';
import GameDetail from './pages/GameDetail';
import ArticleDetail from './pages/ArticleDetail';
import Community from './pages/Community';
import MyPosts from './pages/MyPosts';
import Cart from './pages/Cart';
import './App.css';
import { CartProvider } from './context/CartContext';

function App() {
   // Array dari path yang tidak memerlukan navbar
   const noNavbarRoutes = ['/', '/register'];
  
   // Cek apakah path saat ini ada dalam noNavbarRoutes
   const shouldShowNavbar = !noNavbarRoutes.includes(window.location.pathname);

  return (
    <CartProvider>
      <Router>
        {shouldShowNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trending" element={<TrendingGames />} />
          <Route path="/recommended" element={<RecommendedGames />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
