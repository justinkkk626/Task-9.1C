import React from 'react';
import NavBar from './NavBar';
import HeaderImage from './HeaderImage';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import Subscribe from './Subscribe';
import Footer from './Footer';
import '../App.css';

const App1 = () => {
  return (
    <div className="app1">
      <NavBar />
      <HeaderImage />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App1;

