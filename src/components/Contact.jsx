import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState(null);

  const contactInfo = [
    { 
      icon: 'fas fa-envelope', 
      title: 'Email', 
      description: 'ardiansyah@example.com',
      link: 'mailto:ardiansyah@example.com'
    },
    { 
      icon: 'fab fa-linkedin', 
      title: 'LinkedIn', 
      description: 'linkedin.com/in/ardiansyah',
      link: 'https://linkedin.com/in/ardiansyah'
    },
    { 
      icon: 'fab fa-github', 
      title: 'GitHub', 
      description: 'github.com/ardiansyah',
      link: 'https://github.com/ardiansyah'
    },
    { 
      icon: 'fab fa-whatsapp', 
      title: 'WhatsApp', 
      description: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Mohon lengkapi semua field!', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Format email tidak valid!', 'error');
      return;
    }

    // Show success message
    showNotification('Pesan Anda telah terkirim!', 'success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p>Let's create something amazing together</p>
          </div>
          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="contact-links">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {notification && (
        <div className={`notification ${notification.type} show`}>
          {notification.message}
        </div>
      )}
    </>
  );
};

export default Contact;
