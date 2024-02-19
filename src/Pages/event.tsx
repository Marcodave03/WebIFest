import React from 'react';
import '../App.css';
import '../App';
import Navbar from '../Components/navbar';

function Event() {
  return (
    <div className="Event">
      <Navbar/>
      <header className="Event-header">
        <p>
          Welcome to Event
        </p>
      </header>
    </div>
  );
}

export default Event;
