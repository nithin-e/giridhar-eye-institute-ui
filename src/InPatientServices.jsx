import React from 'react';
import './InPatientServices.css';

const InPatientServices = () => {
  return (
    <>
      <section className="inpatient-services">
        <div className="ips-shape ips-shape--one" aria-hidden="true" />
        <div className="ips-shape ips-shape--two" aria-hidden="true" />
        <div className="ips-shape ips-shape--three" aria-hidden="true" />

        <div className="ips-container">
          <div className="ips-content-wrapper">
            <div className="ips-content-left">
              <img
                className="ips-doctor-image"
                src="https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg"
                alt="Doctor"
                loading="lazy"
              />
            </div>

            <div className="ips-content-right">
              <h2 className="ips-section-title">In-Patient Services</h2>
              <p className="ips-section-description">
                Experience world-class treatment in our state-of-the-art facilities, with personalized
                care and comfort during your stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ips-personalized">
        <div className="ips-personalized__container">
          <div className="ips-personalized__content">
            <h3 className="ips-personalized__title">Personalized In Patient Care In Kochi</h3>
            <p className="ips-personalized__desc">
              At our eye care center, we prioritize your comfort and well-being. With a focus on
              compassionate care and advanced technology, we strive to provide the highest quality of
              service, ensuring every patient receives personalized attention throughout their journey
              to better eye health.
            </p>
          </div>
          <div className="ips-personalized__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
              alt="Hospital building"
              className="ips-personalized__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="ips-feature-grid">
        <div className="ips-feature-grid__container">
          <article className="ips-feature-card">
            <h4 className="ips-feature-card__title">Comprehensive Facilities</h4>
            <p className="ips-feature-card__desc">
              A 30-bedded eye care center offering ambulatory wards, general wards, and elite rooms.
            </p>
          </article>

          <article className="ips-feature-card ips-feature-card--accent">
            <h4 className="ips-feature-card__title">Advanced Technology</h4>
            <p className="ips-feature-card__desc">
              Equipped with a world-class operation theatre utilizing imported quality equipment for
              precise procedures.
            </p>
          </article>

          <article className="ips-feature-card">
            <h4 className="ips-feature-card__title">Dedicated Care</h4>
            <p className="ips-feature-card__desc">
              Our dedicated staff provides personalized care, ensuring patient comfort and well-being
              throughout their stay.
            </p>
          </article>

          <article className="ips-feature-card">
            <h4 className="ips-feature-card__title">Round-The-Clock Support</h4>
            <p className="ips-feature-card__desc">
              Offering 24/7 trauma care for emergency situations, ensuring immediate assistance
              whenever needed.
            </p>
          </article>
        </div>
      </section>

      <section className="ips-admission">
        <div className="ips-admission__container">
          <div className="ips-admission__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80"
              alt="Hospital team"
              className="ips-admission__image"
              loading="lazy"
            />
          </div>

          <div className="ips-admission__content">
            <h3 className="ips-admission__title">Admission</h3>
            <p className="ips-admission__desc">
              Patients requiring surgery or close monitoring will be admitted to our hospital for
              optimal care. Based on the type of surgery and medical advice, accommodations will be
              provided for either day care or an overnight stay to ensure comprehensive recovery and
              support.
            </p>
          </div>
        </div>
      </section>

      <section className="ips-room-grid">
        <div className="ips-room-grid__container">
          <article className="ips-room-card">
            <h4 className="ips-room-card__title">
              General
              <br />
              Ward (Non-
              <br />
              AC)
            </h4>
            <p className="ips-room-card__desc">
              Affordable accommodation option with basic amenities for patients requiring standard
              care.
            </p>
          </article>

          <article className="ips-room-card">
            <h4 className="ips-room-card__title">
              General
              <br />
              Ward (AC)
            </h4>
            <p className="ips-room-card__desc">
              Comfortable ward equipped with air conditioning for a more pleasant stay during
              treatment.
            </p>
          </article>

          <article className="ips-room-card">
            <h4 className="ips-room-card__title">
              Single Room
              <br />
              (Non-AC)
            </h4>
            <p className="ips-room-card__desc">
              Private room offering personal space and comfort without air conditioning.
            </p>
          </article>

          <article className="ips-room-card">
            <h4 className="ips-room-card__title">
              Deluxe Room
              <br />
              (AC) &amp; Elite
              <br />
              Room (AC)
            </h4>
            <p className="ips-room-card__desc">
              Premium accommodations with enhanced amenities and air conditioning for a luxurious
              patient experience.
            </p>
          </article>
        </div>
      </section>

      <section className="ips-discharge">
        <div className="ips-discharge__container">
          <div className="ips-discharge__content">
            <h3 className="ips-discharge__title">Discharge And Visitor Guidelines</h3>
            <p className="ips-discharge__desc">
              At discharge, our doctors and nurses will provide comprehensive instructions on
              post-operative care, medications, and the discharge summary.
            </p>
            <p className="ips-discharge__time">
              <span>Patient Visiting Time:</span> 5:00 PM to 8:00 PM
            </p>
          </div>

          <div className="ips-discharge__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
              alt="Hospital building"
              className="ips-discharge__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InPatientServices;

