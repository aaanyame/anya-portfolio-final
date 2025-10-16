/**
 * src/components/Projects.jsx
 * - Использует данные из src/data/projects.js
 * - Swiper для слайдера
 * - framer-motion для анимаций появления и hover
 * - фильтрация проектов по категориям
 * - загрузка публичных репозиториев с GitHub (axios)
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // если у вас другая версия swiper — подправьте импорт
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import "./Projects.css";
import projectsData from "../data/projectsData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  // состояние
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState(projectsData);
  const [selected, setSelected] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(false);

  // загрузка репозиториев GitHub (K13)
  useEffect(() => {
    async function loadRepos() {
      try {
        setLoadingRepos(true);
        const res = await axios.get("https://api.github.com/users/aaanyame/repos?sort=updated&per_page=6");
        setRepos(res.data);
      } catch (err) {
        console.warn("GitHub load failed:", err.message);
      } finally {
        setLoadingRepos(false);
      }
    }
    loadRepos();
  }, []);

  // фильтрация
  const filtered = projects.filter(
    (p) => filter === "All" || p.tech.includes(filter) || (filter === "React" && p.tech.includes("React"))
  );

  return (
    <section id="projects" className="projects">
      <div className="projects-inner container">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Проекты
        </motion.h2>

        {/* Фильтры */}
        <motion.div className="filters" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          {["All", "React", "JS", "HTML", "CSS", "TypeScript"].map((t) => (
            <button key={t} className={filter === t ? "active" : ""} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </motion.div>

        {/* Слайдер */}
        <motion.div className="carousel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={18} slidesPerView={1}>
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <motion.div className="slide-card" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.35 }}>
                  <img src={p.imgs[0]} alt={p.title} />
                  <div className="slide-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="slide-actions">
                      <button className="btn" onClick={() => setSelected(p)}>Подробнее</button>
                      <a className="btn" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Сетка карточек */}
        <motion.div className="grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          {filtered.map((p) => (
            <motion.article key={p.id} className="card" whileHover={{ scale: 1.03, boxShadow: "var(--card-shadow-lg)" }} transition={{ type: "spring", stiffness: 200 }}>
              <img src={p.imgs[0]} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="meta">
                <div className="tags">{p.tech.map((t, i) => <span key={i} className="tag">{t}</span>)}</div>
                <div className="actions"><button onClick={() => setSelected(p)} className="btn">Подробнее</button></div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* GitHub repos */}
        <motion.div className="github-list" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3>Публичные репозитории (GitHub)</h3>
          {loadingRepos ? <p>Загрузка репозиториев...</p> : (
            <div className="repos">
              {repos.map((r) => (
                <motion.a key={r.id} href={r.html_url} className="repo" target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <strong>{r.name}</strong>
                  <p>{r.description || ""}</p>
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Модалка */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
