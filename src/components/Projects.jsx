import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'FinTrack Dashboard',
      description: 'Aplikasi pelacakan keuangan pribadi dengan dashboard interaktif dan visualisasi data real-time.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=FinTrack',
      technologies: ['React.js', 'Tailwind CSS', 'Chart.js'],
      category: 'Web Development',
      liveDemo: 'https://fintrack-demo.com',
      github: 'https://github.com/ardiansyah/fintrack'
    },
    {
      id: 2,
      title: 'Shop.co E-Commerce',
      description: 'Platform e-commerce modern dengan fitur shopping cart, payment gateway, dan admin panel.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Shop.co',
      technologies: ['Next.js', 'Stripe', 'MongoDB'],
      category: 'Web Development',
      liveDemo: 'https://shopco-demo.com',
      github: 'https://github.com/ardiansyah/shopco'
    },
    {
      id: 3,
      title: 'TaskFlow App',
      description: 'Aplikasi manajemen tugas dengan drag-and-drop, real-time collaboration, dan notifikasi.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=TaskFlow',
      technologies: ['Vue.js', 'Firebase', 'Vuex'],
      category: 'Web Development',
      liveDemo: 'https://taskflow-demo.com',
      github: 'https://github.com/ardiansyah/taskflow'
    },
    {
      id: 4,
      title: 'Travel Landing Page',
      description: 'Landing page untuk travel agency dengan animasi scroll yang menarik dan booking system.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Travel',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'UI/UX Design',
      liveDemo: 'https://travel-demo.com',
      github: 'https://github.com/ardiansyah/travel-landing'
    },
    {
      id: 5,
      title: 'Mobile Banking UI',
      description: 'Design UI untuk aplikasi mobile banking dengan fokus pada user experience dan accessibility.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Banking',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      category: 'UI/UX Design',
      liveDemo: 'https://banking-ui-demo.com',
      github: 'https://github.com/ardiansyah/banking-ui'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website dengan animasi modern dan responsive design.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Portfolio',
      technologies: ['React.js', 'GSAP', 'CSS3'],
      category: 'Other',
      liveDemo: 'https://portfolio-demo.com',
      github: 'https://github.com/ardiansyah/portfolio'
    }
  ];

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Other'];

  const filteredProjects = activeFilter === 'All' 
    ? projects.slice(0, 4) // Show only 4 projects on main page
    : projects.filter(project => project.category === activeFilter).slice(0, 4);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <a 
            href="/my-projects" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/my-projects');
            }}
            className="view-all-link"
          >
            View all projects <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
        {/* Filter Buttons */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
