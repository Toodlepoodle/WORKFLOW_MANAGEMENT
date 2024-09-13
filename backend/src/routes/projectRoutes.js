// File: backend/src/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');

router.post('/', auth, projectController.createProject);
router.get('/', auth, projectController.getProjects);

module.exports = router;
