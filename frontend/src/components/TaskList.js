// File: frontend/src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import { getTasks, createTask } from '../services/api';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    if (projectId) {
      fetchTasks();
    }
  }, [projectId]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks(projectId);
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await createTask({ title: newTaskTitle, project: projectId });
      setNewTaskTitle('');
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {projectId && (
        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="New task title"
          />
          <button type="submit">Create Task</button>
        </form>
      )}
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
