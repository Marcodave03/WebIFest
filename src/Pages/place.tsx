import React from 'react';
import '../App';
import Navbar from '../Components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/Page.css';
import explores from '../Assets/explore.jpg';
import padar from '../Assets/padar.jpeg';
import boat from '../Assets/boat.jpeg'

import { text } from 'stream/consumers';
import { Container } from 'react-bootstrap';

function Place() {
  AOS.init();

  //style tulisan explore blabla biar di tengah rata kiri
  const exploreSectionStyle = {
    backgroundImage: `url(${explores})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  };


  //padar
  const rectangleStyle = {
    width: '444px',
    height: '550px',
    backgroundSize: 'cover',
    backgroundImage: `url(${padar})`,
    display: 'flex',
    marginLeft: '50px',
    borderRadius: '20px'
  };

  const tripImage = {
    width: '444px',
    height: '550px',
    backgroundSize: 'cover',
    backgroundImage: `url(${boat})`,
    display: 'flex',
    marginLeft: '20px'
  };

  const mostVisited = {
    color: 'rgba(0, 0, 0, 0.80)',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: 'Almarai',
    fontSize: '80px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  };


  return (
    <div className="Place">
      <Navbar />
      {/* Explore */}
      <section className='explore' style={exploreSectionStyle}>
        <div className="container">
          <div className="row" >
            <div className="col d-flex">
              <div id="tagline">
                <p data-aos="fade-up" id="p1" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  EXPLORE NUSA
                </p>
                <p data-aos="fade-up" id="p2" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  TENGGARA TIMUR
                </p>
                <p data-aos="fade-up" id="p3" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  AND SEE PLACES
                </p>
                <p data-aos="fade-up" id="p4" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  TO VISIT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most visited places */}
      <section className="mostVisited">
        <div className="container">
          <div className="row">
            <div className="col-6" style={rectangleStyle}>
            </div>
            <div className='col-6'>
              <div className='row-1' style={mostVisited}>
                <p> MOST VISITED </p>
                <p> PLACES 2023 </p>
              </div>
              <div className='row-2' >
                <u> Padar Island </u>
              </div>
              <div className='row-3'>
                <p> Explore rugged hills, clear waters, and stunning views in Indonesia's Komodo National Park.
                  A hidden gem for adventurers and nature lovers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trip reservation */}
      <section className='tripReservation'>
        <div className="container">
          <div className="row-1-trip" style={{paddingTop:10}}>
            <div className='col-6'>
              <p id='tripText'> Trip Reservation </p>
              <div style={tripImage}> </div>
            </div>
            <div className='col-6'>  </div>
          </div>
        </div>
      </section>



      {/* Trip reservation */}


      <header className="Place-header">



      </header>
    </div>
  );
}

export default Place;
