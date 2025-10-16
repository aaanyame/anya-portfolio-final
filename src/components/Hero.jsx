
/**
 * src/components/Hero.jsx
 * Hero-блок с анимацией появления (framer-motion).
 */

import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="hero-inner container">
        <h1>Привет — я Аня, frontend-разработчик</h1>
        <p>Я работаю в автостраховании и учусь Frontend — верстаю адаптивные сайты, пишу на React и интегрирую API. Это подборка моих учебных работ.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Мои проекты</a>
        </div>
      </div>
    </motion.section>
  );
}
