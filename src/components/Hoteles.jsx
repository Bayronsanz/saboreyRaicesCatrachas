import React from 'react';
import '../styles/hoteles.css';
import { hoteles } from '../data/data';

export default function Hoteles() {
  return (
    <section id="hoteles" className="hoteles-section">
      <div className="container">
        <div className="section-header">
          <h2>Hospedaje Recomendado</h2>
          <p>Hoteles y posadas en los principales destinos turísticos</p>
        </div>

        <div className="hoteles-grid">
          {hoteles.map((hotel) => (
            <div key={hotel.id} className="hotel-card card">
              <img 
                src={hotel.imagen}
                alt={hotel.nombre}
                className="hotel-image card-image"
              />
              <div className="hotel-content card-content">
                <h3>{hotel.nombre}</h3>
                <p className="hotel-ubicacion">📍 {hotel.ubicacion}</p>
                <p className="hotel-desc">{hotel.descripcion}</p>
                
                <div className="hotel-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < hotel.estrellas ? 'filled' : ''}`}>
                      ⭐
                    </span>
                  ))}
                </div>

                <div className="hotel-etiquetas">
                  {hotel.etiquetas.map((etiqueta, index) => (
                    <span key={index} className="etiqueta">
                      {etiqueta}
                    </span>
                  ))}
                </div>

                <div className="hotel-footer">
                  <div>
                    <p className="hotel-precio">{hotel.precio}/noche</p>
                    <p className="hotel-telefono">{hotel.telefono}</p>
                  </div>
                  <button className="btn btn-primary">Reservar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}