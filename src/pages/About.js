import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
    return(
        <>
        <Navigation/>

        <div className="container my-5">
        <h1>About this Application</h1>
        <p>App/Web yang saya buat adalah untuk menampilkan daftar universitas yang ada di eropa </p>
        <p>Nama : George Olaf </p>
        <p>NIM  : 105011910066 </p>
        <p>Program Studi: Sistem Informasi</p>
      </div>

        <Footer/>
        </> 
    );
}

export default About;