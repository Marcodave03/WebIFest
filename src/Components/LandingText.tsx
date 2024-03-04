import React from 'react';
import { Scroll } from '@react-three/drei';
import '../Pages/Style/landing.css';

interface LandingTextProps {
  scrollOffset: number;
}

export const LandingText: React.FC<LandingTextProps> = ({ scrollOffset }) => {
  return (
    <Scroll html>
      <div className="landing-text-container">
            <section>
                <div className="container">
                    <div className="row mt-5" >
                        <div className="col-6">
                            <div id='page1'>
                                <div id='entrance'>
                                    <div id='entranceText' className="text-center">
                                        <h1 style={{color:"white"}} className='landingTitle'>Explore</h1>
                                        <h1 style={{color:"white"}} className='landingTitle'>East Nusa</h1>
                                        <h1 style={{color:"white"}} className='landingTitle'>Tenggara</h1>
                                        <h1 style={{color:"white"}} className='landingTitle'>With us</h1>
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
                        <div className="col-6"></div>
                        <div className="col-6">
                        <div id='page1'>
                            <div id='entrance'>
                            <div id='entranceText' className="text-center">
                                <h1 style={{color:"white"}} className='landingTitle'>Explore</h1>
                                <h1 style={{color:"white"}} className='landingTitle'>East Nusa</h1>
                                <h1 style={{color:"white"}} className='landingTitle'>Tenggara</h1>
                                <h1 style={{color:"white"}} className='landingTitle'>With us</h1>
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
                        <div className="col-12">
                            <div id='page1'>
                                <div id='entrance'>
                                <div id='entranceText' className="text-center">
                                    <h1 style={{color:"white"}} className='landingTitle'>Explore</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>East Nusa</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>Tenggara</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>With us</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>Explore</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>East Nusa</h1>
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
                        <div className="col-6">
                            <div id='page1'>
                                <div id='entrance'>
                                <div id='entranceText' className="text-center">
                                    <h1 style={{color:"white"}} className='landingTitle'>Explore</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>East Nusa</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>Tenggara</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>With us</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>Explore</h1>
                                    <h1 style={{color:"white"}} className='landingTitle'>East Nusa</h1>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </section>


        </div>

    </Scroll>
  );
};
