import React, { useEffect } from 'react';
import './Header.css';

export default function Header(){
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if(saved) document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggle = () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Anya<span>Dev</span></div>
        <nav className="nav">
          <a href="#hero">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
        <div className="controls">
          <button className="btn btn-compact" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>Наверх</button>
          <button className="theme-toggle" onClick={toggle} aria-label="toggle theme">🌓</button>
        </div>
      </div>
    </header>
  );
}
