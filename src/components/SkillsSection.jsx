import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS / Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Git / GitHub', level: 85 }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
