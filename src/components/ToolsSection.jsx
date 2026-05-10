import React from 'react';

const ToolsSection = () => {
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

  return (
    <section className="tools-section">
      <div className="container">
        <div className="tools-content">
          <div className="tools-left">
            <div className="tools-header">
              <h2 className="section-title">TOOLS</h2>
            </div>
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
          </div>
          <div className="tools-right">
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
      </div>
    </section>
  );
};

export default ToolsSection;
