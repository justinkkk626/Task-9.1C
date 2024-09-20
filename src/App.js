import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import App1 from './components/App1';
import './App.css';  

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className="navbar-brand">DEV@Deakin</Link>
            <input type="text" placeholder="Search..." className="navbar-search" />
          </div>
          <div className="navbar-right">
            <Link to="/post" className="navbar-item">Post</Link>
            <Link to="/login" className="navbar-item">Login</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact>
            <h1>Welcome to DEV@Deakin!</h1>
          </Route>
          <Route path="/post">
            <h1>Post Page (Placeholder)</h1>
          </Route>
          
          <Route path="/home" component={App1} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
