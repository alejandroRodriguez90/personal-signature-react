import React from "react";
import SkillBadge from "./SkillBadge";
import ProjectCard from "./ProjectCard";
import { personalData } from "../assets/data/personalData";
import "../styles/components/InfoSection.css";

const InfoSection = () => {
  // La función handleDownloadCV se ha eliminado, ya no es necesaria.

  return (
    <main className="info-section">
      {/* Sección Sobre Mí */}
      <section id="about" className="content-section">
        <div className="section-content-wrapper">
          <h3>
            <i className="fas fa-user-tie"></i> Sobre Mí
          </h3>
          <p>{personalData.about}</p>
        </div>
      </section>

      {/* Sección Habilidades */}
      <section id="skills" className="content-section">
        <div className="section-content-wrapper">
          <h3>
            <i className="fas fa-code"></i> Habilidades Técnicas
          </h3>
          <div className="skills-grid">
            {personalData.skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="projects" className="content-section">
        <div className="section-content-wrapper">
          <h3>
            <i className="fas fa-project-diagram"></i> Proyectos Realizados
          </h3>
          {personalData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contact" className="content-section">
        <div className="section-content-wrapper">
          <h3>
            <i className="fas fa-envelope"></i> Contacto
          </h3>
          <div className="contact">
            <p>
              <i className="fas fa-envelope"></i> {personalData.contact.email}
            </p>
            <p>
              <i className="fas fa-phone"></i> {personalData.contact.phone}
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {personalData.contact.location}
            </p>
          </div>

          {/* Botón de descarga actualizado a una etiqueta <a> */}
          {personalData.cvUrl && (
            <a
              href={personalData.cvUrl}
              className="download-btn"
              download // Este atributo activa la descarga
            >
              <i className="fas fa-download"></i> Descargar CV
            </a>
          )}
        </div>
      </section>
    </main>
  );
};

export default InfoSection;
