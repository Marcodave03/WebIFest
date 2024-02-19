import React, { useState } from 'react';
import '../App.css'; // Ensure this path is correct

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="Navbar">
      {/* Updated Hamburger button with visible icon */}
      <button className={`navbar-toggler ${isSidebarOpen ? 'open' : 'close'}`} type="button" onClick={toggleSidebar}>
        <span className="toggler-icon">{isSidebarOpen ? '✕' : '☰'}</span> {/* Toggle between hamburger and X icon */}
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`} style={{width: isSidebarOpen ? '250px' : '0', transition: 'width 0.3s'}}>
        <a href="#" className="sidebar-link">Home</a>
        <a href="#" className="sidebar-link">Place</a>
        <a href="#" className="sidebar-link">Event</a>
        <a href="#" className="sidebar-link">About</a>
      </div>
    </div>
  );
}

export default Navbar;
