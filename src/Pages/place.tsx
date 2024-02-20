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
        <p data-aos="fade-up">
          EXPLORE NUSA TENGGARA TIMUR AND SEE PLACES TO VISIT  
        </p>
      </header>
    </div>
  );
}

export default Place;
