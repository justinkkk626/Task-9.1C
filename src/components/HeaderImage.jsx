import React from 'react';
import { faker } from '@faker-js/faker';
import './HeaderImage.css';

const HeaderImage = () => {
  const imageUrl = faker.image.url();  
  return (
    <div className="header-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>Welcome to DEV@Deakin</h1>
    </div>
  );
};

export default HeaderImage;
