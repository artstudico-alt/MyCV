import React, { useEffect, useRef } from 'react';

const Tools = () => {
  const toolsRef = useRef(null);
  
  const tools = [
    { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
    { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
    { name: 'Vercel', icon: 'fas fa-server', color: '#000000' },
    { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' }
  ];

  const info = [
    { icon: 'fas fa-briefcase', title: 'Experience', description: '3+ Years' },
    { icon: 'fas fa-graduation-cap', title: 'Education', description: 'S1 Teknik Informatika' },
    { icon: 'fas fa-map-marker-alt', title: 'Location', description: 'Jakarta, Indonesia' },
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

    const toolIcons = toolsRef.current?.querySelectorAll('.tool-icon');
    toolIcons?.forEach((icon, index) => {
      icon.style.animationDelay = `${index * 0.1}s`;
      observer.observe(icon);
    });

    return () => {
      toolIcons?.forEach(icon => observer.unobserve(icon));
    };
  }, []);

  return (
    <section className="tools">
      <div className="container">
        <h2 className="section-title">Tools</h2>
        <div className="tools-content" ref={toolsRef}>
          <div className="tools-icons">
            {tools.map((tool, index) => (
              <div key={index} className="tool-icon" style={{ '--tool-color': tool.color }}>
                <div className="tool-icon-wrapper">
                  <i className={tool.icon}></i>
                </div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="tools-info">
            {info.map((item, index) => (
              <div key={index} className="info-item">
                <i className={item.icon}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
