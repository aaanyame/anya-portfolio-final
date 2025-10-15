import React from 'react';
import './ContactForm.css';

export default function ContactForm(){
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Сообщение отправлено.');
    e.target.reset();
  };

  return (
    <footer id="contact" className="contact">
      <div className="contact-inner">
        <div>
          <h2>Контакты</h2>
          <p>Пишите на <a href="mailto:an1995ny@mail.ru">an1995ny@mail.ru</a> или через форму</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Ваше имя" required/>
          <input name="email" type="email" placeholder="Email" required/>
          <textarea name="message" placeholder="Сообщение" required/>
          <button className="btn-primary" type="submit">Отправить</button>
        </form>
      </div>
      <p className="copyright">© 2025 Аня — Frontend Developer</p>
    </footer>
  )
}
