import React from 'react';
import '../App.css';
import '../App';
import Navbar from '../Components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/Page.css';

function Place() {
  AOS.init();

  return (
    <div className="Place">
      <Navbar/>
      <header className="Place-header">
        <div id="tagline">
        <p data-aos="fade-up" id="p1">
          EXPLORE NUSA TENGGARA TIMUR   
        </p>
        <p data-aos="fade-up" id = "p2">
          AND SEE PLACES TO VISIT
        </p>
        </div>

        <div id="mv">
          {/* Most visited */}
          <p id="p1trending"> #trending </p>
          <p id ="p2mvp"> MOST VISITED </p>
          <p id ="p2mvp"> PLACES 2023 </p>
        </div>
        <div>
          {/* Locations */}
        </div>
        <div>
          {/* Boat type */}
        </div>
        <div>
          {/* Hotels */}
        </div>
        <div>
          {/* NTT Pari */}
        </div>
      </header>
    </div>
  );
}

export default Place;
