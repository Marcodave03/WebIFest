import React, { useEffect } from 'react';
import '../App.css';
import '../App';
import Navbar from '../Components/navbar';
import './Style/landing.css'
import { initializeThree } from './logicScript/event';

function Landing(){
    return (
      <div className="Landing">
        <Navbar/>
        <header className="Landing-header">
          <h1 id='head1' className='landingTitle'>Explore Nusa Tenggara Timur</h1>
          <h3 id = 'head2' className='landingTitle'>Beauty and Culture Await</h3>
            {/* <canvas id='eventThree'></canvas> */}
        </header>
      </div>
    );
}
export default Landing;
