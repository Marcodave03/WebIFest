import React, { useEffect } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/Page.css';
import explores from '../Assets/explore.jpg';
import padar from '../Assets/padar.jpeg';
import boat from '../Assets/boat-2.jpeg';
import resort1 from '../Assets/resort-1.jpg';
import resort2 from '../Assets/resort-2.jpg';
import resort3 from '../Assets/resort-3.jpg';
import resort4 from '../Assets/resort-4.jpg';
import resort5 from '../Assets/resort-5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Initialize Swiper core components


function Place() {
  useEffect(() => {
    AOS.init();
  }, []);

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
    marginLeft: '50px',
    borderRadius: '20px'
  };

  const tripImage = {
    width: '444px',
    height: '550px',
    backgroundSize: 'cover',
    backgroundImage: `url(${boat})`,
    display: 'flex',
    marginLeft: '20px'
  };

  const mostVisited = {
    color: 'rgba(0, 0, 0, 0.80)',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: 'Almarai',
    fontSize: '80px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  };

  const resortImg1 = {
    backgroundImage: `url(${resort1})`,
    width: '417px',
    height: '540px',
    borderRadius: '10px',
    border: '1px solid #FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    margin: 'auto',
  };

  const resortImg2 = {
    backgroundImage: `url(${resort2})`,
    width: '417px',
    height: '540px',
    borderRadius: '10px',
    border: '1px solid #FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    margin: 'auto',
  };

  const resortImg3 = {
    backgroundImage: `url(${resort3})`,
    width: '417px',
    height: '540px',
    borderRadius: '10px',
    border: '1px solid #FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    margin: 'auto',
  };

  const resortImg4 = {
    backgroundImage: `url(${resort4})`,
    width: '417px',
    height: '540px',
    borderRadius: '10px',
    border: '1px solid #FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    margin: 'auto',
  }; 

  const resortImg5 = {
    backgroundImage: `url(${resort5})`,
    width: '417px',
    height: '540px',
    borderRadius: '10px',
    border: '1px solid #FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    margin: 'auto',
  }; 

  return (
    <div className="Place">
      <Navbar />
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

      <section className="mostVisited">
        <div className="container">
          <div className="row">
            <div className="col-6" style={rectangleStyle}></div>
            <div className='col-6'>
              <div className='row-1' style={mostVisited}>
                <p> MOST VISITED </p>
                <p> PLACES 2023 </p>
              </div>
              <div className='row-2'>
                <a href=''> Padar Island </a>
              </div>
              <div className='row-3'>
                <p> Explore rugged hills, clear waters, and stunning views in Indonesia's Komodo National Park.
                  A hidden gem for adventurers and nature lovers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='tripReservation'>
        <div className="container">
          <div className="row-1-trip" style={{ paddingTop: 10 }}>
            <div className='row-2'>
              <div className='col-6-1'>
                <p id='tripText'> Trip Reservation </p>
                <div id='boat-img' style={tripImage}></div>
              </div>
              <div className='col-6-2'>
                <p id='boat-type'> Boat Type: </p>
                <p id='boat-type-desc'> Embark on our Sunset Cruise Adventure aboard our luxurious catamaran,
                  designed for comfort and style. Feel the gentle sway of the waves as you indulge in an evening of unparalleled relaxation.</p>
                <p id='price'> Price: </p>
                <p id='price-desc'> Set sail into the horizon with our Sunset Cruise Adventure
                  starting at $99 per person. Treat yourself to an unforgettable journey as the sun dips below the waterline in a symphony of colors.</p>
                <p id='include'> Include: </p>
                <ul className='include-list'>
                  <li> Scenic cruise along the stunning coastline </li>
                  <li> Complimentary welcome drinks and light snacks</li>
                  <li> Onboard entertainment and live music </li>
                  <li> Experienced captain and crew ensuring a safe and enjoyable voyage </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotels">
        <div className="container">
          <div className="row-1-htl">
            <p id='htlTxt'> Hotels </p>
          </div>
          <div className="row-2-htl">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img style={resortImg1} />
              </SwiperSlide>
              <SwiperSlide>
                <img style={resortImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <img style={resortImg3} />
              </SwiperSlide>
              <SwiperSlide>
                <img style={resortImg4} />
              </SwiperSlide>
              <SwiperSlide>
                <img style={resortImg5} />
              </SwiperSlide>
            </Swiper> 
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Place;
