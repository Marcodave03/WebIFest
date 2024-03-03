import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { initializeThree } from './logicScript/komodo';
import ticketEvent from '../Assets/ticket.png';

const Event: React.FC = () => {
  return (
    <div className="Event">
      <Navbar />
      <section className='event-2'>
        <div className="container">
          <div className="row">
            <p id='titleTxt'> Explore Taka Makassar </p>
            <img src={ticketEvent} style={{
              width: '1700px',
              height: '350px',
              flexShrink: 0,
              maxWidth: '100%',
              marginTop: '50px'
            }} />
            <img src={ticketEvent} style={{
              width: '1700px',
              height: '350px',
              flexShrink: 0,
              maxWidth: '100%',
              marginTop: '50px'
            }} />
            <img src={ticketEvent} style={{
              width: '1700px',
              height: '350px',
              flexShrink: 0,
              maxWidth: '100%',
              marginTop: '50px'
            }} />
            <img src={ticketEvent} style={{
              width: '1700px',
              height: '350px',
              flexShrink: 0,
              maxWidth: '100%',
              marginTop: '50px'
            }} />
          </div>
        </div>
      </section>

      <header className="Event-header">
      </header>
      <Footer />
    </div>


  );
}
export default Event;
