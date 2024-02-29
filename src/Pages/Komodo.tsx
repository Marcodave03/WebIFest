import React, { useEffect } from 'react';
import '../App.css';
import '../Pages/Style/komodo.css'
import Navbar from '../Components/navbar';
import { initializeThree } from './logicScript/komodo';

const Komodo: React.FC = () => {
  useEffect(() => {
    initializeThree('eventThree', 'canvasContainer','./Komodo.glb',);
  }, []);
  return (
    <div id='canvasContainer'>
      <canvas id='eventThree'></canvas>
    </div>
  );
}
export default Komodo;