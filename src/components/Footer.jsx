import React from 'react';
import '../styles/footer.css';
import { contactInfo } from '../data/data';

export default function Footer() {
  const phoneWithoutSpaces = contactInfo.telefono.split(' ').join('');
  
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Sección de información */}
          <div className="footer-section">
            <h3>Sobre Nosotros</h3>
            <p>
              Sabores y Raíces Catrachas es tu guía completo para descubrir la riqueza 
              cultural, gastronómica y arqueológica de Honduras. Dedicados a preservar 
              y promover el turismo responsable en nuestras regiones.
            </p>
          </div>
          <div className="footer-section">
            <h3>Mision</h3>
            <p>
              Promover y comercializar artesanias y gastronomia tradicional mediantes nuestra plataforma digital.
            </p>
          </div>
          <div className="footer-section">
            <h3>Visión</h3>
            <p>
              Ser la principal plataforma digital cutural de Honduras.
            </p>
          </div>

          {/* Sección de contacto */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul>
              <li>
                <span>📧</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <span>📞</span>
                <a href={`tel:${phoneWithoutSpaces}`}>
                  {contactInfo.telefono}
                </a>
              </li>
              <li>
                <span>📍</span>
                <span>{contactInfo.direccion}</span>
              </li>
            </ul>
          </div>

          {/* Sección de enlaces */}
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#destinos">Destinos</a></li>
              <li><a href="#mapa-turístico">Mapa Turístico</a></li>
              <li><a href="#hoteles">Hoteles</a></li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                f
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                📷
              </a>
              <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                𝕏
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                in
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <hr className="footer-divider" />

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2024 Sabores y Raíces Catrachas. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="#privacy">Política de Privacidad</a>
            <span>|</span>
            <a href="#terms">Términos de Servicio</a>
            <span>|</span>
            <a href="#cookies">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
