import React, { useEffect, useState, useRef } from 'react';
import {Link} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import image2 from '../Assets/para2.png';
import image3 from '../Assets/para3.png';
import image4 from '../Assets/para4.png';
import image5 from '../Assets/para5.png';
import image6 from '../Assets/para6.png';
import Home1 from '../Assets/Home1.png';
import Home2 from '../Assets/Home2.svg';
import Home3 from '../Assets/Home3.svg';
import inside from '../Assets/inside.png';
import outside from '../Assets/outside.png';
import Home4 from '../Assets/Home4.svg';
import Count1 from '../Assets/Count1.svg';
import Count2 from '../Assets/Count2.svg';
import Count3 from '../Assets/Count3.svg';
import carou2 from '../Assets/carou (2).svg';
import carou3 from '../Assets/carou (3).svg';
import carou4 from '../Assets/carou (4).svg';
import carou6 from '../Assets/carou (6).svg';
import carou7 from '../Assets/carou (7).svg';
import carou8 from '../Assets/carou (8).svg';
import Card1 from '../Assets/cardHome1.svg';
import Card2 from '../Assets/cardHome2.svg';
import Card3 from '../Assets/cardHome3.svg';
import { applyScrollingEffects } from './logicScript/home'; // Import the applyScrollingEffects function
import { countOnScroll } from './logicScript/count';
import '../App.css';

const Home: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const finalCount1 = 501;
  const finalCount2 = 1001;
  const finalCount3 = 5.5;
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallaxStopped, setParallaxStopped] = useState(false);
  setTimeout(() => {
    AOS.init();
  }, 500);

  useEffect(() => {
    countOnScroll(setCount1, finalCount1, stopCounting1);
    countOnScroll(setCount2, finalCount2, stopCounting2);
    countOnScroll(setCount3, finalCount3, stopCounting3);

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

   const stopCounting1: () => void = () => {
     console.log('Counting 1 stopped');
   };

   const stopCounting2: () => void = () => {
     console.log('Counting 2 stopped');
   };

   const stopCounting3: () => void = () => {
     console.log('Counting 3 stopped');
   };

  return (
    <div ref={heroRef} className="Home Background">
      <Navbar/>
      <section id="parallax" style={{zIndex:0}}>
        <img src={image6} alt="imgg" className = "pImg" id="beach1"/> 
        <img src={image2} alt="imgg" className = "pImg" id="beach2"/>
        <img src={image3} alt="imgg" className = "pImg" id="beach3"/>
        <img src={image4} alt="imgg" className = "pImg" id="beach4"/>
        <h2 id="text1">Nusa Travel</h2>
        <img src={image5} alt="imgg" className = "pImg" id="beach5"/>
      </section>
      

      <section ref={heroRef}  className="sec Background" id="sec" style={{zIndex:1}}>
          <div className="container" data-aos="fade-up">
            <div className="row d-flex justify-content center">
              <div className="col text-center">
                <img src={Home1} alt="imgg" id="" style={{ height:"200px" }}/>
                <p className="imageDesc">Nusa Tenggara Timur</p>
              </div>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
          <div className="row d-flex justify-content-center">
            <div className="col text-center">
              <img src={Home2} alt="imgg" id="" style={{ height:"200px" }}/>
              <p className="imageDesc">Stunning Landscape of beaches and mountains</p>
            </div>
          </div>
        </div>

        <div className="container" data-aos="fade-up">
          <div className="row d-flex justify-content-center">
            <div className="col text-center">
              <img src={Home3} alt="imgg" id="" style={{ height:"200px" }}/>
              <p className="imageDesc" >Rich Cultural heritage and unique traditions</p>
            </div>
          </div>
        </div>

      {/* <div className="container" >
        <div className="row d-flex justify-content-center">
          <div className="col text-center">
            <div className="stacked-elements">
              <img id="outsideImage" src={outside} alt="imgg" style={{ height: "700px" }} />
              <div className="stacked-content">
                <img id="insideImage" src={inside} alt="imgg" style={{ height: "550px" }} />
                <div className="stacked-text" style={{color:"white"}}>
                  <p>Home to diverse ethnic groups and languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <div className="stacked-elements">
                <div className="stacked-content">
                  <img id="insideImage" src={inside} alt="Inside Image" className="img-fluid" />
                </div>
                <img id="outsideImage" src={inside} alt="Outside Image" className="img-fluid" />
              </div>
              <p className='imageDesc' id='insideText'>Home to diverse ethnic groups and languages</p>
            </div>
          </div>
        </div>

        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img id="insideImage" src={Home4} alt="imgg" style={{ height: 400 }} />
            </div>
            <div className="col-lg-6 col-md-12" style={{marginTop:"60px"}}>
              <h2 className='imageDesc'>Explore Destination</h2>
              <p style={{ color: "white" }}>
                Embarking on a journey through Nusa Tenggara Timur reveals a realm of natural marvels and vibrant cultural tapestry. From the enchanting shores of Flores to the legendary Komodo dragons, NTT beckons with its diverse landscapes and rich heritage, promising an unforgettable adventure off the beaten path.              </p>
                <Link to="/place" style={{ textDecoration: 'none',marginTop:50 }} >
                <div className="d-flex justify-content-center" style={{backgroundColor:"white", borderRadius:"30px", maxWidth:"100px", padding:5}}>
                  See more
                </div>
              </Link>

            </div>
          </div>
        </div>


        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-4" data-aos="fade-up">
              <div className="card" style={{width: "18rem"}}>
                <img src={Card1} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Phinisi Boat</h5>
                  <p className="card-text" style={{color:"black", fontSize:15}}>Experience the charm of traditional Indonesian sailing on a Phinisi boat. Ideal for exploring Labuan Bajo's islands with an authentic touch of luxury and comfort.</p>
                  <a href="#" className="btn btn-primary" style={{backgroundColor:"#011C1D", borderRadius:10}}>Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-4" data-aos="fade-up">
              <div className="card" style={{width: "18rem"}}>
                  <img src={Card2} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Speedboat</h5>
                    <p className="card-text" style={{color:"black", fontSize:15}}>oom across Labuan Bajo's azure waters in a speedboat, perfect for quick island hopping and reaching remote destinations efficiently without compromising on comfort.</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"#011C1D", borderRadius:10}}>Go somewhere</a>
                  </div>
                </div>
            </div>
            <div className="col-4" data-aos="fade-up">
              <div className="card" style={{width: "18rem"}}>
                  <img src={Card3} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Traditional Wooden Boat</h5>
                    <p className="card-text" style={{color:"black", fontSize:15}}>Adventures aboard a traditional wooden boat. Explore the coastline and nearby islands intimately, soaking in the local culture and breathtaking scenery.</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"#011C1D", borderRadius:10}}>Go somewhere</a>
                  </div>
                </div>
            </div>
          </div>
        </div>

          <div style={{transform:"rotate(10deg)", marginTop:"250px", marginBottom:"500px"}}>
            <div className="row logos">
              <div className="logos-slide">
                <img className="image-fluid" src={carou2}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou3}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou4}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou6}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou7}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou8}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>

                <img className="image-fluid" src={carou2}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou3}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou4}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou6}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou7}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou8}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>

                <img className="image-fluid" src={carou2}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou3}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou4}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou6}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou7}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou8}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
              </div>
            <div className="logos-slide1" style={{marginTop:"25px"}}>
              <img className="image-fluid" src={carou2}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou3}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou4}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou6}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou7}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou8}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>

                <img className="image-fluid" src={carou2}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou3}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou4}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou6}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou7}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou8}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>

                <img className="image-fluid" src={carou2}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou3}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou4}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou6}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou7}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={carou8}  style={{objectFit:"contain", width:300,height:"auto"}} id="" alt=""/>
              </div>
            </div>
          </div>

          <div>
          <div id="counted" className="container" style={{ height: 500 }}>
            <div className="row text-center" style={{ margin: 50 }} data-aos="fade-up">
              <h2 className='imageDesc'>Diverse Culture, Vibrant People: Discovering Nusa Tenggara Timur</h2>
            </div>
            <div className="row d-flex justify-content-center" data-aos="fade-up">
              <div className="col-4 text-center">
              <img className="image-fluid" src={Count3}  style={{objectFit:"contain", width:"auto",height:100}} id="" alt=""/>
                <p className='imageDesc'>{count1}+ Island</p>
              </div>
              <div className="col-4 text-center">
                <img className="image-fluid" src={Count2}  style={{objectFit:"contain", width:"auto",height:100}} id="" alt=""/>
                <p className='imageDesc'>{count2}+ Culture</p>
              </div>
              <div className="col-4 text-center">
              <img className="image-fluid" src={Count1}  style={{objectFit:"contain", width:"auto",height:100}} id="" alt=""/>
                <p className='imageDesc'>{count3}M+ People</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{marginBottom:80}}>
          <div className="col-12" style={{marginTop:30 }}>
            <p className='imageDesc' style={{fontSize:'calc(2vw)'}}>  
              Ready to dive into the wonders of Nusa Tenggara Timur (NTT)? From breathtaking landscapes to rich cultural heritage, our website is your gateway to exploring every corner of this enchanting region. Start your journey with us today and unlock the secrets of NTT!
            </p>
          </div>
          <div className="col-3"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Home;