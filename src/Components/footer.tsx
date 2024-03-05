import '../App.css'; // Ensure this path is correct
import sos1 from '../Assets/sos1.png';
import sos2 from '../Assets/sos2.png';
import sos3 from '../Assets/sos3.png';
import sos4 from '../Assets/sos4.png';

function Footer() {
    return (
        <section className="Footer" style={{ background: "white" }}>
            <div className='row-ftr' style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '20px' }}>
                <div className='col-6-1-ftr' style={{ textAlign: 'right', paddingRight: '10px' }}>
                    <div className='ftrTxt'>
                        <p style={{ margin: 0 }}>Nusa</p>
                        <p style={{ margin: 0 }}>Travel</p>
                    </div>
                </div>
                <hr className="vertical-line" style={{ gridColumn: '2', margin: '0', height: '100%', width: '2px', backgroundColor: 'black' }} />
                <div className='col-6-2-ftr' style={{ textAlign: 'left', paddingLeft: '10px' }}>
                    <div className='row-in-col2-ftr' style={{ marginBottom: '5px' }}>
                        <p id='followUs' style={{ margin: 0 }}>Follow Us</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={sos1} alt="imgsos" className="" id="sos1" style={{ height: 30, width: "auto", margin: '0 5px' }} />
                        <img src={sos2} alt="imgsos" className="" id="sos2" style={{ height: 30, width: "auto", margin: '0 5px' }} />
                        <img src={sos3} alt="imgsos" className="" id="sos3" style={{ height: 30, width: "auto", margin: '0 5px' }} />
                        <img src={sos4} alt="imgsos" className="" id="sos4" style={{ height: 30, width: "auto", margin: '0 5px' }} />
                    </div>
                </div>
            </div>
        </section>







        // <div className="Footer" style={{zIndex:9999, backgroundColor:"white"}}  >
        //  <div className="container">
        //     <div className="row text-center">
        //         <div className="col-5">
        //             <p>Nusa Travel</p>
        //         </div>
        //         {/* <div className="col-1" style={{backgroundColor:"black", width:"1px", height:"113px"}}> */}
        //             <hr style={{backgroundColor:"black", width:"1px", height:"113px"}} />
        //         </div>
        //         <div className="col-5">
        //             <div className="row">
        //                 Follow Us
        //             </div>
        //             <div className="row p-2" >
        //                 <img src={sos1} alt="imgsos" className = "" id="sos1" style={{height:30, width:"auto"}}/>
        //                 <img src={sos2} alt="imgsos" className = "" id="sos2" style={{height:30, width:"auto"}}/>
        //                 <img src={sos3} alt="imgsos" className = "" id="sos3" style={{height:30, width:"auto"}}/>
        //                 <img src={sos4} alt="imgsos" className = "" id="sos4" style={{height:30, width:"auto"}}/>
        //             </div>
        //         </div>
        //     </div>
        //  </div>
    );

}

export default Footer;
