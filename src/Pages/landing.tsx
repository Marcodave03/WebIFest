import '../App.css';
import Navbar from '../Components/navbar';
import './Style/landing.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../Experience';
function Landing() {
  return (
    <>
      <Navbar />
      <div id='overlay-color'></div>
      <div id='videoContainer'>
        <video autoPlay loop muted playsInline src="./videoEntrance.mp4" id='entranceVideo'></video>
      </div>
      <Canvas style={{width:"100vw",height:"100vh"}}>
        <Experience/>
      </Canvas>
    </> 
  );
}

export default Landing;
