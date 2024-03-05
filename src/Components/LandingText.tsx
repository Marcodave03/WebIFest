import React, { useState, useEffect } from 'react';
import { Scroll } from '@react-three/drei';
import AOS from 'aos';
import 'aos/dist/aos.css';
interface LandingTextProps {
  scrollOffset: number;
}

export const LandingText: React.FC<LandingTextProps> = ({ scrollOffset }) => {

    useEffect(() => {
        AOS.init({ 
          duration: 1000, // Default animation duration
          easing: 'ease', // Default easing for animations
          once: true // Whether animations should only happen once
        });
      }, []);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
  return (
    <Scroll html>
      <div className="landing-text-container">
            <section>
                <div className="container">
                    <div className="row mt-5" >
                        <div className="col-6">
                            <div id='page1'>
                                <div id='entrance' className="d-flex justify-content-center">
                                    <div id='entranceText'>
                                        <h1 data-aos="fade-up" style={{color:"white",fontSize:50}} className='landingTitle'>EXPLORE THE WONDERS OF</h1>
                                        <h1 data-aos="fade-up" style={{color:"white",fontSize:80}} className='landingTitle'>KOMODO DRAGON</h1>
                                        <h1 data-aos="fade-up" style={{color:"white",fontSize:80}} className='landingTitle'>NUSA TENGGARA</h1>
                                        <h1 data-aos="fade-up" style={{color:"white",fontSize:80}} className='landingTitle'>TIMUR ( NTT ) </h1>
                                        <h1 data-aos="fade-up" style={{color:"white",fontSize:50}} className='landingTitle'>WITH US</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </section>


        <div id="bigContainer"  style={{ transform: `translateY(-${scrollOffset * 100}%)`, height:"100vh", width:"100vw" }}>
            <section>
                <div className="container">
                    <div className="row">
                        <div>
                            <div id='page1' className="col-6 d-flex justify-content-center" style={{marginLeft:70}}>
                                <div id='entrance'>
                                    <div id='entranceText' style={{color:"white",fontSize:'calc(1vw + 10px)'}}>
                                        <div  style={{marginBottom:30}}>
                                            <div>Embark on an expedition into the enchanting realm of Komodo, where the echoes of ancient civilizations and the majesty of nature converge in a symphony of wonder. </div>
                                            <div>Traverse rugged terrains that bear the footprints of prehistoric dragons, their legacy woven into the very fabric of this mythical land. Amidst lush jungles resonating with the calls of exotic birds, </div>
                                            <div>immerse yourself in an ecosystem teeming with life, each moment a testament to the enduring power of Mother Nature.</div>
                                        </div>

                                        <div >
                                            <div>Dive into the crystalline depths that embrace Komodo's shores, where an underwater paradise awaits your exploration. Discover vibrant coral reefs pulsating with life, </div>
                                            <div>where vibrant fish dart among intricate formations, and graceful mantas glide with effortless elegance. As you uncover the secrets hidden beneath the surface, let the enchantment of Komodo weave its spell, beckoning you to delve deeper into its mysteries and embrace the adventure of a lifetime.</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </section>
        </div>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6">
                        <div id='page1'>
                            <div id='entrance'>
                            <div id='entranceText' className="text-center">
                                <h1  style={{color:"white",fontSize:50}} className='landingTitle'>Embarking on a Journey</h1>
                                <h1  style={{color:"white",fontSize:50}} className='landingTitle'>Through Indonesia's</h1>
                                <h1  style={{color:"white",fontSize:50}} className='landingTitle'>Hidden Treasures</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section> 

            <div id="bigContainer"  style={{ transform: `translateY(-${scrollOffset * 100}%)`, height:"100vh", width:"100vw" }}>
            <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div id='page1'>
                            <div id='entrance' >
                                <div
                                    
                                    id='entranceText'
                                    className={`text-center ${isHovered ? 'hovered' : ''}`}
                                    style={{ margin: 140, fontSize: 30 }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Explore the vibrant marine life surrounding the islands of Alor and Rote, where pristine coral reefs and underwater caverns beckon divers and snorkelers alike. Witness the mesmerizing spectacle of traditional dance and music, passed down through generations as a celebration of life and heritage. As you journey through NTT, from the towering volcanoes of Lembata to the secluded beaches of Sumba, let the spirit of exploration guide you, revealing the hidden gems of this captivating region.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>



            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id='page1'>
                                <div id='entrance'>
                                <div id='entranceText' className="text-center">
                                    <h1  style={{color:"white"}} className='landingTitle'>Enjoy Your Journey</h1>
                                    <h1  style={{color:"white"}} className='landingTitle'>Explore With Us</h1>
                                    <h1  style={{color:"white"}} className='landingTitle'>Learn NTT Culture</h1>
                                    <h1  style={{color:"white"}} className='landingTitle'></h1>
                                    <h1  style={{color:"white"}} className='landingTitle'></h1>
                                    <h1  style={{color:"white", fontSize:130}} className='landingTitle'>NUSA TRAVEL</h1>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </section> 

        <div id="bigContainer"  style={{ transform: `translateY(-${scrollOffset * 100}%)`, height:"100vh", width:"100vw" }}>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div id='page1'>
                                <div id='entrance'>
                                    <div id='entranceText' className="text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </section>
        </div>


    <section>
      <div className="container">
        <div className="row">
          <div className="col" style={{marginLeft:70}}>
            <div id='page1'>
              <div id='entrance'>
                <div className="landingTitleWrapper"  >
                  <h1 className='landingTitle'>Geography: </h1>
                  <p className='landingDescription'>
                    NTT is known for its diverse landscapes, ranging from white sandy beaches and crystal-clear waters to rugged hills and volcanic landscapes. The province is part of the Lesser Sunda Islands, situated between the larger islands of Java to the west and Timor to the east.
                  </p>
                  <h1 className='landingTitle'>Culture and Ethnicity: </h1>
                  <p className='landingDescription'>
                    NTT is home to a rich tapestry of cultures and ethnicities. The majority of the population are of Austronesian descent, with distinct cultural practices and traditions. Each island within NTT often has its own unique culture, language, and traditions.
                  </p>
                  <h1 className='landingTitle'>Tourism: </h1>
                  <p className='landingDescription'>
                    NTT is a popular tourist destination, attracting visitors with its stunning natural beauty and rich cultural heritage. Highlights include Komodo National Park, famous for its Komodo dragons and underwater biodiversity, as well as destinations like Labuan Bajo, Maumere, and the Kelimutu volcano with its tri-colored crater lakes.
                  </p>
                  <h1 className='landingTitle'>Diving and Snorkeling: </h1>
                  <p className='landingDescription'>
                    The waters surrounding NTT are renowned for their vibrant coral reefs and diverse marine life. Diving and snorkeling enthusiasts flock to sites like Komodo Island, where they can explore colorful coral gardens and encounter a wide variety of marine species.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </section>

    <div id="bigContainer"  style={{ transform: `translateY(-${scrollOffset * 100}%)`, height:"100vh", width:"100vw" }}>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-11">
                            <div id='page1'>
                                <div id='entrance'  >
                                    <div style={{fontSize:80}} id='entranceText' className="text-center">
                                        <a style={{textDecoration:'none'}} id='linkToHome' href="/home">Let's Dive in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    </div>

    </Scroll>
  );
};
