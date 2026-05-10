import React, { useEffect, useRef } from 'react';

const AboutSkillsTools = () => {
  const toolsRef = useRef(null);
  
  const skills = [
    { name: 'UI/UX Design', category: 'Design' },
    { name: 'Graphic Designer', category: 'Design' },
    { name: 'Frontend Developer', category: 'Development' },
    { name: 'Backend Developer', category: 'Development' },
    { name: 'Mobile Developer', category: 'Development' },
    { name: 'Database Management', category: 'Development' }
  ];

  const tools = [
    { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
    { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
    { name: 'Vercel', icon: 'fas fa-server', color: '#000000' },
    { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' }
  ];

  const info = [
    { icon: 'fas fa-briefcase', title: 'Pengalaman', description: '3+ Tahun' },
    { icon: 'fas fa-graduation-cap', title: 'Pendidikan', description: 'S1 Teknik Informatika' },
    { icon: 'fas fa-map-marker-alt', title: 'Lokasi', description: 'Jakarta, Indonesia' },
    { icon: 'fas fa-envelope', title: 'Email', description: 'ardiansyah@example.com' }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('slide-in');
          }, index * 100);
        }
      });
    }, observerOptions);

    const elements = toolsRef.current?.querySelectorAll('.skill-item, .tool-icon, .info-item');
    elements?.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
      observer.observe(element);
    });

    return () => {
      elements?.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container" ref={toolsRef}>
        <div className="about-content">
          {/* About Section */}
          <div className="about-column">
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
          
          {/* Skills Section */}
          <div className="skills-column">
            <h2 className="section-title">SKILLS</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services Section */}
          <div className="services-column">
            <h2 className="section-title">SERVICES</h2>
            <div className="services-grid">
              {tools.map((tool, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <i className={tool.icon}></i>
                  </div>
                  <h3>{tool.name}</h3>
                  <p>Professional {tool.name.toLowerCase()} solutions</p>
                </div>
              ))}
            </div>
                      </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkillsTools;
