import React, { useState } from 'react';
import '../App.css'; // Ensure this path is correct

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="Navbar">
      {/* Updated Hamburger button with visible icon */}
      <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
        <span className="toggler-icon">☰</span> {/* Visibly represents the hamburger icon */}
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`} style={{width: 250, position: 'fixed', left: isSidebarOpen ? 0 : -250, transition: 'left 0.3s'}}>
        <a href="#" className="closebtn" onClick={toggleSidebar}>×</a>
        <a href="#">Home</a>
        <a href="#">Place</a>
        <a href="#">Event</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}

export default Navbar;
