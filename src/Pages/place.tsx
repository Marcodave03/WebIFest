import React from 'react';
import '../App.css';
import '../App';
import Navbar from '../Components/navbar';

function Place() {
  return (
    <div className="Place">
      <Navbar/>
      <header className="Place-header">
        <p>
          Welcome to Place 
        </p>
      </header>
    </div>
  );
}

export default Place;
