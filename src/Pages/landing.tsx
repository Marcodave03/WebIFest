import React, { useEffect } from 'react';
import '../App.css';
import '../App';
import Navbar from '../Components/navbar';
import './Style/landing.css'

function Landing(){
    return (
      <div className="Landing">
        <Navbar/>
        <header className="Landing-header">
          <div id='videoContainer'>
              <video autoPlay loop muted playsInline src="./videoEntrance.mp4" id='entranceVideo'></video>
          </div>
          <div id='overlay-color'></div>
          <div id='entrance'>
            <div id='entranceText'>
              <h1 id='head1' className='landingTitle'>Explore <br /> East Nusa <br /> Tenggara <br /> With us</h1>
              {/* <h3 id = 'head2' className='landingTitle'>Beauty and Culture Await</h3> */}
            </div>
          </div>

        </header>
      </div>
    );
}
export default Landing;
