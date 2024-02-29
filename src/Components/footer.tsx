import React, { useState } from 'react';
import '../App.css'; // Ensure this path is correct
import {Link} from "react-router-dom"
import sos1 from '../Assets/sos1.png';
import sos2 from '../Assets/sos2.png';
import sos3 from '../Assets/sos3.png';
import sos4 from '../Assets/sos4.png';

function Footer() {
  return (
    <div className="Footer" style={{zIndex:9999, backgroundColor:"white"}}  >
     <div className="container">
        <div className="row text-center">
            <div className="col-5">
                <p>Nusa Travel</p>
            </div>
            <div className="col-1" style={{backgroundColor:"black", width:"1px"}}>
            </div>
            <div className="col-5">
                <div className="row">
                    Follow Us
                </div>
                <div className="row p-2" >
                    <img src={sos1} alt="imgsos" className = "" id="sos1" style={{height:30, width:"auto"}}/>
                    <img src={sos2} alt="imgsos" className = "" id="sos2" style={{height:30, width:"auto"}}/>
                    <img src={sos3} alt="imgsos" className = "" id="sos3" style={{height:30, width:"auto"}}/>
                    <img src={sos4} alt="imgsos" className = "" id="sos4" style={{height:30, width:"auto"}}/>
                </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Footer;
