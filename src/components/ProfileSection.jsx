// src/components/ProfileSection.jsx
import React, { useState } from "react"; // ¡Importamos useState!
import SocialLinks from "./SocialLinks";
import { personalData } from "../assets/data/personalData";
import "../styles/components/ProfileSection.css";

const ProfileSection = () => {
  // Creamos un estado para saber si el cursor está sobre la foto
  const [isHovered, setIsHovered] = useState(false);
  return (
    <aside className="profile-section">
      <div className="profile-main-content">
        <div
          className="photo-container"
          // Eventos para actualizar el estado
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          // La imagen cambia según el estado 'isHovered'
          style={{
            backgroundImage: `url(${
              isHovered ? personalData.photo2 : personalData.photo1
            })`,
          }}
          role="img"
          aria-label={`Foto de perfil de ${personalData.name}`}
        ></div>

        <h1>{personalData.name}</h1>
        <h2>{personalData.title}</h2>

        <SocialLinks />

        {/* ¡LO MOVEMOS AQUÍ DENTRO! */}
        {/* Ahora el medallón es parte del contenido principal y se moverá con él */}
        <nav className="medallion-nav">
          <div className="nav-trigger">
            <i className="fas fa-bars"></i>
          </div>
          <div className="nav-menu">
            <a href="#about" aria-label="Sobre Mí">
              <i className="fas fa-user"></i>
              <span>Sobre Mí</span>
            </a>
            <a href="#skills" aria-label="Habilidades">
              <i className="fas fa-cogs"></i>
              <span>Habilidades</span>
            </a>
            <a href="#projects" aria-label="Proyectos">
              <i className="fas fa-briefcase"></i>
              <span>Proyectos</span>
            </a>
            <a href="#contact" aria-label="Contacto">
              <i className="fas fa-envelope"></i>
              <span>Contacto</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default ProfileSection;
