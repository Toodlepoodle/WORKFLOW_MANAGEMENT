// File: frontend/src/components/Dashboard.js
import React from 'react';
import ProjectList from './ProjectList';
import TaskList from './TaskList';
import TimeTracker from './TimeTracker';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <ProjectList />
        <TaskList />
        <TimeTracker />
      </div>
    </div>
  );
};

export default Dashboard;
