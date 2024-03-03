import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { initializeThree } from './logicScript/komodo';
import backImage from '../Assets/ev1.png';
import frontImage from '../Assets/ev2.png';

const Event: React.FC = () => {
  return (
    <div className="Event">
      <Navbar />
      
      <section className="background-section" style={{marginBottom:300}} >
        <div style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', height: '40vh', position: 'relative' }}>
        </div>
        <div className="d-flex justify-content-center" style={{ zIndex: 2, position: "absolute", top: 60, left:"10%"}}>
          <img src={frontImage} alt="imgg" style={{ width: "85%" }} />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 style={{color:"black"}}>Taka Makassar</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sit, quaerat quidem officiis vero rerum incidunt mollitia placeat commodi molestias similique, nihil tenetur perspiciatis earum necessitatibus, aspernatur dolorem. Recusandae, labore.</p>
              <img src={backImage} alt="imgg" style={{ width: "200px"}} />
              <h1 style={{color:"black"}}>List of Activities</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sit, quaerat quidem officiis vero rerum incidunt mollitia placeat commodi molestias similique, nihil tenetur perspiciatis earum necessitatibus, aspernatur dolorem. Recusandae, labore.</p>
            </div>
            <div className="col-6">
              <img src={backImage} alt="imgg" style={{ width: "200px"}} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sit, quaerat quidem officiis vero rerum incidunt mollitia placeat commodi molestias similique, nihil tenetur perspiciatis earum necessitatibus, aspernatur dolorem. Recusandae, labore.</p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
export default Event;
