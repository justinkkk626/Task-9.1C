import React from 'react';
import './TutorialCard.css';

const TutorialCard = ({ image, title, description, rating, username }) => {
  return (
    <div className="tutorial-card">
      <img src={image} alt="Tutorial" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tutorial-footer">
        <span>{rating} ★</span>
        <span>{username}</span>
      </div>
    </div>
  );
};

export default TutorialCard;
