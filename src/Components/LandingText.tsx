import React from 'react';
import { Scroll } from '@react-three/drei';
import '../Pages/Style/landing.css';

interface LandingTextProps {
  scrollOffset: number;
}

export const LandingText: React.FC<LandingTextProps> = ({ scrollOffset }) => {
  return (
    <Scroll html>
      <div className="landing-text-container" style={{ zIndex: 3 }}>
        <div id="bigContainer" className="d-flex align-items-center justify-content-center" style={{ transform: `translateY(-${scrollOffset * 100}%)`, height:"100vh", width:"100vw" }}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <div id='page1'>
                        <div id='entrance'>
                        <div id='entranceText' className="text-center">
                            <h1 className='landingTitle'>Explore</h1>
                            <h1 className='landingTitle'>East Nusa</h1>
                            <h1 className='landingTitle'>Tenggara</h1>
                            <h1 className='landingTitle'>With us</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <div id='page1'>
                        <div id='entrance'>
                        <div id='entranceText' className="text-center">
                            <h1 className='landingTitle'>Explore</h1>
                            <h1 className='landingTitle'>East Nusa</h1>
                            <h1 className='landingTitle'>Tenggara</h1>
                            <h1 className='landingTitle'>With us</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Scroll>
  );
};
