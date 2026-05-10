import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hello, I'm Ardiansyah";

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayText, isTyping, fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Simulate CV download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Ardiansyah-CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello, I'm <span className="highlight">Ardiansyah</span>
            </h1>
            <h2>Frontend Developer</h2>
            <p>
              Saya adalah seorang frontend developer yang antusias dalam menciptakan pengalaman digital yang menarik dan responsif. 
              Dengan keahlian dalam teknologi modern seperti React.js dan Next.js, saya berkomitmen untuk mengubah ide menjadi aplikasi web yang fungsional dan estetis.
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="btn btn-primary">
                Lihat Projects
              </button>
              <button onClick={downloadCV} className="btn btn-secondary">
                Download CV
              </button>
            </div>
            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:ardiansyah@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div className="personal-info">
              <div className="container">
                <div className="info-grid">
                  <div className="info-item">
                    <i className="fas fa-briefcase"></i>
                    <div className="info-content">
                      <h3>Pengalaman</h3>
                      <p>3+ Tahun</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-graduation-cap"></i>
                    <div className="info-content">
                      <h3>Pendidikan</h3>
                      <p>S1 Teknik Informatika</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info-content">
                      <h3>Lokasi</h3>
                      <p>Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <div className="info-content">
                      <h3>Email</h3>
                      <p>ardiansyah@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="neon-background">
              <div className="neon-circle neon-circle-1"></div>
              <div className="neon-circle neon-circle-2"></div>
              <div className="neon-circle neon-circle-3"></div>
              <div className="neon-line neon-line-1"></div>
              <div className="neon-line neon-line-2"></div>
              <div className="neon-glow"></div>
            </div>
            <img src="https://via.placeholder.com/400x500/1a1a1a/ff6b35?text=Profile" alt="Ardiansyah Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
