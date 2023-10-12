import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <div className="home-container">
      <h1>Test</h1>
      <Link to="/testscreen" className="btn-sign">
        START
      </Link>
    </div>
  );
};

export default Test;
