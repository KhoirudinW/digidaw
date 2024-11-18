import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findArticleById } from '../data/ArticleData';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = findArticleById(Number(id));

  if (!article) {
    return <div className="text-white text-center mt-10">Article not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Article Text Section */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Article Main Image */}
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <img src={article.image} alt={article.title} className="rounded-lg w-full h-48 md:h-64 object-cover" />
        </div>
      </div>

      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {article.relatedArticles.map((relatedId) => {
              const relatedArticle = findArticleById(relatedId);
              return relatedArticle ? (
                <div key={relatedId} className="bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => navigate(`/article/${relatedId}`)}>
                  <img src={relatedArticle.image} alt={relatedArticle.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h3 className="text-lg font-semibold">{relatedArticle.title}</h3>
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;