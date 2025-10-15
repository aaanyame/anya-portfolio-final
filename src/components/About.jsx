import React from 'react';
import './About.css';

export default function About(){
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <h2>Обо мне</h2>
        <p>Меня зовут Аня, мне 29 лет. Я окончила РГУТиС (туризм) с красным дипломом. За полгода обучения по frontend выполнила несколько проектов: лендинги, интернет-магазин, приложения на React и TypeScript.</p>
        <ul className="facts">
          <li>Золотая медаль в школе</li>
          <li>Красный диплом (университет)</li>
          <li>Работа в автостраховании — хочу сменить профессию</li>
        </ul>
      </div>
    </section>
  )
}
