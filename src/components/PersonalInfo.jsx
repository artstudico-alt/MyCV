import React from 'react';

const PersonalInfo = () => {
  return (
    <section className="personal-info-section">
      <div className="container">
        <h2 className="section-title">PERSONAL INFO</h2>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="info-content">
              <h3>Pengalaman</h3>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="info-content">
              <h3>Pendidikan</h3>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h3>Lokasi</h3>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h3>Email</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
