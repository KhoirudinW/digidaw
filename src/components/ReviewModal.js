import React from 'react';
import { reviews } from '../data/ReviewsData';

const ReviewModal = ({ gameId, isOpen, onClose }) => {
  const gameReviews = reviews[gameId] || [];

  if (!isOpen) return null;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-400'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] md:max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-gray-700 flex justify-between items-center sticky top-0 bg-gray-900 z-10">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Showing {gameReviews.length} reviews
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Reviews Content */}
        <div className="overflow-y-auto flex-1 p-4 md:p-6 space-y-4">
          {gameReviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-gray-800 p-4 md:p-6 rounded-lg transition-all duration-200 hover:bg-gray-750"
            >
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-4">
                <div className="flex items-center w-full md:w-auto mb-3 md:mb-0">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold text-white text-lg">{review.user}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-gray-400 text-sm">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-3 leading-relaxed">{review.content}</p>
              
              {/* Review Actions */}
              <div className="flex items-center space-x-4 mt-4 text-sm text-gray-400">
                <button className="flex items-center hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Reply
                </button>
                <button className="flex items-center hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Helpful
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal; 