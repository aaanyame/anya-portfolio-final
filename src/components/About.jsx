/**
 * src/components/About.jsx
 * Раздел "Обо мне" c анимацией появления.
 */

import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container about-inner">
        <h2>Обо мне</h2>
        <p>Меня зовут Аня, мне 29 лет. Я работаю в сфере автострахования и стремлюсь стать Frontend-разработчиком.</p>
        <ul className="facts">
          <li>Высшее образование: РГУТиС (туризм), красный диплом</li>
          <li>Золотая медаль в школе</li>
          <li>Реализованы проекты: лендинги, интернет-магазин, приложения на React</li>
        </ul>
      </div>
    </motion.section>
  );
}
