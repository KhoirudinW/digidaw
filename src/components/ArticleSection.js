// src/components/ArticleSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleSection = ({ articles }) => {
  const navigate = useNavigate();

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <section className="mt-8 w-[80%] mx-auto mb-10">
      <div className="grid grid-cols-2 gap-4 mt-4 px-20 py-5">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg p-4 h-[280px] cursor-pointer hover:transform hover:scale-105 transition duration-200"
            onClick={() => handleArticleClick(article.id)}
          >
            <img 
              src={article.image} 
              alt={article.title} 
              className="h-[200px] w-full object-cover rounded-md"
            />
            <h3 className="mt-2 text-white font-semibold">{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
