import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import { initializeThree } from './logicScript/event'; // Ensure the import path matches the location of your Three.js setup file

const Event: React.FC = () => {
  useEffect(() => {
    // Call the function to initialize the Three.js scene after the component mounts
    initializeThree('eventThree','../Assets/komodo.glb');
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className="Event">
      <Navbar/>
      <header className="Event-header">
        <canvas id='eventThree'></canvas> {/* The canvas ID here matches the ID passed to initializeThree */}
      </header>
    </div>
  );
}

export default Event;
