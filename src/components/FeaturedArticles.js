import React from 'react';
import ArticleCard from './ArticleCard';
import './FeaturedArticles.css';
import { faker } from '@faker-js/faker';

const articles = Array.from({ length: 4 }, () => ({
  image: faker.image.url(),  
  title: faker.lorem.words(3),
  description: faker.lorem.sentence(),
  rating: (Math.random() * 5).toFixed(1),
  author: faker.person.fullName(),  
}));

const FeaturedArticles = () => {
  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <button>See all articles</button>
    </div>
  );
};

export default FeaturedArticles;
