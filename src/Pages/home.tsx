

// Home.tsx
import React, { useEffect } from 'react';
import Navbar from '../Components/navbar';
import image1 from '../Assets/para1.jpg';
import image2 from '../Assets/para2.png';
import image3 from '../Assets/para3.png';
import image4 from '../Assets/para4.png';
import image5 from '../Assets/para5.png';
import { applyScrollingEffects } from './logicScript/home'; // Import the applyScrollingEffects function
import '../App.css';

const Home: React.FC = () => {
  useEffect(() => {
    applyScrollingEffects(); // Call the applyScrollingEffects function when the component mounts
  }, []);

  return (
    <div className="Home">
      <Navbar/>
      <section className="parallax">
        <img src={image1} alt="imgg" className = "pImg" id="beach1"/>
        <img src={image2} alt="imgg" className = "pImg" id="beach2"/>
        <img src={image3} alt="imgg" className = "pImg" id="beach3"/>
        <h2 id="text1">Parallax Website</h2>
        <img src={image4} alt="imgg" className = "pImg" id="beach4"/>
        <img src={image5} alt="imgg" className = "pImg" id="beach5"/>
      </section>
      <section id='grad'></section>
      <section className="sec" id="sec">
      <h2>parallax scrolling website</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ex ea delectus ratione placeat culpa fugiat quis provident, aliquid ad quae nulla, laborum quidem, cum possimus quia reiciendis excepturi quos sunt repellat! Ratione numquam vitae ipsam aperiam impedit! Non autem amet quam doloremque. Alias hic nisi expedita ratione esse, est officiis amet, tempora non fuga quia dignissimos autem necessitatibus ipsa ab ut enim nam doloremque deleniti. Facere quis nostrum eum alias porro eligendi optio neque, dignissimos perferendis doloremque id vel! Voluptates repellat necessitatibus pariatur non et voluptatem dolore cupiditate optio nihil ipsa quas soluta eveniet magnam, unde exercitationem fuga sed, eaque culpa! Ipsam repellendus illo rem, officiis fugit cumque ut quia quo optio placeat facere labore harum sapiente enim dicta totam. Impedit, rerum minus rem unde at totam quod sunt iste maxime qui dolores architecto in fugiat ipsum porro esse error ex asperiores recusandae numquam perferendis id. Fugit dolores libero aut vero voluptate qui tempore, delectus iure doloribus modi reiciendis adipisci, amet sequi earum necessitatibus hic quas illo voluptas quod numquam vel perferendis iste! Odio eveniet voluptatem at illo nesciunt iste quidem nostrum, tempora numquam. Nobis neque voluptatem eius, error maiores deserunt nihil molestias repellendus, nemo obcaecati impedit molestiae fugiat adipisci autem minima labore expedita deleniti odio, eaque dolorum necessitatibus tempore. Ullam deserunt voluptatum nulla culpa quia facilis rerum laborum et aliquid quis. Animi ut consectetur eius laborum, ullam excepturi 
        <br></br>
        voluptatibus, magni commodi similique est odit numquam quibusdam dignissimos maxime sapiente accusantium facere debitis nostrum at quod error? Eius ratione placeat sint sit blanditiis officia dolore, sequi esse libero aspernatur quod aliquam autem omnis consequatur et voluptatibus quis. Provident ullam minima nihil eaque optio nostrum aut nobis fugit atque molestiae eos quae in similique, modi dicta praesentium? Qui quos deleniti asperiores minus quia optio earum pariatur nam ullam, possimus iusto id dolores soluta velit quisquam incidunt ad esse consequatur veritatis repellat ab sit dolore? Esse obcaecati inventore maxime minima nesciunt deleniti voluptas voluptatum qui nobis exercitationem et incidunt placeat ab explicabo excepturi praesentium
        <br></br>
         mollitia, nam, dolorem cum quo rerum. Enim, assumenda! Optio dolore cumque non sequi temporibus explicabo. Alias exercitationem, nesciunt quas tempora quam, sequi esse omnis reiciendis eum rem nemo aliquid cumque id hic perferendis? Minima hic sed facere veniam voluptatibus ut tenetur repellat. Nostrum officiis impedit voluptatem libero temporibus minima ex distinctio corporis facere. Nihil voluptate aperiam eum fugiat ratione molestiae rerum eveniet, enim aliquam! Nulla laudantium deserunt sunt odio, sint suscipit laborum natus labore soluta voluptate, tempore, necessitatibus obcaecati illo? Laudantium, non nisi sed dignissimos reprehenderit itaque, tempora laborum corporis neque doloremque aliquid accusantium rerum ullam ut cupiditate dolores nesciunt! Amet dolores nobis quibusdam illum, repudiandae facilis dolorum distinctio quae excepturi sequi numquam deserunt alias itaque 
        <br></br>
        reprehenderit magnam atque praesentium fuga id voluptate culpa cumque dignissimos perspiciatis architecto iure. Odit sequi eaque assumenda saepe repudiandae sint veritatis ut quod itaque vero! Voluptatem, deserunt nesciunt! Corporis veritatis magni placeat? Vero placeat distinctio quasi cupiditate doloribus harum commodi exercitationem in eaque numquam blanditiis quidem libero earum maxime, sed nam!</p>
      </section>
    </div>
  );
}

export default Home;
