// File: backend/src/controllers/projectController.js
const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const project = new Project({ ...req.body, owner: req.user._id });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ $or: [{ owner: req.user._id }, { members: req.user._id }] });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
