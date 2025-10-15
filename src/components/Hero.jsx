import React from 'react';
import './Hero.css';

export default function Hero(){
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <h1>Привет — я Аня, frontend-разработчик</h1>
        <p>Я работаю в автостраховании и учусь Frontend — верстаю адаптивные сайты, пишу на React и интегрирую API. Это подборка моих учебных работ.</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#projects">Посмотреть проекты</a>
          <a className="btn-outline" href="#contact">Связаться</a>
        </div>
      </div>
    </section>
  );
}
