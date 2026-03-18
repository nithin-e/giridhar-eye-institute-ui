import React from 'react';
import './GiridharEyeInstitute.css';

const GiridharEyeInstitute = () => {
  return (
    <div className="gei-container">
      <header className="gei-header">
        <div className="gei-logo-container">
          <h1 className="gei-main-title">Giridhar Eye Institute</h1>
          <p className="gei-tagline">Lighting up Lives</p>
        </div>
      </header>

      <main className="gei-main-content">
        <section className="gei-section-title">
          <h2 className="gei-section-heading">About Our Services</h2>
        </section>

        <section className="gei-services-grid">
          <article className="gei-service-card">
            <h3 className="gei-card-title">NABH Accredited Eye Hospital</h3>
            <p className="gei-card-description">
              NABH accredited, with advanced facilities and world-class eye care.
            </p>
          </article>

          <article className="gei-service-card">
            <h3 className="gei-card-title">Personalized and Inclusive Eye Care</h3>
            <p className="gei-card-description">
              We prioritize personalized eye care, tailoring treatments to each patient.
            </p>
          </article>

          <article className="gei-service-card">
            <h3 className="gei-card-title">Four Centers Across Cochin</h3>
            <p className="gei-card-description">
              Four centers in Cochin, providing accessible, high-quality eye care.
            </p>
          </article>

          <article className="gei-service-card">
            <h3 className="gei-card-title">Affordable Eye Care Solutions</h3>
            <p className="gei-card-description">
              We provide high-quality eye care services at affordable costs.
            </p>
          </article>
        </section>

        <section className="gei-cta-section">
          <h2 className="gei-cta-title">Request An Appointment</h2>
          <a
            href="https://www.giridhareye.org/#tab-883ca36c4cfdb3bca13"
            target="_blank"
            rel="noopener noreferrer"
            className="gei-cta-button"
          >
            Book Now
          </a>
        </section>
      </main>
    </div>
  );
};

export default GiridharEyeInstitute;

