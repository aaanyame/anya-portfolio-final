import React from 'react';
import './ProjectModal.css';

export default function ProjectModal({project, onClose}){
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>
        <h3>{project.title}</h3>
        <img src={project.imgs[0]} alt={project.title} />
        <p>{project.desc}</p>
        <a href={project.repo} target="_blank" rel="noreferrer" className="btn">GitHub</a>
      </div>
    </div>
  );
}
