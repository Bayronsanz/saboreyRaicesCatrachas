import React, { useState } from 'react';
import '../styles/mapa.css';
import { mapMarkersData } from '../data/data';

export default function Mapa() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const tipos = {
    'Mirador': '🌄',
    'Sitio Histórico': '🏛️',
    'Restaurante': '🍽️',
    'Artesanías': '🎨',
    'Hotel': '🏨'
  };

  return (
    <section id="mapa" className="mapa-section">
      <div className="container">
        <div className="section-header">
          <h2> Mapa Turístico Interactivo</h2>
          <p>Descubre los principales puntos de interés en la región</p>
        </div>

        <div className="mapa-container">
          <div className="mapa-visual">
            <div className="mapa-grid-bg">
              {/* Simulación de mapa con marcadores */}
              {mapMarkersData.map((marker) => (
                <div
                  key={marker.id}
                  className={`marker ${selectedMarker?.id === marker.id ? 'active' : ''}`}
                  style={marker.posicion}
                  onClick={() => setSelectedMarker(marker)}
                  title={marker.nombre}
                >
                  <span className="marker-icon">{tipos[marker.tipo]}</span>
                </div>
              ))}
            </div>

            {/* Card con información del marcador seleccionado */}
            {selectedMarker && (
              <div className="marker-info">
                <button
                  className="close-btn"
                  onClick={() => setSelectedMarker(null)}
                >
                  ✕
                </button>
                <h3>{selectedMarker.nombre}</h3>
                <p className="marker-type">{selectedMarker.tipo}</p>
                <p className="marker-desc">{selectedMarker.descripcion}</p>
                <p className="marker-location">📍 {selectedMarker.ubicacion}</p>
                <button className="btn btn-primary">Más información</button>
              </div>
            )}
          </div>

          {/* Leyenda de tipos de marcadores */}
          <div className="mapa-legend">
            <h4>Categorías</h4>
            <ul>
              {Object.entries(tipos).map(([tipo, emoji]) => (
                <li key={tipo}>
                  <span className="legend-emoji">{emoji}</span>
                  <span>{tipo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
