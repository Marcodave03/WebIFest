import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import {Link} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/Page.css';
import explores from '../Assets/explore.jpg';
import padar from '../Assets/padar.jpeg';
import boat from '../Assets/boat-2.jpeg';
import resort1 from '../Assets/resort-1.svg';
import resort2 from '../Assets/resort-2.svg';
import resort3 from '../Assets/resort-3.svg';
import resort4 from '../Assets/resort-4.svg';
import resort5 from '../Assets/resort-5.svg';
import Review1 from '../Assets/Review1.svg';
import Review2 from '../Assets/Review2.svg';
import Review3 from '../Assets/Review3.svg';
import Review4 from '../Assets/Review4.svg';
import Review5 from '../Assets/Review5.svg';
import Place1 from '../Assets/Place1.svg';
import Place2 from '../Assets/Place2.svg';
import Place3 from '../Assets/Place3.svg';
import Place4 from '../Assets/Place4.svg';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


function Place() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const showSlider = (type: string) => {
    let newIndex;
    if (type === 'next') {
      newIndex = currentIndex === 3 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? 3 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleNextClick = () => showSlider('next');
    const handlePrevClick = () => showSlider('prev');

    const nextButton = nextRef.current;
    const prevButton = prevRef.current;

    if (nextButton) nextButton.addEventListener('click', handleNextClick);
    if (prevButton) prevButton.addEventListener('click', handlePrevClick);

    return () => {
      if (nextButton) nextButton.removeEventListener('click', handleNextClick);
      if (prevButton) prevButton.removeEventListener('click', handlePrevClick);
    };
  }, [currentIndex]);
  
// function Place() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const showSlider = (type: string) => {
//     const newIndex = type === 'next' ? currentIndex + 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     const nextButton = document.getElementById('next');
//     const prevButton = document.getElementById('prev');

//     if (nextButton) nextButton.onclick = () => showSlider('next');
//     if (prevButton) prevButton.onclick = () => showSlider('prev');

//     const runNextAuto = setInterval(() => {
//       showSlider('next');
//     }, 7000);

//     return () => {
//       clearInterval(runNextAuto);
//     };
//   }, [currentIndex]);


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
    fontSize: '70px',
    fontStyle: 'normal',
    fontWeight: '400',
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
    margin: 'auto'
  };





  return (
    <div className="Place" style={{backgroundColor:"#011C1D"}}>
      <Navbar />
      <section className='explore secs' style={exploreSectionStyle}>
        <div className="container">
          <div className="row">
            <div className="col d-flex">
              <div id="tagline">
                <p data-aos="fade-up" id="p1" data-aos-duration="3000">
                  EXPLORE NUSA
                </p>
                <p data-aos="fade-up" id="p2" data-aos-duration="3000">
                  TENGGARA TIMUR
                </p>
                <p data-aos="fade-up" id="p3" data-aos-duration="3000">
                  AND SEE PLACES
                </p>
                <p data-aos="fade-up" id="p4" data-aos-duration="3000">
                  TO VISIT
                </p>
              </div>
            </div> 
          </div>
        </div>
      </section>

      <section className="mostVisited secs" style={{margin:0}}>
        <div className="container">
          <div className="row">
          <div className="carousel">
              <div className="list">
                  <div  className={currentIndex === 0 ? 'item active' : 'item'}>
                      <img src={Place1}></img>
                      <div className="content">
                          <div className="author">Popular PLaces</div>
                          <div className="title">TAKA</div>
                          <div className="title">MAKASSAR</div>
                          <div className="topic">ISLAND </div>
                          <div className="des" style={{fontSize:20}}>  
                            Dive into the azure waters surrounding Takam Makassar, a picturesque sandbar in the heart of Komodo National Park. Snorkel alongside vibrant coral reefs and an array of tropical fish, or simply bask in the sun on this pristine stretch of sand.
                          </div>
                          <div className="buttons">
                          </div>
                      </div>
                  </div>
                  <div className={currentIndex === 1 ? 'item active' : 'item'}>
                      <img src={Place2}></img>
                      <div className="content">
                          <div className="title">KOMODO</div>
                          <div className="title">DRAGON</div>
                          <div className="topic">ISLAND</div>
                          <div className="des">
                            Encounter the legendary Komodo dragons in their natural habitat on Komodo Island. Trek through rugged landscapes and witness these ancient creatures up close, amidst a backdrop of breathtaking scenery and diverse wildlife.
                          </div>
                          <div className="buttons">
                          </div>
                      </div>
                  </div>
                  <div className={currentIndex === 2 ? 'item active' : 'item'}>
                      <img src={Place3}></img>
                      <div className="content">
                          <div className="title">PADAR</div>
                          <div className="title">ISLAND</div>
                          <div className="topic">SCENERY</div>
                          <div className="des">
                            Ascend to the summit of Padar Island for unparalleled panoramic views of the Komodo archipelago. Marvel at the contrasting landscapes of rugged cliffs, lush greenery, and pink-hued beaches, offering the perfect backdrop for memorable photographs and unforgettable moments.                          </div>
                          <div className="buttons">
                          </div>
                      </div>
                  </div>
                  <div className={currentIndex === 3 ? 'item active' : 'item'}>
                      <img src={Place4}></img>
                      <div className="content">
                          <div className="title">PINK</div>
                          <div className="title">BEACH</div>
                          <div className="topic">PARADISE</div>
                          <div className="des">
                            Experience the enchanting allure of Pink Beach, where the sand takes on a rosy hue, creating a surreal and captivating landscape. Snorkel amidst vibrant coral gardens teeming with marine life, soak up the sun on soft pink sands, and immerse yourself in the tranquility of this idyllic paradise.                          </div>
                          <div className="buttons">
                          </div>
                      </div>
                  </div>
              </div>
              <div className="thumbnail">
                  <div className={currentIndex === 0 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(0)}>
                      <img src={Place1}></img>
                      <div className="content">
                          <div className="title">
                              Taka
                          </div>
                          <div className="description">
                              Makassar
                          </div>
                      </div>
                  </div>
                  <div className={currentIndex === 1 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(1)}>
                      <img src={Place2}></img>
                      <div className="content">
                          <div className="title">
                              Komodo
                          </div>
                          <div className="description">
                              Island
                          </div>
                      </div>
                  </div>
                  <div className={currentIndex === 2 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(2)}>
                      <img src={Place3}></img>
                      <div className="content">
                          <div className="title">
                              Padar
                          </div>
                          <div className="description">
                              Island
                          </div>
                      </div>
                  </div>
                  <div className={currentIndex === 3 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(3)}>
                      <img src={Place4}></img>
                      <div className="content">
                          <div className="title">
                              Pink
                          </div>
                          <div className="description">
                              Beach
                          </div>
                      </div>
                  </div>
              </div>
              <div className="arrows">
                  <button ref={prevRef} id="prev">{'<'}</button>
                  <button ref={prevRef} id="prev">{'>'}</button>
              </div>
          </div>
          </div>
        </div>
      </section>


      <section className='tripReservation secs'>
        <div className="container">
          <div className="row-1-trip" style={{ paddingTop: 10 }}>
            <div className='row-2'>
              <div className='col-6-1' data-aos="fade-up" >
                <p id='tripText'> Trip Reservation </p>
                <div id='boat-img' style={tripImage}></div>
              </div>
              <div className='col-6-2'data-aos="fade-up" >
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
                <Link to="/boat" style={{ textDecoration: 'none',marginTop:50 }} > 
                  <div className="d-flex justify-content-center" style={{backgroundColor:"white", borderRadius:"30px", maxWidth:"200px", padding:5, color:"#011C1D", fontSize:25}}>
                    See more
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="hotels secs" style={{marginBottom:120}}>
        <div className="container">
          <div className="row-1-htl" style={{marginBottom:30}}>
            <p id='htlTxt' style={{color:"white"}}> Nusa Resort </p>
            <div className="d-flex justify-content-center" style={{fontSize:30}}>
              <p style={{color:"white"}}>"Discover Tranquility: NTT Resort - Your Gateway to Serenity"</p>
            </div>
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
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
              <SwiperSlide  style={{ width: '400px' }}>
                <img style={resortImg1} />
                <img src={Review1} style={{marginTop:10}} />
              </SwiperSlide>
              <SwiperSlide  style={{ width: '400px' }}>
                <img style={resortImg2} />
                <img src={Review2} style={{marginTop:10}} />
              </SwiperSlide>
              <SwiperSlide  style={{ width: '400px' }}>
                <img style={resortImg3} />
                <img src={Review3} style={{marginTop:10}} />
              </SwiperSlide>
              <SwiperSlide  style={{ width: '400px' }}>
                <img style={resortImg4}  />
                <img src={Review4} style={{marginTop:10}} />
              </SwiperSlide>
              <SwiperSlide  style={{ width: '400px' }}>
                <img style={resortImg5} />
                <img src={Review5} style={{marginTop:10}} />
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

{/* <Swiper
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
            </Swiper> */}
