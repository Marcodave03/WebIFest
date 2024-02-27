import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    applyScrollingEffects(); // Call the applyScrollingEffects function when the component mounts
  }, []);

  const [parallaxStopped, setParallaxStopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500; // Adjust this value as needed

      if (scrollPosition > threshold) {
        setParallaxStopped(true);
      } else {
        setParallaxStopped(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <Navbar/>
      <section className="parallax">
        <img src={image1} alt="imgg" className = "pImg" id="beach1"/>
        <img src={image2} alt="imgg" className = "pImg" id="beach2"/>
        <img src={image3} alt="imgg" className = "pImg" id="beach3"/>
        <h2 id="text1">Nusa Travel</h2>
        <img src={image4} alt="imgg" className = "pImg" id="beach4"/>
        <img src={image5} alt="imgg" className = "pImg" id="beach5"/>
      </section>

      <section className="sec" id="sec">
        <div className="d-flex justify-content-center">
            <h2 className="">Nusa Tenggara Timur</h2>
          </div>
          
          <div className="container d-flex justify-content center">
            <div className="row">
              <div className="col text-center">
                <img src={Home1} alt="imgg" id="" style={{ height:"400px" }}/>
                <h2>Stunning Landscape of beaches and mountains</h2>
              </div>
            </div>
          </div>

          <div className="container">
          <div className="row d-flex justify-content-center">
            <div>
              <img src={Home2} alt="imgg" id="" style={{ height:"400px" }}/>
            </div>
            <div>
              <h2>Rich Cultural heritage and unique traditions</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div>
              <img src={Home3} alt="imgg" id="" style={{ height:"400px" }}/>
            </div>
            <div>
              <h2>Rich Cultural heritage and unique traditions</h2>
            </div>
          </div>
        </div>

        <div className="container" style={{ position: "relative" }}>
          <div>
            <img src={outside} alt="imgg" style={{height: "1000px"}} />
          </div>
          <div>
            <img src={inside} alt="imgg" style={{height: "750px"}} />
          </div>
          <div>
            <p>Home to diverse ethnic groups and languages</p>
          </div>
        </div>
      </section>

      <section className="sec1">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas dicta, eaque obcaecati molestias accusantium harum illum itaque nesciunt culpa accusamus dignissimos commodi aliquid soluta fugiat et iste ad ex vero impedit saepe, nobis iusto, ratione optio? Voluptates ea odit distinctio atque dolor dolore excepturi at aut error ipsam maxime possimus quasi aliquid ex accusamus voluptate iste repudiandae maiores, non nisi eos corporis temporibus facilis velit. Totam inventore quia veritatis magni repellendus molestias iusto, quod explicabo expedita nihil, facilis vero deleniti ad quasi quae ex ullam illo repudiandae, cum a! Consectetur vitae dolorum soluta perspiciatis libero nostrum porro eius repudiandae quibusdam, debitis quia corrupti ratione quos eveniet ducimus temporibus eum rem eaque maxime quis aperiam vel itaque. Dicta delectus tempora quisquam adipisci dolore ut, in quia reiciendis exercitationem pariatur? Aliquid eos totam facere vel temporibus libero enim illum dignissimos officia, consectetur et magni nobis at cum! Mollitia reiciendis alias corrupti voluptatem hic! Fuga laudantium, in laboriosam quos, ipsum labore qui deleniti provident asperiores distinctio minus impedit! Molestias eveniet corrupti exercitationem adipisci ratione laudantium error nam est minus ea architecto labore quaerat mollitia eligendi nobis, cumque recusandae voluptatibus? Ab magnam optio mollitia nulla officia voluptate animi consequatur ut aspernatur vero accusantium quibusdam atque ipsum ullam repellat assumenda cum enim quae laborum eius expedita, et unde? Nulla vel repellendus corrupti magni velit, excepturi debitis voluptas fugiat suscipit vero et recusandae? Eum distinctio numquam, nostrum omnis aperiam quae porro nobis reprehenderit. Saepe distinctio animi aliquid ipsam. Voluptatibus cum a nesciunt necessitatibus, dolores nobis pariatur fugit, totam iste inventore blanditiis quasi. Rem similique, possimus eius iste sunt ea atque deleniti facere neque at facilis eligendi, error libero sit blanditiis iure commodi magnam aut rerum nam accusamus architecto? Eos quod nam blanditiis deleniti illo tenetur, sint magnam dolores rem sunt iste veniam hic consequatur perspiciatis dolor. Placeat doloremque nobis odit illum, perspiciatis libero aspernatur! Itaque doloribus voluptate doloremque sapiente commodi. Consequatur distinctio non ipsam maxime magnam dolor repellendus esse voluptatum totam dignissimos amet culpa, quam sunt, rem placeat at unde temporibus veritatis. Eligendi facilis quae dicta veniam, molestiae eum, corrupti maiores adipisci similique numquam ratione! Ipsa, maiores fugit deserunt aliquam sed veritatis, sint expedita adipisci ullam voluptas incidunt esse aut odio sit impedit animi ad excepturi et fuga vel neque modi! Sint aspernatur totam modi porro labore, id illo dignissimos reprehenderit ipsum, nisi, eos ipsa at natus expedita eveniet debitis molestiae et. Impedit unde iste nam nobis totam provident voluptate laudantium consequatur laboriosam. Velit ex labore cumque recusandae molestiae mollitia magni harum consequuntur eaque, nostrum nihil! Assumenda ratione cum officia neque! Deserunt asperiores quas assumenda maxime quasi illum? Aperiam enim ut, ipsa fuga tempore eaque iusto, praesentium ratione quia quis dicta consectetur doloremque optio! Ex earum delectus accusantium officia, temporibus, cupiditate voluptatem quidem praesentium commodi nam nesciunt corporis sapiente, rerum natus blanditiis modi rem repellendus omnis asperiores. Modi numquam impedit ipsa laudantium accusamus eligendi dolorem at quam, temporibus nobis alias eos, sequi voluptas officia corporis consequuntur voluptatum odio? Suscipit iusto perferendis quod vitae ea, illo quasi.</p>
      </section>
    </div>
  );
}

export default Home;
