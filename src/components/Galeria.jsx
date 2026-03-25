import React, { useState } from 'react';
import '../styles/galeria.css';
import { galeria } from '../data/data';

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galería" className="galeria-section">
      <div className="container">
        <div className="section-header">
          <h2>Galería de Imágenes</h2>
          <p>Explora la belleza visual de nuestros destinos</p>
        </div>

        <div className="galeria-grid">
          {galeria.map((imagen) => (
            <div 
              key={imagen.id} 
              className="galeria-item"
              onClick={() => setSelectedImage(imagen)}
            >
              <img 
                src={imagen.imagen}
                alt={imagen.titulo}
                className="galeria-img"
              />
              <div className="galeria-overlay">
                <h4>{imagen.titulo}</h4>
                <p>{imagen.categoria}</p>
                <span className="view-btn">Ver</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div className="modal-galeria" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img src={selectedImage.imagen} alt={selectedImage.titulo} />
            <div className="modal-info">
              <h3>{selectedImage.titulo}</h3>
              <p>{selectedImage.categoria}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
