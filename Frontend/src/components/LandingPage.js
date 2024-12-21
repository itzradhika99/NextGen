import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Welcome to Real-time Collaboration Tool</h1>
      <p>Your ultimate platform for collaborative work and communication.</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default LandingPage;
