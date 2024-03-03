import { Scroll, useScroll } from "@react-three/drei"
import '../Pages/Style/landing.css'
export const LandingText = ()=>{
    const scroll = useScroll();
    return(
        <Scroll html>
            <div id="bigContainer" className="container">
                <div className="row">
                    <div className="col-9">
                        <div id='page1'>
                            <div id='entrance'>
                            <div id='entranceText'>
                                <h1 id='head1' className='landingTitle'>Explore</h1>
                                <h1 id='head1' className='landingTitle'>East Nusa</h1>
                                <h1 id='head1' className='landingTitle'>Tenggara</h1>
                                <h1 id='head1' className='landingTitle'>With us</h1>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"/>
                </div>
            </div>
        </Scroll>
    );
};