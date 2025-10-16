/**
 * src/components/ProjectModal.jsx
 * Модальное окно детального просмотра проекта.
 * Закрывается по кнопке и при клике по оверлею.
 */

import React from "react";
import { motion } from "framer-motion";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-modal" onClick={onClose} aria-label="Закрыть">✕</button>
        <h3>{project.title}</h3>
        <img src={project.imgs[0]} alt={project.title} />
        <p>{project.desc}</p>
        <a href={project.repo} target="_blank" rel="noreferrer" className="btn-primary">Открыть на GitHub</a>
      </motion.div>
    </div>
  );
}
