import React from 'react';
import './OcularTraumaClinic.css';

const OcularTraumaClinic = () => {
  return (
    <>
      <section className="otc-hero">
        <div className="otc-shape otc-shape--one" aria-hidden="true" />
        <div className="otc-shape otc-shape--two" aria-hidden="true" />
        <div className="otc-shape otc-shape--three" aria-hidden="true" />

        <div className="otc-container">
          <div className="otc-content">
            <h1 className="otc-title">
              24x7 Ocular Trauma
              <br />
              Clinic
            </h1>
            <p className="otc-desc">
              Giridhar Eye Institute offers 24/7 ocular trauma services, with experienced surgeons and
              dedicated ophthalmologists ensuring prompt, effective care for severe eye injuries.
            </p>
          </div>

          <div className="otc-image-wrap">
            <img
              src="https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg"
              alt="Doctor"
              className="otc-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="otc-feature-grid">
        <div className="otc-feature-grid__container">
          <article className="otc-feature-card">
            <h4 className="otc-feature-card__title">
              24/7
              <br />
              Emergency
              <br />
              Services
            </h4>
            <p className="otc-feature-card__desc">
              Our clinic provides round-the-clock emergency eye care, ensuring timely treatment for
              severe ocular injuries at any time.
            </p>
          </article>

          <article className="otc-feature-card">
            <h4 className="otc-feature-card__title">
              Expert
              <br />
              Surgical
              <br />
              Team
            </h4>
            <p className="otc-feature-card__desc">
              Qualified eye surgeons specialize in ocular trauma, offering advanced surgical
              interventions for complex eye injury cases with precision.
            </p>
          </article>

          <article className="otc-feature-card">
            <h4 className="otc-feature-card__title">
              State-Of-
              <br />
              The-Art
              <br />
              Facilities
            </h4>
            <p className="otc-feature-card__desc">
              Equipped with cutting-edge technology, our clinic ensures accurate diagnostics and
              effective treatment for various eye injuries.
            </p>
          </article>

          <article className="otc-feature-card">
            <h4 className="otc-feature-card__title">
              Compassionate
              <br />
              Patient Care
            </h4>
            <p className="otc-feature-card__desc">
              Our dedicated staff prioritizes patient comfort, providing compassionate support and
              information throughout the treatment and recovery process.
            </p>
          </article>
        </div>
      </section>

      <section className="otc-near-me">
        <div className="otc-near-me__container">
          <div className="otc-near-me__content">
            <h3 className="otc-near-me__title">24 Hours Eye Hospital Near Me In Kochi</h3>
            <p className="otc-near-me__desc">
              Giridhar Eye Institute provides round-the-clock, 24/7 eye emergency services, making
              it one of the few hospitals equipped to handle such urgent needs. Our skilled ocular
              trauma team consists of qualified and experienced eye surgeons dedicated to treating
              severe cases of eye injuries, ensuring prompt and compassionate care at all times.
            </p>
          </div>

          <div className="otc-near-me__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
              alt="Hospital building"
              className="otc-near-me__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="otc-discover">
        <div className="otc-discover__container">
          <div className="otc-discover__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80"
              alt="Woman exploring services"
              className="otc-discover__image"
              loading="lazy"
            />
          </div>

          <div className="otc-discover__content">
            <h3 className="otc-discover__title">
              Discover and Explore
              <br />
              Our Eye Care Services
            </h3>
            <p className="otc-discover__desc">
              Explore our comprehensive range of eye care services designed to meet your needs.
              Click the button below to learn more about how we can help you achieve optimal eye
              health.
            </p>

            <a href="/services" className="otc-discover__btn">
              Other Eye Care Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OcularTraumaClinic;

