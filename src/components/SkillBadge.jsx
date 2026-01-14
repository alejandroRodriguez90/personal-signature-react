import React from "react";
import "../styles/components/SkillBadge.css";

const SkillBadge = ({ skill }) => {
  // Si el objeto 'skill' tiene una propiedad 'url', crea un enlace.
  // Si no, crea un span normal.
  return skill.url ? (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="skill-badge"
    >
      {skill.name}
    </a>
  ) : (
    <span className="skill-badge">{skill.name}</span>
  );
};

export default SkillBadge;
