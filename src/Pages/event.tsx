import React, { useState } from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import backImage from '../Assets/ev1.png';
import frontImage from '../Assets/ev2.png';
import ticketEvent from '../Assets/ticket.png';
import DropDownEvent from '../Components/dropDownEvents';
import DropDownMenu from '../Components/dropDownEvents';

// Define array containing objects for each event with their respective images, titles, and descriptions
export interface EventData {
  id: number;
  name: string;
  content: {
    images: string[];
    titles: string[];
    descriptions: string[];
  }[];
}

const eventsData: EventData[] = [
  {
    id: 1,
    name: "Taka Makassar",
    content: [
      {
        images: ["image1_2.jpg", "image1_1.jpg", "image1_3.jpg"],
        titles: ["Apanih", "Title 2"],
        descriptions: ["Disini ada Marco", "asf 2", "asfafsdafs 3"]
      }
    ]
  },
  {
    id: 2,
    name: "Event 2",
    content: [
      {
        images: ["image2_1.jpg", "image2_2.jpg", "image2_3.jpg"],
        titles: ["Title 1", "Title 2"],
        descriptions: ["asfsdafdasfd 1", "Descriptdsfdsfdsfsdfdion 2", "Descriptfdsfdsfsdfsdfion 3"]
      }
    ]
  },
  // Add more events as needed
];

function Event() {
  const [selectedEvent, setSelectedEvent] = useState<EventData>(eventsData[0]); // Default to the first event

  const handleEventChange = (event: EventData) => {
    setSelectedEvent(event);
  };

  return (
    <div className="Event">
      <Navbar />
      <DropDownMenu eventsData={eventsData} onEventChange={handleEventChange} />
      <section className="background-section" style={{marginBottom:300}}>
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
              <h1 style={{color:"black"}}>{selectedEvent.name}</h1>
              <p>{selectedEvent.content[0].descriptions[0]}</p>
              {/* Render titles */}
              {selectedEvent.content[0].titles.map((title, i) => (
                <h2 key={i}>{title}</h2>
              ))}
              <img src={backImage} alt="imgg" style={{ width: "200px"}} />
              <h1 style={{color:"black"}}>List of Activities</h1>
              <p>{selectedEvent.content[0].descriptions[1]}</p>
            </div>
            <div className="col-6">
              <img src={backImage} alt="imgg" style={{ width: "200px"}} />
              <p>{selectedEvent.content[0].descriptions[2]}</p>
            </div>
          </div>
        </div>
      </section>  

      {/* Render images for the selected event */}
      <section className='event-2'>
        <div className="container">
          <div className="row">
            <p id='titleTxt'> Explore {selectedEvent.name} </p>
            {/* Render images */}
            {selectedEvent.content[0].images.map((image, i) => (
              <img key={i} src={image} alt={`${selectedEvent.name} Image ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Event;