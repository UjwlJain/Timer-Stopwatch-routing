import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Stopwatch.css';

const Stopwatch = () => {
  const navigate = useNavigate();

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  };

  const startStopwatch = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div className="stopwatch-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>Stopwatch</div>
      <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>{formatTime(time)}</div>
      <div>
        {!isRunning ? (
          <button onClick={startStopwatch} style={{ marginRight: '10px' }}>Start</button>
        ) : (
          <button onClick={stopStopwatch} style={{ marginRight: '10px' }}>Stop</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
