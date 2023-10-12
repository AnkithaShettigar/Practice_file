import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Hirebix Test</h1>
      <Link to="/register" className="btn-sign sign">
        Register
      </Link>
      <Link to="/login" className="btn-sign">
        Login
      </Link>
    </div>
  );
};

export default Home;
