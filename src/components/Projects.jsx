import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

const initialProjects = [
  { id:1, title: 'Ясенево (лендинг)', desc: 'Сайт застройщика — лендинг с галереей.', tech:['HTML','CSS'], imgs: ['/src/assets/images/placeholder1.jpg'], repo:'https://github.com/aaanyame/Yasenevo-past-final.git' },
  { id:2, title: 'Интернет-магазин', desc: 'Адаптивный макет магазина.', tech:['HTML','CSS','JS'], imgs: ['/src/assets/images/placeholder2.jpg'], repo:'https://github.com/aaanyame/Figma-project.git' },
  { id:3, title: 'GrayScale — анимации', desc: 'Анимации и эффекты прокрутки.', tech:['JS','CSS'], imgs: ['/src/assets/images/placeholder3.jpg'], repo:'https://github.com/aaanyame/startbootstrap-grayscale.git' },
  { id:4, title: 'Weather App', desc: 'React + TypeScript приложение погоды.', tech:['React','TypeScript'], imgs: ['/src/assets/images/placeholder4.jpg'], repo:'https://github.com/aaanyame/weather-app-updated.git' },
  { id:5, title: 'Task App', desc: 'React приложение для задач.', tech:['React','JS'], imgs: ['/src/assets/images/placeholder5.jpg'], repo:'https://github.com/aaanyame/react.git' },
];

export default function Projects(){
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState(initialProjects);
  const [selected, setSelected] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(false);

  useEffect(() => {
    // load GitHub repos as demonstration (K13)
    async function load() {
      try{
        setLoadingRepos(true);
        const res = await axios.get('https://api.github.com/users/aaanyame/repos?sort=updated&per_page=6');
        setRepos(res.data);
      }catch(err){
        console.warn('GitHub load failed', err.message);
      }finally{
        setLoadingRepos(false);
      }
    }
    load();
  }, []);

  const filtered = projects.filter(p => filter==='All' || p.tech.includes(filter) || (filter==='React' && p.tech.includes('React')));

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h2>Проекты</h2>
        <div className="filters">
          {['All','React','JS','HTML','CSS','TypeScript'].map(t => (
            <button key={t} className={filter===t?'active':''} onClick={()=>setFilter(t)}>{t}</button>
          ))}
        </div>

        <div className="carousel">
          <Swiper modules={[Navigation,Pagination]} navigation pagination={{clickable:true}} spaceBetween={16} slidesPerView={1}>
            {projects.map(p => (
              <SwiperSlide key={p.id}>
                <div className="slide-card">
                  <img src={p.imgs[0]} alt={p.title} />
                  <div className="slide-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="slide-actions">
                      <button onClick={()=>setSelected(p)} className="btn">Подробнее</button>
                      <a className="btn" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid">
          {filtered.map(p => (
            <article key={p.id} className="card">
              <img src={p.imgs[0]} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="meta">
                <div className="tags">{p.tech.map((t,i)=><span key={i} className="tag">{t}</span>)}</div>
                <div className="actions"><button onClick={()=>setSelected(p)} className="btn">Подробнее</button></div>
              </div>
            </article>
          ))}
        </div>

        <div className="github-list">
          <h3>Публичные репозитории (GitHub)</h3>
          {loadingRepos ? <p>Загрузка репозиториев...</p> : (
            <div className="repos">
              {repos.map(r => (
                <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="repo">
                  <strong>{r.name}</strong>
                  <p>{r.description || ''}</p>
                </a>
              ))}
            </div>
          )}
        </div>

      </div>

      {selected && <ProjectModal project={selected} onClose={()=>setSelected(null)} />}
    </section>
  );
}
