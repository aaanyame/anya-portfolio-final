/**
 * src/components/Header.jsx
 * Хедер — нежно-розовый градиент, навигация и переключатель темы.
 * Добавлена локальная логика для изменения класса при скролле.
 */

import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  // состояние скролла — для тонкой смены фона/тени при прокрутке
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // восстановление/переключение темы
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">Anya<span>Dev</span></div>

        <nav className="nav" aria-label="Основная навигация">
          <a href="#hero">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>

        <div className="controls">
          <button className="btn btn-compact" title="Наверх" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Наверх
          </button>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Переключить тему">
            🌓
          </button>
        </div>
      </div>
    </header>
  );
}
