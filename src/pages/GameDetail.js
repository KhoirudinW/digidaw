// Combine games from trending and recommended sections
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findGameById } from '../data/GamesData';
import { useCart } from '../context/CartContext';
import CheckoutModal from '../components/CheckoutModal';
import ReviewModal from '../components/ReviewModal';

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, clearCart } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  const game = findGameById(Number(id));

  if (!game) {
    return <div className="text-white text-center mt-10">Game not found</div>;
  }

  const handleBuyNow = () => {
    clearCart(); // Clear existing cart items
    addToCart(game); // Add only this game
    setShowCheckoutModal(true);
  };

  const handleCheckoutConfirm = (paymentMethod) => {
    setShowCheckoutModal(false);
    setShowSuccessModal(true);
    
    // Simulasi sukses checkout
    setTimeout(() => {
      clearCart();
      setShowSuccessModal(false);
      navigate('/home');
    }, 2000);
  };

  // Modal sukses checkout
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <div className="text-green-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Payment Successful!</h3>
        <p className="text-gray-300">Thank you for your purchase.</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img src={game.image} alt={game.name} className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3">
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {game.gallery.map((image, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
                    <img src={image} alt={`Screenshot ${index + 1}`} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white my-4">{game.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 font-bold text-xl">{game.rating}</span>
              <span className="text-gray-400 ml-2">/ 10</span>
            </div>
            <p className="text-gray-300 mb-6">{game.description}</p>
            <div className="flex justify-between gap-4">
              <button 
                onClick={() => setShowReviewModal(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                See review
              </button>
              <div className="flex gap-4">
                <button 
                  onClick={() => addToCart(game)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                >
                  Add to Cart
                </button>
                <div className="bg-navy-900 flex items-center gap-4 pe-3 rounded-lg">
                  <button 
                    onClick={handleBuyNow}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                  >
                    Buy Now
                  </button>
                  <p className="text-white text-xl font-bold">{game.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal 
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        total={parseInt(game.price.replace(/[^\d]/g, ''))}
        onConfirm={handleCheckoutConfirm}
      />

      {showSuccessModal && <SuccessModal />}

      <ReviewModal 
        gameId={game.id}
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
      />
    </div>
  );
};

export default GameDetail; 