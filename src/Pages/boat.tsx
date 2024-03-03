import React from 'react';
import '../App.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { Link } from "react-router-dom";
import Boat1 from '../Assets/boat-1.svg';

function Boat() {
    const BoatImg1 = {
        backgroundImage: `url(${Boat1})`,
        width: '50%', // Ukuran yang lebih kecil dari aslinya
        height: 'auto',
        margin: '0 auto', // Untuk memusatkan gambar di tengah
        display: 'block', // Mengubah menjadi block agar margin auto bekerja
    };

    return (
        <div className="App">
            <Navbar />
            <section className='boat-page'>
                <div className='row-1-boat'>
                    <div className="boat-1-img" style={BoatImg1}></div>
                    <p className="image-description">Ini adalah deskripsi gambar.</p>
                </div>
                <div className='row-2-boat'>
                    <p>Deskripsi singkat mengenai kapal atau informasi lainnya.</p>
                </div>
                <div className='row-3-boat'>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Boat;
