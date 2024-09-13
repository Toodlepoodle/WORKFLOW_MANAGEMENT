// File: frontend/src/components/TimeTracker.js
import React, { useState, useEffect } from 'react';
import { startTimer, stopTimer } from '../services/api';

const TimeTracker = ({ taskId }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timeEntryId, setTimeEntryId] = useState(null);

  useEffect(() => {
    let interval;
    if (isTracking) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, startTime]);

  const handleStartTimer = async () => {
    try {
      const response = await startTimer(taskId);
      setTimeEntryId(response.data._id);
      setIsTracking(true);
      setStartTime(Date.now());
    } catch (error) {
      console.error('Error starting timer:', error);
    }
  };

  const handleStopTimer = async () => {
    try {
      await stopTimer(timeEntryId);
      setIsTracking(false);
      setElapsedTime(0);
      setTimeEntryId(null);
    } catch (error) {
      console.error('Error stopping timer:', error);
    }
  };

  return (
    <div className="time-tracker">
      <h2>Time Tracker</h2>
      {isTracking ? (
        <button onClick={handleStopTimer}>Stop Timer</button>
      ) : (
        <button onClick={handleStartTimer} disabled={!taskId}>Start Timer</button>
      )}
      <p>Elapsed Time: {elapsedTime} seconds</p>
    </div>
  );
};

export default TimeTracker;