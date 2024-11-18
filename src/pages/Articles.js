// src/pages/Articles.js
import React from 'react';
import ArticleSection from '../components/ArticleSection';
import { articles } from '../data/ArticleData';

const Articles = () => {
  return (
    <div>
      <ArticleSection articles={articles} />
    </div>
  );
};

export default Articles;
