// src/components/ProjectCard.jsx
import React from 'react';
import '../styles/components/ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-tech">
                {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver Proyecto <i className="fas fa-arrow-right"></i>
                </a>
            )}
        </div>
    );
};

export default ProjectCard;