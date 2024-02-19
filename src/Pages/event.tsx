// Event.tsx
import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import { initializeThree } from './logicScript/event'; // Adjust the import path as necessary

const Event: React.FC = () => {
  useEffect(() => {
    initializeThree('eventThree');
  }, []);

  return (
    <div className="Event">
      <Navbar/>
      <header className="Event-header">
        <canvas id='eventThree'></canvas>
      </header>
    </div>
  );
}

export default Event;
