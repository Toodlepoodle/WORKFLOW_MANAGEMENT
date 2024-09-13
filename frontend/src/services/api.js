// File: frontend/src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const register = (userData) => api.post('/users/register', userData);
export const login = (credentials) => api.post('/users/login', credentials);

export const getProjects = () => api.get('/projects');
export const createProject = (projectData) => api.post('/projects', projectData);

export const getTasks = (projectId) => api.get(`/tasks/${projectId}`);
export const createTask = (taskData) => api.post('/tasks', taskData);

export const startTimer = (taskId) => api.post('/timetracking/start', { taskId });
export const stopTimer = (timeEntryId) => api.put(`/timetracking/stop/${timeEntryId}`);
