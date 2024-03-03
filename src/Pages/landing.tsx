import React, { useEffect, useRef } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import './Style/landing.css';
import { initializeThree } from './logicScript/komodo';
import Komodo from './Komodo';
function Landing() {
  return (
    <div className="Landing">
      <Navbar />
      <header className="Landing-header" style={{overflow: 'hidden'}}>
        <div id='videoContainer'>
          <video autoPlay loop muted playsInline src="./videoEntrance.mp4" id='entranceVideo'></video>
        </div>
        <Komodo/>
        <div id='overlay-color'></div>
        <section className="Komodosec" id="kom1">
          <div id='page1'>
            <div id='entrance'>
              <div id='entranceText'>
                <h1 id='head1' className='landingTitle'>Explore</h1>
                <h1 id='head1' className='landingTitle'>East Nusa</h1>
                <h1 id='head1' className='landingTitle'>Tenggara</h1>
                <h1 id='head1' className='landingTitle'>With us</h1>
              </div>
            </div>                              
          </div>  
        </section>
        <section className="Komodosec" id="kom2">
          <div id='page1'>
            <div id='entrance'>
              <div id='entranceText'>
                <h1 id='head1' className='landingTitle'>Explore</h1>
                <h1 id='head1' className='landingTitle'>East Nusa</h1>
                <h1 id='head1' className='landingTitle'>Tenggara</h1>
                <h1 id='head1' className='landingTitle'>With us</h1>
              </div>
            </div>                              
          </div>  
        </section>
        <section className="Komodosec" id="kom3">
          <div id='page1'>
            <div id='entrance'>
              <div id='entranceText'>
                <h1 id='head1' className='landingTitle'>Explore</h1>
                <h1 id='head1' className='landingTitle'>East Nusa</h1>
                <h1 id='head1' className='landingTitle'>Tenggara</h1>
                <h1 id='head1' className='landingTitle'>With us</h1>
              </div>
            </div>                              
          </div>  
        </section>
    
      </header>
      <Footer />
    </div>
  );
}

export default Landing;
