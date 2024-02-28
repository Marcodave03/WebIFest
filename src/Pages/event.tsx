// Event.tsx
import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import { initializeThree } from './logicScript/event';

const Event: React.FC = () => {
  useEffect(() => {
    initializeThree('eventThree','./Komodo4.glb',1000,1000);
    //initializeThree('eventThree', 'Assets/komodo.glb');
  }, []);

  return (
    <div className="Event">
      <Navbar />
      <header className="Event-header">
        <canvas id='eventThree'></canvas>
      </header>
    </div>
  );
}

export default Event;