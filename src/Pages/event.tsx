import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import { initializeThree } from './logicScript/komodo';

const Event: React.FC = () => {
  return (
    <div className="Event">
      <Navbar />
      <header className="Event-header">
      </header>
    </div>
  );
}
export default Event;
