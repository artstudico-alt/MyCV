import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyProjects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'FinTrack Dashboard',
      description: 'Aplikasi pelacakan keuangan pribadi dengan dashboard interaktif dan visualisasi data real-time. Fitur lengkap termasuk grafik pengeluaran, kategori pengeluaran, dan laporan bulanan.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=FinTrack',
      technologies: ['React.js', 'Tailwind CSS', 'Chart.js', 'Node.js'],
      category: 'Web Development',
      liveDemo: 'https://fintrack-demo.com',
      github: 'https://github.com/ardiansyah/fintrack',
      featured: true
    },
    {
      id: 2,
      title: 'Shop.co E-Commerce',
      description: 'Platform e-commerce modern dengan fitur shopping cart, payment gateway, admin panel, dan sistem inventory management. Integrasi dengan multiple payment providers.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Shop.co',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redux'],
      category: 'Web Development',
      liveDemo: 'https://shopco-demo.com',
      github: 'https://github.com/ardiansyah/shopco',
      featured: true
    },
    {
      id: 3,
      title: 'TaskFlow App',
      description: 'Aplikasi manajemen tugas dengan drag-and-drop, real-time collaboration, notifikasi, dan dashboard analytics. Support untuk team collaboration.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=TaskFlow',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Socket.io'],
      category: 'Web Development',
      liveDemo: 'https://taskflow-demo.com',
      github: 'https://github.com/ardiansyah/taskflow',
      featured: true
    },
    {
      id: 4,
      title: 'Travel Landing Page',
      description: 'Landing page untuk travel agency dengan animasi scroll yang menarik, booking system, dan testimonial carousel. Fully responsive design.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Travel',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
      category: 'UI/UX Design',
      liveDemo: 'https://travel-demo.com',
      github: 'https://github.com/ardiansyah/travel-landing',
      featured: true
    },
    {
      id: 5,
      title: 'Mobile Banking UI',
      description: 'Design UI untuk aplikasi mobile banking dengan fokus pada user experience dan accessibility. Include user research dan usability testing.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Banking',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      category: 'UI/UX Design',
      liveDemo: 'https://banking-ui-demo.com',
      github: 'https://github.com/ardiansyah/banking-ui',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website dengan animasi modern, responsive design, dan optimized performance. Built dengan React dan modern CSS.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Portfolio',
      technologies: ['React.js', 'GSAP', 'CSS3', 'Framer Motion'],
      category: 'Other',
      liveDemo: 'https://portfolio-demo.com',
      github: 'https://github.com/ardiansyah/portfolio',
      featured: false
    },
    {
      id: 7,
      title: 'Social Media Dashboard',
      description: 'Dashboard untuk monitoring social media analytics dengan real-time data visualization dan custom reporting features.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Social',
      technologies: ['React.js', 'D3.js', 'Express.js', 'PostgreSQL'],
      category: 'Web Development',
      liveDemo: 'https://social-dashboard-demo.com',
      github: 'https://github.com/ardiansyah/social-dashboard',
      featured: false
    },
    {
      id: 8,
      title: 'E-Learning Platform',
      description: 'Platform pembelajaran online dengan video streaming, quiz system, progress tracking, dan certificate generation.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=E-Learning',
      technologies: ['Next.js', 'AWS', 'WebRTC', 'MongoDB'],
      category: 'Web Development',
      liveDemo: 'https://elearning-demo.com',
      github: 'https://github.com/ardiansyah/elearning',
      featured: false
    },
    {
      id: 9,
      title: 'Food Delivery App UI',
      description: 'UI design untuk aplikasi food delivery dengan focus pada user journey, ordering process, dan restaurant discovery.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Food',
      technologies: ['Figma', 'Principle', 'After Effects', 'User Testing'],
      category: 'UI/UX Design',
      liveDemo: 'https://food-app-demo.com',
      github: 'https://github.com/ardiansyah/food-app',
      featured: false
    },
    {
      id: 10,
      title: 'Blog Platform',
      description: 'Platform blogging dengan markdown editor, SEO optimization, comment system, dan social media integration.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/ff6b35?text=Blog',
      technologies: ['Gatsby', 'GraphQL', 'Netlify CMS', 'Tailwind CSS'],
      category: 'Other',
      liveDemo: 'https://blog-platform-demo.com',
      github: 'https://github.com/ardiansyah/blog-platform',
      featured: false
    }
  ];

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Other'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const projectStats = {
    total: projects.length,
    webDev: projects.filter(p => p.category === 'Web Development').length,
    uiux: projects.filter(p => p.category === 'UI/UX Design').length,
    other: projects.filter(p => p.category === 'Other').length
  };

  return (
    <div className="my-projects-page">
      {/* Neon Decorations */}
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
      
      {/* Header */}
      <div className="projects-hero">
        <div className="container">
          <div className="projects-header-content">
            <button 
              onClick={() => navigate('/')}
              className="back-btn"
            >
              <i className="fas fa-arrow-left"></i> Kembali ke Home
            </button>
            <h1 className="projects-page-title">My Projects</h1>
            <p className="projects-page-subtitle">
              Koleksi project yang telah saya kerjakan, dari web development hingga UI/UX design
            </p>
            
            {/* Project Stats */}
            <div className="project-stats">
              <div className="stat-item">
                <span className="stat-number">{projectStats.total}</span>
                <span className="stat-label">Total Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{projectStats.webDev}</span>
                <span className="stat-label">Web Development</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{projectStats.uiux}</span>
                <span className="stat-label">UI/UX Design</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{projectStats.other}</span>
                <span className="stat-label">Other</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
                {category !== 'All' && (
                  <span className="filter-count">
                    {category === 'Web Development' ? projectStats.webDev :
                     category === 'UI/UX Design' ? projectStats.uiux : projectStats.other}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="results-count">
            <span>Menampilkan {filteredProjects.length} project</span>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                {project.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i> Featured
                  </div>
                )}
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

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <i className="fas fa-folder-open"></i>
              <h3>Tidak ada project dalam kategori ini</h3>
              <p>Coba pilih kategori lain untuk melihat project yang tersedia</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
