import React, { useState } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import backImage from '../Assets/ev1.png';
import frontImage from '../Assets/ev2.png';
import ticketEvent from '../Assets/ticket.png';
import DropDownEvent from '../Components/dropDownEvents';
import DropDownMenu from '../Components/dropDownEvents';
import Place1 from '../Assets/Place1.svg';
import taka1 from '../Assets/taka1.svg';
import taka2 from '../Assets/taka2.svg';
import taka3 from '../Assets/taka3.svg';
import kom1 from '../Assets/kom1.svg';
import kom2 from '../Assets/kom2.svg';
import kom3 from '../Assets/kom3.svg';
import bea1 from '../Assets/bea1.svg';
import bea2 from '../Assets/bea2.svg';
import bea3 from '../Assets/bea3.svg';
import pad1 from '../Assets/pad1.svg';
import pad2 from '../Assets/pad2.svg';
import pad3 from '../Assets/pad3.svg';
import Place2 from '../Assets/Place2.svg';
import Place3 from '../Assets/Place3.svg';
import Place4 from '../Assets/Place4.svg';


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
        images: [taka1, taka2, taka3, Place1],
        titles: ["Title 1", "Title 2"],
        descriptions: [
          "Taka Makassar, also known as The Underwater Island, is a breathtaking natural wonder nestled in the Flores Sea near Komodo National Park, Indonesia. This tiny sandbank emerges during low tide, attracting snorkelers and divers to explore its vibrant underwater world. With crystal-clear waters, diverse coral reefs, and an abundance of marine life, including colorful fish and occasional encounters with majestic creatures like manta rays, Taka Makassar offers a captivating experience for nature enthusiasts. Efforts to promote sustainable tourism and conservation are crucial to safeguarding this fragile ecosystem and ensuring its preservation for future generations to cherish and protect.", 
          "Experience a diverse array of activities at Taka Makassar. Begin your adventure by exploring the underwater wonders through snorkeling and diving, where you'll encounter vibrant coral reefs and fascinating marine life. After your underwater escapades, unwind on the sandy shores during low tide, indulging in the serene beauty of Taka Makassar through beach relaxation. Don't forget to capture the breathtaking scenery and vibrant marine life through photography, immersing yourself in the natural beauty of this unique destination. Enhance your experience by embarking on an island-hopping tour, discovering hidden gems and additional snorkeling or diving spots in the surrounding area. Lastly, witness the mesmerizing spectacle of the sunset casting a golden glow across the sea, marking the perfect end to a day filled with adventure and exploration.", 
          "In addition to its breathtaking natural allure, Taka Makassar is a destination brimming with cultural richness and unique traditions waiting to be explored. As visitors venture beyond the azure waters and sandy shores, they encounter a tapestry of local customs that unveil the essence of the region's heritage. Delving into the gastronomic delights of traditional cuisine offers a sensory journey through flavors rooted in generations of culinary expertise. The intricate artistry of local handicrafts, from intricately woven textiles to masterfully carved woodwork, showcases the skilled craftsmanship passed down through the ages. Moreover, participation in vibrant festivals and cultural events provides an immersive experience, where the pulse of the community beats in harmony with centuries-old traditions. Guided cultural tours offer insightful narratives, unveiling the stories behind ancient rituals and historical landmarks, enriching visitors with a deeper understanding of the region's identity. Through meaningful interactions with the warm-hearted locals, visitors forge connections that transcend language barriers, leaving an indelible mark of cultural appreciation long after departing from this enchanting haven nestled in the Flores Sea."
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Komodo Island",
    content: [
      {
        images: [kom1,kom2,kom3,Place2],
        titles: ["Title 1", "Title 2"],
        descriptions: [
          "Komodo Island, located in Indonesia, is renowned for its unique ecosystem and the famous Komodo dragons, the largest lizards on Earth. The island is part of the Komodo National Park, a UNESCO World Heritage Site, and a Biosphere Reserve. Its rugged terrain, diverse marine life, and rich biodiversity make it a haven for nature enthusiasts and adventurers alike.", 
          "Visitors to Komodo Island can engage in a variety of activities that showcase its natural beauty and wildlife. Hiking trails offer opportunities to encounter Komodo dragons in their natural habitat, while snorkeling and diving allow exploration of vibrant coral reefs teeming with marine life. For a panoramic view of the surrounding islands and crystal-clear waters, a trek to the summit of Padar Island is highly recommended. Additionally, relaxation seekers can unwind on the pink sands of Pink Beach, renowned for its picturesque scenery and excellent snorkeling spots.", 
          "Indonesia's rich cultural heritage is reflected in the cuisine of Komodo Island and its neighboring destinations. Traditional Indonesian dishes such as nasi goreng (fried rice), sate (grilled skewers), and rendang (slow-cooked meat in coconut milk) are widely available, infused with local flavors and spices. Seafood lovers can indulge in fresh catches like grilled fish and prawns, served with fragrant rice and sambal (spicy chili paste). Visitors can also sample exotic fruits such as rambutan and mangosteen, or enjoy refreshing coconut water straight from the source. Dining experiences on these islands offer a delightful fusion of flavors amidst breathtaking natural landscapes, creating unforgettable memories for travelers exploring this captivating region."
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Padar Island",
    content: [
      {
        images: [pad1,pad2,pad3,Place3],
        titles: ["Title 1", "Title 2"],
        descriptions: [
          "Padar Island, part of the Komodo National Park in Indonesia, is renowned for its rugged terrain, dramatic landscapes, and panoramic vistas. This picturesque island features steep hills, jagged cliffs, and pristine beaches, making it a haven for nature enthusiasts and adventure seekers alike. Visitors are drawn to Padar Island for its unparalleled views of the surrounding islands and crystal-clear waters, making it a must-visit destination for those exploring the Komodo region.", 
          "Activities on Padar Island cater to a variety of interests, from hiking to photography to relaxation. Hiking to the island's summit is a popular activity, offering breathtaking panoramic views of the surrounding landscapes and stunning sunrises or sunsets. Photography enthusiasts will find endless opportunities to capture the island's unique landscapes, with its rugged cliffs and vibrant flora providing striking compositions. For those seeking relaxation, the island's pristine beaches offer the perfect setting to unwind, soak up the sun, and swim in the clear turquoise waters. Visitors can also explore the island's hidden coves and secluded beaches by boat, discovering its untouched natural beauty from a different perspective.", 
          "The culture and cuisine of Padar Island offer a glimpse into Indonesia's rich heritage and culinary traditions. Local dishes are often infused with aromatic spices and fresh ingredients, reflecting the vibrant flavors of Indonesian cuisine. Seafood plays a prominent role in Padar Island's culinary scene, with grilled fish, prawns, and squid being popular choices among visitors. Traditional Indonesian dishes such as nasi goreng (fried rice), mie goreng (fried noodles), and sate (grilled skewers) are also widely available, providing a taste of authentic local flavors. Visitors can complement their meals with refreshing beverages like coconut water or tropical fruit juices, adding a refreshing touch to their dining experience. Dining on Padar Island offers not only delicious food but also an opportunity to immerse oneself in the rich culture and hospitality of the local communities."
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Pink Beach",
    content: [
      {
        images: [bea1,bea2,bea3,Place4],
        titles: ["Title 1", "Title 2"],
        descriptions: [
          "Pink Beach, located within the Komodo National Park in Indonesia, is renowned for its unique pink sand, a natural phenomenon caused by the presence of foraminifera shells. This stunning beach is nestled amidst rugged cliffs and lush greenery, offering visitors a tranquil retreat amidst breathtaking natural beauty. With its crystal-clear turquoise waters and soft pink sands, Pink Beach provides an idyllic setting for relaxation and exploration.",
          "Visitors to Pink Beach can engage in a variety of activities that showcase the beauty of this picturesque destination. Snorkeling and diving are popular pastimes, allowing travelers to discover the vibrant underwater world teeming with colorful coral reefs and marine life. Additionally, hiking enthusiasts can embark on scenic trails that lead to panoramic viewpoints, offering sweeping vistas of the surrounding coastline and islands. For a truly unforgettable experience, boat tours around the area provide opportunities to explore hidden coves, pristine beaches, and secluded islands, including nearby Padar Island and its iconic landscapes.",
          "The culture and cuisine of Pink Beach reflect the rich heritage of Indonesia's maritime communities. Visitors can indulge in a variety of traditional Indonesian dishes infused with local flavors and spices. Fresh seafood, such as grilled fish and prawns, is a highlight of the culinary scene, sourced directly from the surrounding waters. Dishes like nasi goreng (fried rice), sate (grilled skewers), and gado-gado (vegetable salad with peanut sauce) offer a taste of authentic Indonesian cuisine. Visitors can also sample tropical fruits like mangoes, pineapples, and bananas, adding a refreshing touch to their dining experience. Dining on Pink Beach not only provides delicious food but also offers an opportunity to immerse oneself in the vibrant culture and hospitality of the local communities.",
        ]
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
      <section className="background-section" style={{marginBottom:200}}>
        <div style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', height: '50vh', position: 'relative' }}>
        </div>
        <div className="d-flex justify-content-center" style={{ zIndex: 2, position: "absolute", top: 60}}>
          <img src={frontImage} alt="imgg" style={{ width: "80%" }} />
        </div> 
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{marginLeft:100}}>
              <h1 style={{color:"black", marginBottom:30}}>{selectedEvent.name}</h1>
              {selectedEvent.content[0].images.map((image, i) => (
                  i === 1 && (
                    <img
                      key={i}
                      src={selectedEvent.content[0].images[0]}
                      alt="img"
                      style={{width:300, height:"auto"}}
                    />
                  )
                ))}
              <p style={{marginTop:30}}>{selectedEvent.content[0].descriptions[0]}</p>
              {selectedEvent.content[0].titles.map((title, i) => (
                <h2 key={i}>{title}</h2>
              ))}
                {selectedEvent.content[0].images.map((image, i) => (
                  i === 1 && (
                    <img
                      key={i}
                      src={selectedEvent.content[0].images[1]}
                      alt="img"
                      style={{width:300, height:"auto",marginBottom:30}}
                    />
                  )
                ))}
              <h1 style={{color:"black"}}>List of Activities</h1>
              <p>{selectedEvent.content[0].descriptions[1]}</p>
            </div>
            <div className="col-5" style={{marginLeft:20, marginBottom :20}}>
                {selectedEvent.content[0].images.map((image, i) => (
                  i === 1 && (
                    <img
                      key={i}
                      src={selectedEvent.content[0].images[2]}
                      alt="img"
                      style={{width:300, height:"auto", marginTop:70,marginBottom:30}}
                    />
                  )
                ))}
              <p>{selectedEvent.content[0].descriptions[2]}</p>
            </div>
          </div>
        </div>
      </section>  

      <section className='event-2'>
        <div className="container">
          <div className="row" >
            <p style={{marginLeft:100}} id='titleTxt'> Explore {selectedEvent.name} Event</p>
            <div className="container" >
              <div className="d-flex justify-content-center">                
                  <img src={ticketEvent} style={{
                  width: '80%',
                  height: 'auto',
                  flexShrink: 0,
                  maxWidth: '100%',
                  marginTop: '50px'
                }} />
              </div>
              <div className="d-flex justify-content-center">                
                  <img src={ticketEvent} style={{
                  width: '80%',
                  height: 'auto',
                  flexShrink: 0,
                  maxWidth: '100%',
                  marginTop: '50px'
                }} />
              </div>
              <div className="d-flex justify-content-center">                
                  <img src={ticketEvent} style={{
                  width: '80%',
                  height: 'auto',
                  flexShrink: 0,
                  maxWidth: '100%',
                  marginTop: '50px'
                }} />
              </div>
              <div className="d-flex justify-content-center">                
                  <img src={ticketEvent} style={{
                  width: '80%',
                  height: 'auto',
                  flexShrink: 0,
                  maxWidth: '100%',
                  marginTop: '50px',
                  marginBottom: '80px'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Event;