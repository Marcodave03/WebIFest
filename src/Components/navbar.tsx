import React, { useState } from 'react';
import '../App.css'; // Ensure this path is correct
import {Link} from "react-router-dom"
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="Navbar">
      {/* Updated Hamburger button with visible icon */}
      <button className={`navbar-toggler ${isSidebarOpen ? 'open' : 'close'}`} type="button" onClick={toggleSidebar}>
        <span className="toggler-icon">{isSidebarOpen ? '✕' : '☰'}</span> {/* Toggle between hamburger and X icon */}
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`} style={{width: isSidebarOpen ? 'calc(210px + 10%)' : '0', transition: 'width 0.3s', height : 'auto',paddingBottom: '5vh'}}>
        <Link to="/Home" className="sidebar-link"> Home </Link>
        <Link to="/Place" className="sidebar-link"> Place </Link>
        <Link to="/" className="sidebar-link"> Endemic Animal </Link>
        <Link to="/Event" className="sidebar-link"> Event </Link>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
