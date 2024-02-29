import React, { useEffect, useRef } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import './Style/landing.css';
import { initializeThree } from './logicScript/event';

function Landing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const computedStyle = getComputedStyle(canvas);
      const canvasWidth = parseInt(computedStyle.getPropertyValue('width'), 10);
      const canvasHeight = parseInt(computedStyle.getPropertyValue('height'), 10);
      initializeThree('eventThree', './Komodo4.glb', canvasWidth, canvasHeight);
    }
  }, []);

  return (
    <div className="Landing">
      <Navbar />
      <header className="Landing-header">
        <div id='videoContainer'>
          <video autoPlay loop muted playsInline src="./videoEntrance.mp4" id='entranceVideo'></video>
        </div>
        <div id='overlay-color'></div>
        <div id='page1'>
          <div id='entrance'>
            <div id='entranceText'>
              <h1 id='head1' className='landingTitle'>Explore</h1>
              <h1 id='head1' className='landingTitle'>East Nusa</h1>
              <h1 id='head1' className='landingTitle'>Tenggara</h1>
              <h1 id='head1' className='landingTitle'>With us</h1>
            </div>
          </div>
            <canvas id='eventThree'></canvas>
        </div>
      </header>
    </div>
  );
}

export default Landing;
