import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ image, title, description, rating, author }) => {
  return (
    <div className="article-card">
      <img src={image} alt="Article" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="article-footer">
        <span>{rating} ★</span>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
