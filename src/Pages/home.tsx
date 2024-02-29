import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/navbar';
import image1 from '../Assets/para1.jpg';
import image2 from '../Assets/para2.png';
import image3 from '../Assets/para3.png';
import image4 from '../Assets/para4.png';
import image5 from '../Assets/para5.png';
import Home1 from '../Assets/Home1.svg';
import Home2 from '../Assets/Home2.svg';
import Home3 from '../Assets/Home3.svg';
import inside from '../Assets/Inside.svg';
import outside from '../Assets/Outside.svg';
import { applyScrollingEffects } from './logicScript/home'; // Import the applyScrollingEffects function
import '../App.css';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallaxStopped, setParallaxStopped] = useState(false);

  useEffect(() => {
    applyScrollingEffects();
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500; 
      if (scrollPosition > threshold) {
        setParallaxStopped(true);
      } else {
        setParallaxStopped(false);
      }
    };
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      console.log(clientX, clientY);
      const x = ev.clientX / window.innerWidth * 100 + '%';
      const y = ev.clientY / window.innerHeight * 100 + '%';
      heroRef.current.style.setProperty('--x', x);
      heroRef.current.style.setProperty('--y', y);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove',updateMousePosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove',updateMousePosition);
    };
  }, []);

  return (
    <div ref={heroRef} className="Home Background">
      <Navbar/>
      <section id="parallax" style={{zIndex:0}}>
        <img src={image1} alt="imgg" className = "pImg" id="beach1"/> 
        <img src={image2} alt="imgg" className = "pImg" id="beach2"/>
        <img src={image3} alt="imgg" className = "pImg" id="beach3"/>
        <h2 id="text1">Nusa Travel</h2>
        <img src={image4} alt="imgg" className = "pImg" id="beach4"/>
        <img src={image5} alt="imgg" className = "pImg" id="beach5"/>
      </section>

      <section ref={heroRef}  className="sec Background" id="sec" style={{zIndex:1}}>
          <div className="container">
            <div className="row d-flex justify-content center">
              <div className="col text-center">
                <img src={Home1} alt="imgg" id="" style={{ height:"400px" }}/>
                <h2 className="">Nusa Tenggara Timur</h2>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col text-center">
              <img src={Home2} alt="imgg" id="" style={{ height:"400px" }}/>
              <h2>Stunning Landscape of beaches and mountains</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col text-center">
              <img src={Home3} alt="imgg" id="" style={{ height:"400px" }}/>
              <h2>Rich Cultural heritage and unique traditions</h2>
            </div>
          </div>
        </div>

        <div className="container" >
          <div className="row d-flex justify-content-center  ">
            <div className=" col text-center">
              <div className="col" style={{ position: "relative" }}>
                <div className="text-center" style={{position:"absolute", top:0, left:100, zIndex:1}}>
                  <img id="outsideImage" src={outside} alt="imgg" style={{height: "1000px"}} />
                </div>
                <div style={{position:"absolute", top:0, left:100, zIndex:2, marginLeft:125, marginTop:125}}>
                  <img id="insideImage" src={inside} alt="imgg" style={{height: "750px"}} />
                  <div style={{position:"absolute", top:0, marginTop:300 ,zIndex:3}}>
                    <h2>Home to diverse ethnic groups and languages</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>

      <section ref={heroRef} className="sec1 Background" style={{ position: "relative", overflow: "hidden", zIndex:2}}>
        <div className="container">
            <div className="row">
              <div className="col-6">
                <img id="insideImage" src={Home1} alt="imgg" style={{height:200}}  />
              </div>
              <div className="col-6">
                <h2>Explore Destination</h2>
                <h2 style={{color:"white"}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ut et iusto maiores, quo porro quaerat debitis! Et, fuga harum consectetur, architecto nihil molestiae repellat velit atque voluptatum illo cum.
                </h2>
                <button>See more</button>
              </div>
            </div>          
          </div>

          <div style={{transform:"rotate(10deg)"}}>
            <div className="row logos">
              <div className="logos-slide">
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/> 
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
              </div>
              <div className="logos-slide1">
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
              </div>
              <div className="logos-slide">
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/> 
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
export default Home;