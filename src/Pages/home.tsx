import React, { useEffect, useRef, useState } from 'react';
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
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallaxStopped, setParallaxStopped] = useState(false);

  useEffect(() => {
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

  return (
    <div ref={heroRef} className="Home Background">
      <Navbar/>
      <section className="parallax" style={{zIndex:0}}>
        <img src={image1} alt="imgg" className = "pImg" id="beach1"/>
        <img src={image2} alt="imgg" className = "pImg" id="beach2"/>
        <img src={image3} alt="imgg" className = "pImg" id="beach3"/>
        <h2 id="text1">Nusa Travel</h2>
        <img src={image4} alt="imgg" className = "pImg" id="beach4"/>
        <img src={image5} alt="imgg" className = "pImg" id="beach5"/>
      </section>

      <section ref={heroRef}  className="sec Background" id="sec" style={{zIndex:1}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio adipisci distinctio mollitia praesentium culpa exercitationem ipsa dolore possimus nisi illum officiis porro recusandae necessitatibus itaque expedita facere quasi nesciunt perspiciatis, consectetur accusamus fugit cum! Nemo consequuntur, delectus iusto ex officiis autem ipsa, minus dolores libero ea cumque quis magni aperiam quibusdam hic nulla harum quidem rem! Cum quos porro sapiente. Quae, ullam ducimus iste ipsum quis id ea magnam optio atque corporis voluptatibus fugit quaerat quos officia voluptates? Incidunt, qui quas quod doloremque quis enim suscipit eos facere quidem, eveniet at molestiae harum placeat impedit veritatis. Architecto amet et ipsam harum maxime eligendi laborum adipisci necessitatibus tempora est voluptatibus possimus accusamus iste doloribus dignissimos, odit, assumenda ducimus? Odit veritatis voluptas aspernatur doloribus quo nisi autem dolores sunt suscipit necessitatibus, earum in commodi, cum ipsam accusamus quibusdam minus quae quisquam tempore laborum ex corrupti. Voluptatibus saepe iste autem blanditiis asperiores, quibusdam error eius tenetur repellat, quae aliquam totam nihil vel maxime voluptatem dignissimos, aliquid odio ut harum placeat odit adipisci aut sequi illum. Enim voluptatibus voluptas quis quidem praesentium, facere laudantium culpa nemo quod numquam quo quisquam veniam adipisci expedita, dolorum dolore. Distinctio asperiores qui ipsum ab inventore, quia temporibus nostrum laboriosam soluta animi cupiditate. Assumenda blanditiis, iusto consectetur, quibusdam quo dolorem modi voluptatum distinctio repellendus libero exercitationem quasi repudiandae quia ea, itaque explicabo ad quidem ut autem ratione delectus in accusamus? Mollitia expedita officiis pariatur tempora soluta facilis. Sequi culpa facere deleniti consequatur consectetur iste voluptatem ratione, quidem, veniam mollitia vitae modi. Id fugit nulla dolorem nihil unde deserunt eligendi, eum atque vitae voluptatum. Iure, officiis labore tempore quasi laborum consequuntur odit eius expedita corrupti accusamus, ipsum consequatur corporis deleniti reprehenderit facere hic quaerat sed quisquam, error ad similique? Accusamus reiciendis maiores sapiente veniam, explicabo debitis eligendi ipsa? Vel, autem error quae reiciendis cupiditate consequuntur quo nemo unde sunt recusandae voluptates aperiam totam, id odio obcaecati! Perferendis dolore obcaecati enim possimus eius consequuntur laboriosam doloremque voluptates? Eum porro qui quo fuga? Ipsam dolorum laboriosam pariatur ipsum perferendis officia id. Modi expedita sed fuga unde! Nesciunt pariatur voluptatum quidem natus accusamus quas illo aperiam minus earum aliquid explicabo autem sequi debitis delectus voluptas distinctio consequatur vel necessitatibus itaque, mollitia, suscipit perferendis repudiandae. Dignissimos dicta distinctio ratione laboriosam fugiat earum, delectus reprehenderit quod nobis molestias a, harum sit debitis dolor quaerat incidunt minima? Eos corporis rem corrupti voluptas numquam ab, pariatur sequi assumenda sed esse natus dicta sint veritatis mollitia libero. Mollitia cum, quae ex non laudantium consequatur optio inventore ullam dicta, laboriosam illum hic iusto. Odit sint aspernatur ullam voluptatibus vero hic voluptatum, nostrum quam, recusandae neque eaque error laboriosam? Cum quis aut dolores ipsum illo nisi voluptates, laudantium explicabo distinctio iusto fugiat cupiditate aliquid id placeat facere quo, vel modi neque ut, commodi rem! Tempora id qui nisi in. Tempora, magni soluta vero tempore, dolorum reprehenderit corrupti ad nobis ratione temporibus impedit! Tenetur aliquam voluptates autem atque, pariatur quia perspiciatis. Blanditiis placeat quam vero exercitationem id quo impedit illum!</p>
          {/* <div className="container">
            <div className="row d-flex justify-content center">
              <div className="col text-center">
                <img src={Home1} alt="imgg" id="" style={{ height:"400px" }}/>
                <h2 className="">Nusa Tenggara Timur</h2>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col text-center">
              <img src={Home2} alt="imgg" id="" style={{ height:"400px" }}/>
              <h2>Stunning Landscape of beaches and mountains</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col text-center">
              <img src={Home3} alt="imgg" id="" style={{ height:"400px" }}/>
              <h2>Rich Cultural heritage and unique traditions</h2>
            </div>
          </div>
        </div>

        <div className="container" >
          <div className="row d-flex justify-content-center  ">
            <div className=" col text-center">
              <div className="col" style={{ position: "relative" }}>
                <div className="text-center" style={{position:"absolute", top:0, left:100, zIndex:1}}>
                  <img id="outsideImage" src={outside} alt="imgg" style={{height: "1000px"}} />
                </div>
                <div style={{position:"absolute", top:0, left:100, zIndex:2, marginLeft:125, marginTop:125}}>
                  <img id="insideImage" src={inside} alt="imgg" style={{height: "750px"}} />
                  <div style={{position:"absolute", top:0, marginTop:300 ,zIndex:3}}>
                    <h2>Home to diverse ethnic groups and languages</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* <section ref={heroRef} className="sec1 Background" style={{ position: "relative", overflow: "hidden", zIndex:2}}>
        <div className="container">
            <div className="row">
              <div className="col-6">
                <img id="insideImage" src={Home1} alt="imgg" style={{height:200}}  />
              </div>
              <div className="col-6">
                <h2>Explore Destination</h2>
                <h2 style={{color:"white"}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ut et iusto maiores, quo porro quaerat debitis! Et, fuga harum consectetur, architecto nihil molestiae repellat velit atque voluptatum illo cum.
                </h2>
                <button>See more</button>
              </div>
            </div>          
          </div>

          <div style={{transform:"rotate(10deg)"}}>
            <div className="row logos">
              <div className="logos-slide">
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/> 
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
              </div>
              <div className="logos-slide1">
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
              </div>
              <div className="logos-slide">
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/> 
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
                <img className="image-fluid" src={Home1}  style={{objectFit:"contain", width:150,height:"auto"}} id="" alt=""/>
              </div>
            </div>
          </div>
      </section> */}
    </div>
  );
}
export default Home;