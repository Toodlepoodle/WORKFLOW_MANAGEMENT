// File: backend/src/routes/timeTrackingRoutes.js
const express = require('express');
const router = express.Router();
const timeTrackingController = require('../controllers/timeTrackingController');
const auth = require('../middleware/auth');

router.post('/start', auth, timeTrackingController.startTimer);
router.put('/stop/:id', auth, timeTrackingController.stopTimer);

module.exports = router;