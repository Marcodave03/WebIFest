// import React from 'react';
import React, { useRef, useState } from 'react';
import '../App';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/Page.css';
import explores from '../Assets/explore.jpg';
import padar from '../Assets/padar.jpeg';
import boat from '../Assets/boat-2.jpeg'
import resort1Img from '../Assets/resort-1.jpg';
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { text } from 'stream/consumers';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';


SwiperCore.use([EffectCoverflow, Pagination]);

function MySwiper() {
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }, []);
}

function Place() {
  AOS.init();

  const exploreSectionStyle = {
    backgroundImage: `url(${explores})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  };

  const rectangleStyle = {
    width: '444px',
    height: '550px',
    backgroundSize: 'cover',
    backgroundImage: `url(${padar})`,
    display: 'flex',
    // marginLeft: '-200px',
    borderRadius: '20px'
  };

  //boat img
  const tripImage = {
    width: '444px',
    height: '550px',
    backgroundSize: 'cover',
    backgroundImage: `url(${boat})`,
    display: 'flex',
    marginLeft: '20px'
  };

  // most visited txt
  const mostVisited = {
    color: 'rgba(0, 0, 0, 0.80)',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: 'Almarai',
    fontSize: '80px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  };

  return (
    <div className="Place">
      <Navbar />
      {/* Explore */}
      <section className='explore' style={exploreSectionStyle}>
        <div className="container">
          <div className="row" >
            <div className="col d-flex">
              <div id="tagline">
                <p data-aos="fade-up" id="p1" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  EXPLORE NUSA
                </p>
                <p data-aos="fade-up" id="p2" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  TENGGARA TIMUR
                </p>
                <p data-aos="fade-up" id="p3" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  AND SEE PLACES
                </p>
                <p data-aos="fade-up" id="p4" data-aos-duration="3000" style={{ textAlign: 'left' }}>
                  TO VISIT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most visited places */}
      <section>
        <div className="container">
          <div className="row" style={{marginTop:"60px"}}>
            <div className="col-12 col-sm-12 col-lg-6 col-xl-3" >
              <div style={rectangleStyle}></div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-xl-9" style={{ textAlign: 'center' }}  >
              <p style={mostVisited}> MOST VISITED </p>
              <p style={mostVisited}> PLACES 2023 </p>
            </div>
          </div>
        </div>
      </section>
      <header className="Place-header">
      </header>
      <Footer />
    </div>
  );
}

export default Place;
