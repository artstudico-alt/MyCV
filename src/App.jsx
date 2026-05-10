import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutSkillsTools from './components/AboutSkillsTools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyProjects from './pages/MyProjects';

const HomePage = () => {
  useEffect(() => {
    // Add parallax effect to hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add fade-in animation to sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    const elements = document.querySelectorAll('section, .project-card, .skill-item, .tool-icon, .info-item');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div className="neon-decoration">
        <div className="neon-orb neon-orb-1"></div>
        <div className="neon-orb neon-orb-2"></div>
        <div className="neon-orb neon-orb-3"></div>
        <div className="neon-trail neon-trail-1"></div>
        <div className="neon-trail neon-trail-2"></div>
        <div className="neon-particle neon-particle-1"></div>
        <div className="neon-particle neon-particle-2"></div>
        <div className="neon-particle neon-particle-3"></div>
        <div className="neon-particle neon-particle-4"></div>
        <div className="neon-grid">
          <div className="neon-grid-line neon-grid-line-1"></div>
          <div className="neon-grid-line neon-grid-line-2"></div>
          <div className="neon-grid-line neon-grid-line-3"></div>
          <div className="neon-grid-line neon-grid-line-4"></div>
          <div className="neon-grid-line neon-grid-line-5"></div>
          <div className="neon-grid-line neon-grid-line-6"></div>
        </div>
        <div className="neon-star neon-star-1"></div>
        <div className="neon-star neon-star-2"></div>
        <div className="neon-star neon-star-3"></div>
        <div className="neon-star neon-star-4"></div>
        <div className="neon-star neon-star-5"></div>
        <div className="neon-star neon-star-6"></div>
        <div className="neon-wave neon-wave-1"></div>
        <div className="neon-wave neon-wave-2"></div>
        <div className="neon-diamond neon-diamond-1"></div>
        <div className="neon-diamond neon-diamond-2"></div>
        <div className="neon-diamond neon-diamond-3"></div>
      </div>
      <Hero />
      <Projects />
      <AboutSkillsTools />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-projects" element={<MyProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
