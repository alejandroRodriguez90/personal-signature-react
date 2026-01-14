import React from 'react';
import { personalData } from '../assets/data/personalData'; 
import '../styles/components/SocialLinks.css';

const SocialLinks = () => {
    return (
        <div className="social-links">
            {personalData.socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className={`social-btn ${link.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                >
                    <i className={link.icon}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;