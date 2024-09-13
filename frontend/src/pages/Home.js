// File: frontend/src/pages/Home.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Workflow Management</h1>
      <Dashboard />
    </div>
  );
};

export default Home;