const mongoose = require('mongoose');

const TimeEntrySchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    hours: { type: Number, required: true },
});

module.exports = mongoose.model('TimeEntry', TimeEntrySchema);
