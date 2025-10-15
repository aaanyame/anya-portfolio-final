import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
