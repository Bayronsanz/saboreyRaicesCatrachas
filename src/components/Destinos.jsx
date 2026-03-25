import React from 'react';
import '../styles/destinos.css';
import { destinos } from '../data/data';

export default function Destinos() {
  return (
    <section id="destinos" className="destinos">
      <div className="container">
        <div className="section-header">
          <h2> Destinos Principales</h2>
          <p>Tres maravillosos destinos que ofrecen cultura, gastronomía y naturaleza</p>
        </div>

        <div className="destinos-grid">
          {destinos.map((destino) => (
            <div key={destino.id} className="destino-card card">
              <img 
                src={destino.imagen} 
                alt={destino.nombre}
                className="destino-image card-image"
              />
              <div className="destino-content card-content">
                <div className="destino-header">
                  <h3>{destino.nombre}</h3>
                  <p className="destino-subtitulo">{destino.titulo}</p>
                </div>
                <p className="destino-descripcion">{destino.descripcion}</p>
                <div className="destino-atractivos">
                  {destino.atractivos.map((atractivo, index) => (
                    <span key={index} className="atractivo-badge">
                      {atractivo}
                    </span>
                  ))}
                </div>
                <div className="destino-footer">
                  <p className="destino-ubicacion"> {destino.ubicacion}</p>
                  <button className="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
