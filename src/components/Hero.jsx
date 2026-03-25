import React from 'react';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Descubre la cultura, tradiciones y sabores de La Paz, Intibucá y Copán
        </h1>
        <p className="hero-subtitle">
          Explora los destinos turísticos más mágicos de Honduras
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary btn-large">
            Explorar Destinos
          </button>
          <button className="btn btn-secondary btn-large">
            Ver Mapa Turístico
          </button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
}
