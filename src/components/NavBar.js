import React from 'react';
import { useHistory } from 'react-router-dom'; 
import './NavBar.css';

const NavBar = () => {
  const history = useHistory();
  
  const handleSignOut = () => {
    history.push('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">DEV@Deakin</div>
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="navbar-buttons">
        <button>Post</button>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </nav>
  );
};

export default NavBar;
