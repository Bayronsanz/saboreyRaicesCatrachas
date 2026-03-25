import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinos from './components/Destinos';
import Mapa from './components/Mapa';
import GastronomiaArtesanias from './components/GastronomiaArtesanias';
import Hoteles from './components/Hoteles';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Destinos />
      <Mapa />
      <GastronomiaArtesanias />
      <Hoteles />
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
