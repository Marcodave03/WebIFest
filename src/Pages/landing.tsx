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
          <div id='entrance'>
            <div id='entranceText'>
              <h1 id='head1' className='landingTitle'>EXPLORE<br/> <p>EAST NUSA <br /> TENGGARA</p> WITH US</h1>
              <h3 id = 'head2' className='landingTitle'>Beauty and Culture Await</h3>
            </div>
          </div>
        </header>
      </div>
    );
}
export default Landing;
