import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS / Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Git / GitHub', level: 85 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid" ref={skillsRef}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
