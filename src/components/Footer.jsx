import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ardiansyah. All rights reserved.</p>
        </div>
      </footer>
      
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;
