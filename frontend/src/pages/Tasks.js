// File: frontend/src/pages/Tasks.js
import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const Tasks = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>
      {/* Add a project selector here */}
      <TaskList projectId={selectedProject} />
    </div>
  );
};

export default Tasks;