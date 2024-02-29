import React, { useEffect } from 'react';
import '../App.css';
import '../Pages/Style/komodo.css'
import Navbar from '../Components/navbar';
import { initializeThree } from './logicScript/komodo';

const Event: React.FC = () => {
  useEffect(() => {
    initializeThree('eventThree', 'canvasContainer','./Komodo.glb',);
    //initializeThree('eventThree', 'Assets/komodo.glb');
  }, []);

  return (
    <div className="Event">
      <Navbar />
      <header className="Event-header">
        <div id='canvasContainer'>
          <canvas id='eventThree'></canvas>
        </div>
      </header>
    </div>
  );
}

export default Event;
