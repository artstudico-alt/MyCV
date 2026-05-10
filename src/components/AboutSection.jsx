import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Tentang Saya</h2>
            <p>
              Saya adalah seorang frontend developer dengan passion dalam menciptakan pengalaman digital yang menarik dan intuitif. 
              Dengan pengalaman lebih dari 3 tahun dalam industri web development, saya telah mengerjakan berbagai proyek mulai dari website company profile hingga aplikasi web kompleks.
            </p>
            <p>
              Keahlian utama saya meliputi pengembangan aplikasi web menggunakan React.js dan Next.js, dengan fokus pada performa optimasi dan user experience. 
              Saya selalu bersemangat untuk belajar teknologi baru dan mengikuti tren terbaru dalam frontend development.
            </p>
            <div className="about-cv">
              <button className="btn btn-primary">
                <i className="fas fa-download"></i> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
