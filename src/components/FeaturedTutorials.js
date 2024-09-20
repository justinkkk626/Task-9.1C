import React from 'react';
import TutorialCard from './TutorialCard';
import './FeaturedTutorials.css';
import { faker } from '@faker-js/faker';

const tutorials = Array.from({ length: 4 }, () => ({
  image: faker.image.url(),  
  title: faker.lorem.words(3),
  description: faker.lorem.sentence(),
  rating: (Math.random() * 5).toFixed(1),
  username: faker.internet.userName(),
}));

const FeaturedTutorials = () => {
  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-list">
        {tutorials.map((tutorial, index) => (
          <TutorialCard key={index} {...tutorial} />
        ))}
      </div>
      <button>See all tutorials</button>
    </div>
  );
};

export default FeaturedTutorials;
