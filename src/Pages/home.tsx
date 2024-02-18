import React from 'react';
import '../App.css';
import '../App';
import Navbar from '../Components/navbar';;

function Home() {
  return (
    <div className="Home">
        <Navbar/>
        <header className="Home-header">
            <p>
                Welcome to Home / Landing
            </p>
        </header>
         {/* bootstrap succeed */}
        <button className="btn btn-primary">Click me</button> 
    </div>
  );
}

export default Home;
