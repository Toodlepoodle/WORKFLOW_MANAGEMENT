// File: backend/src/controllers/timeTrackingController.js
const TimeEntry = require('../models/TimeEntry');

exports.startTimer = async (req, res) => {
  try {
    const timeEntry = new TimeEntry({
      task: req.body.taskId,
      user: req.user._id,
      startTime: new Date()
    });
    await timeEntry.save();
    res.status(201).json(timeEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.stopTimer = async (req, res) => {
  try {
    const timeEntry = await TimeEntry.findById(req.params.id);
    if (!timeEntry) {
      return res.status(404).json({ error: 'Time entry not found' });
    }
    timeEntry.endTime = new Date();
    timeEntry.duration = (timeEntry.endTime - timeEntry.startTime) / 60000; // Convert to minutes
    await timeEntry.save();
    res.json(timeEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};