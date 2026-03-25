import React from 'react';
import '../styles/gastronomia.css';
import { gastronomia } from '../data/data';

export default function GastronomiaArtesanias() {
  return (
    <section id="gastronomía" className="gastronomia-section">
      <div className="container">
        <div className="section-header">
          <h2>Gastronomía y Artesanías</h2>
          <p>Sabores auténticos y creaciones artesanales de Honduras</p>
        </div>

        <div className="gastronomia-grid">
          {gastronomia.map((item) => (
            <div key={item.id} className="gastro-item card">
              <img 
                src={item.imagen}
                alt={item.nombre}
                className="gastro-image card-image"
              />
              <div className="gastro-content card-content">
                <h3>{item.nombre}</h3>
                <p className="gastro-tipo">{item.tipo}</p>
                <p className="gastro-desc">{item.descripcion}</p>
                <div className="gastro-footer">
                  <span className="gastro-precio">{item.precio}</span>
                  <button className="btn btn-primary btn-sm">Más info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
