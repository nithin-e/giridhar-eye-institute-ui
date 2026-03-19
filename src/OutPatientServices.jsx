import React from 'react';
import './OutPatientServices.css';

const OutPatientServices = () => {
  return (
    <>
      <section className="ops-hero">
        <div className="ops-shape ops-shape--one" aria-hidden="true" />
        <div className="ops-shape ops-shape--two" aria-hidden="true" />
        <div className="ops-shape ops-shape--three" aria-hidden="true" />

        <div className="ops-container">
          <div className="ops-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=1200&q=80"
              alt="Doctor"
              className="ops-image"
              loading="lazy"
            />
          </div>

          <div className="ops-content">
            <h1 className="ops-title">
              Out-Patient
              <br />
              Services
            </h1>
            <p className="ops-desc">
              Our outpatient services provide specialized consultations, advanced diagnostics, and 24/7
              emergency support for your eye care needs.
            </p>
          </div>
        </div>
      </section>

      <section className="ops-excellent">
        <div className="ops-excellent__container">
          <div className="ops-excellent__content">
            <h3 className="ops-excellent__title">Excellent Out Patient Services In Kochi, Kerala</h3>
            <p className="ops-excellent__desc">
              Our advanced outpatient services provide exceptional eye care with ophthalmic anesthesia,
              comprehensive optometry, and fully equipped ophthalmic procedures. The 12,000 sq ft
              air-conditioned facility offers 28 consultation rooms, paperless medical records, and
              specialized services for disabled patients.
            </p>
            <p className="ops-excellent__desc">
              Emergency care is supported by ambulance and wheelchair facilities, ensuring patient
              comfort and accessibility.
            </p>
          </div>

          <div className="ops-excellent__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
              alt="Hospital building"
              className="ops-excellent__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="ops-feature-grid">
        <div className="ops-feature-grid__container">
          <article className="ops-feature-card">
            <h4 className="ops-feature-card__title">
              Comprehensive
              <br />
              Eye Care At
              <br />
              Giridhar
            </h4>
            <p className="ops-feature-card__desc">
              Offering ophthalmic anesthesia, optometry services, ERG-EOG, and advanced ophthalmic
              procedures in state-of-the-art clinics.
            </p>
          </article>

          <article className="ops-feature-card">
            <h4 className="ops-feature-card__title">
              Modern
              <br />
              Outpatient
              <br />
              Facility
            </h4>
            <p className="ops-feature-card__desc">
              12,000 sq ft air-conditioned center with 28 consultation rooms, providing top-tier
              diagnostic and treatment services.
            </p>
          </article>

          <article className="ops-feature-card">
            <h4 className="ops-feature-card__title">
              Accessible
              <br />
              And Patient-
              <br />
              Centered
            </h4>
            <p className="ops-feature-card__desc">
              Separate consultation rooms for disabled and emergency cases, supported by wheelchair
              and ambulance services.
            </p>
          </article>

          <article className="ops-feature-card">
            <h4 className="ops-feature-card__title">
              Efficient And
              <br />
              Paperless
              <br />
              System
            </h4>
            <p className="ops-feature-card__desc">
              Electronic Medical Records system ensures streamlined care and seamless patient data
              management across all departments.
            </p>
          </article>
        </div>
      </section>

      <section className="ops-availability">
        <div className="ops-availability__container">
          <div className="ops-availability__content">
            <h3 className="ops-availability__title">
              Outpatient and
              <br />
              Emergency Care
              <br />
              Availability
            </h3>

            <ul className="ops-availability__list">
              <li>
                <span className="ops-availability__icon" aria-hidden="true">☑</span>
                Monday to Saturday: 07:30 AM – 07:00 PM
              </li>
              <li>
                <span className="ops-availability__icon" aria-hidden="true">☑</span>
                Sunday: 09:00 AM – 06:00 PM
              </li>
              <li>
                <span className="ops-availability__icon" aria-hidden="true">⟲</span>
                24/7 Eye Emergency Services
              </li>
              <li>
                <span className="ops-availability__icon" aria-hidden="true">✆</span>
                Call 04844170000 to schedule your appointments
              </li>
            </ul>

            <a href="/book-appointment" className="ops-availability__btn">
              Book Your Appointment Online
            </a>
          </div>

          <div className="ops-availability__imageWrap">
            <img
              src="https://www.giridhareye.org/wp-content/uploads/2024/10/youtube-img-1-scaled.jpg"
              alt="Woman patient"
              className="ops-availability__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="ops-exam">
        <div className="ops-exam__container">
          <div className="ops-exam__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80"
              alt="Hospital team"
              className="ops-exam__image"
              loading="lazy"
            />
          </div>

          <div className="ops-exam__content">
            <h3 className="ops-exam__title">Eye Examination Procedures</h3>
            <p className="ops-exam__desc">
              A comprehensive eye examination assesses vision and eye health through various
              procedures, including vision tests, tonometry, refraction, and dilation. The final
              evaluation determines the appropriate treatment options, ensuring personalized care
              based on individual medical conditions and needs.
            </p>
          </div>
        </div>
      </section>

      <section className="ops-exam-grid">
        <div className="ops-exam-grid__container">
          <article className="ops-exam-card">
            <h4 className="ops-exam-card__title">Vision Test</h4>
            <p className="ops-exam-card__desc">
              This test evaluates visual acuity using an eye chart to determine the patient&apos;s
              level of vision and identify any potential issues affecting sight.
            </p>
          </article>

          <article className="ops-exam-card">
            <h4 className="ops-exam-card__title">
              Non-Contact
              <br />
              Tonometry
              <br />
              Test
            </h4>
            <p className="ops-exam-card__desc">
              Conducted by ophthalmic assistants, this test measures intraocular pressure
              non-invasively, ensuring comfort while assessing glaucoma risk for patients.
            </p>
          </article>

          <article className="ops-exam-card">
            <h4 className="ops-exam-card__title">
              Refraction
              <br />
              And
              <br />
              Preliminary
              <br />
              Examination
            </h4>
            <p className="ops-exam-card__desc">
              Optometrists assess exact eye power through refraction, while doctors gather medical
              history for an accurate initial evaluation of eye health.
            </p>
          </article>

          <article className="ops-exam-card">
            <h4 className="ops-exam-card__title">
              Dilatation
              <br />
              And Final
              <br />
              Examination
            </h4>
            <p className="ops-exam-card__desc">
              Dilating drops enhance the view of the eye&apos;s interior, followed by a final
              examination to recommend medications, spectacles, surgery, or referrals.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default OutPatientServices;

