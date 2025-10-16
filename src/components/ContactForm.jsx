/**
 * src/components/ContactForm.jsx
 * Секция контактов + форма. 
 * Пока отсылает форму локально (alert) — можно подключить EmailJS.
 */

import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: интегрировать EmailJS или другой бекенд
    alert("Спасибо! Сообщение отправлено.");
    e.target.reset();
  };

  return (
    <footer id="contact" className="contact">
      <div className="contact-inner container">
        <div>
          <h2>Контакты</h2>
          <p>Пишите: <a href="mailto:an1995ny@mail.ru">an1995ny@mail.ru</a></p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" aria-label="Форма обратной связи">
          <input name="name" placeholder="Ваше имя" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Сообщение" required />
          <button className="btn-primary" type="submit">Отправить</button>
        </form>
      </div>

      <div className="social">
        <a href="https://github.com/aaanyame" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:an1995ny@mail.ru">Email</a>
      </div>
    </footer>
  );
}
