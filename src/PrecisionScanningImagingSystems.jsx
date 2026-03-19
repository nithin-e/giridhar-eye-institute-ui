import React from 'react';
import './PrecisionScanningImagingSystems.css';

const PrecisionScanningImagingSystems = () => {
  return (
    <>
      <section className="psis-hero">
        <div className="psis-shape psis-shape--one" aria-hidden="true" />
        <div className="psis-shape psis-shape--two" aria-hidden="true" />
        <div className="psis-shape psis-shape--three" aria-hidden="true" />

        <div className="psis-container">
          <div className="psis-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Patient"
              className="psis-image"
              loading="lazy"
            />
          </div>

          <div className="psis-content">
            <h1 className="psis-title">
              Precision Scanning &amp;
              <br />
              Imaging Systems
            </h1>
            <p className="psis-desc">
              Giridhar Eye Institute features advanced imaging technologies, including Heidelberg
              Spectralis, for retina, cornea, and glaucoma, enhancing diagnostic precision and patient
              care.
            </p>
          </div>
        </div>
      </section>

      <section className="psis-advanced">
        <div className="psis-advanced__container">
          <div className="psis-advanced__content">
            <h2 className="psis-advanced__title">Advanced Imaging Technologies</h2>
            <p className="psis-advanced__desc">
              During the last decade there has been tremendous development in the imaging modalities of
              the human eye. Giridhar Eye Institute has one of the most advanced imaging systems for the
              Retina - Heidelberg Spectralis Imaging System. Apart from this hospital also has imaging
              system for the Cornea, diagnosis of Glaucoma and the most advanced Ultrasound facility for
              scanning of the eye. This is very useful for patients who come with serious eye injuries.
            </p>
          </div>

          <div className="psis-advanced__imageWrap">
            <img
              src="https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg"
              alt="Hospital building"
              className="psis-advanced__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="psis-feature-grid">
        <div className="psis-feature-grid__container">
          <article className="psis-feature-card">
            <h3 className="psis-feature-card__title">
              Heidelberg
              <br />
              Spectralis
              <br />
              Imaging
              <br />
              System
            </h3>
            <p className="psis-feature-card__desc">
              This advanced system offers high-resolution imaging of the retina, enabling detailed
              assessment and diagnosis of various retinal conditions.
            </p>
          </article>

          <article className="psis-feature-card">
            <h3 className="psis-feature-card__title">
              Corneal
              <br />
              Imaging
              <br />
              Systems
            </h3>
            <p className="psis-feature-card__desc">
              Specialized imaging technology for the cornea helps in diagnosing and managing corneal
              diseases, ensuring precise evaluations for effective treatment.
            </p>
          </article>

          <article className="psis-feature-card">
            <h3 className="psis-feature-card__title">
              Glaucoma
              <br />
              Diagnosis
              <br />
              Tools
            </h3>
            <p className="psis-feature-card__desc">
              State-of-the-art imaging modalities are utilized for the early detection and monitoring of
              glaucoma, aiding in timely intervention and management.
            </p>
          </article>

          <article className="psis-feature-card">
            <h3 className="psis-feature-card__title">
              Ultrasound
              <br />
              Facility
            </h3>
            <p className="psis-feature-card__desc">
              The advanced ultrasound facility provides essential scanning for eye injuries, facilitating
              accurate diagnosis and treatment for patients with serious ocular trauma.
            </p>
          </article>
        </div>
      </section>

      <section className="psis-discover">
        <div className="psis-discover__container">
          <div className="psis-discover__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
              alt="Child doctor"
              className="psis-discover__image"
              loading="lazy"
            />
          </div>

          <div className="psis-discover__content">
            <h2 className="psis-discover__title">
              Discover and Explore
              <br />
              Our Eye Care Services
            </h2>
            <p className="psis-discover__desc">
              Explore our comprehensive range of eye care services designed to meet your needs. Click the
              button below to learn more about how we can help you achieve optimal eye health.
            </p>
            <a href="/services" className="psis-discover__btn">
              Other Eye Care Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrecisionScanningImagingSystems;

