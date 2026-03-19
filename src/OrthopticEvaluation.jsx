import React from 'react';
import './OrthopticEvaluation.css';

const OrthopticEvaluation = () => {
  return (
    <>
      <section className="oe-hero">
        <div className="oe-shape oe-shape--one" aria-hidden="true" />
        <div className="oe-shape oe-shape--two" aria-hidden="true" />
        <div className="oe-shape oe-shape--three" aria-hidden="true" />

        <div className="oe-container">
          <div className="oe-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
              alt="Child doctor"
              className="oe-image"
              loading="lazy"
            />
          </div>

          <div className="oe-content">
            <h1 className="oe-title">Orthoptic Evaluation</h1>
            <p className="oe-desc">
              The orthoptic evaluation assesses visual function and eye movement, helping diagnose and
              treat conditions like strabismus and amblyopia effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="oe-tests">
        <div className="oe-tests__container">
          <div className="oe-tests__content">
            <h2 className="oe-tests__title">Orthoptic Evaluation Tests In Kerala</h2>
            <p className="oe-tests__desc">
              Orthoptic evaluation focuses on assessing visual function and eye movement to diagnose and
              manage various eye disorders. This evaluation is crucial for detecting conditions such as
              strabismus (crossed eyes) and amblyopia (lazy eye). By using specialized tests,
              orthoptists develop tailored treatment plans to improve binocular vision and overall eye
              health.
            </p>
          </div>

          <div className="oe-tests__imageWrap">
            <img
              src="https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg"
              alt="Hospital building"
              className="oe-tests__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="oe-feature-grid">
        <div className="oe-feature-grid__container">
          <article className="oe-feature-card">
            <h3 className="oe-feature-card__title">
              Assessment
              <br />
              Of Eye
              <br />
              Movements
            </h3>
            <p className="oe-feature-card__desc">
              Orthoptic evaluation analyzes eye movements to identify issues like strabismus, aiding in
              diagnosing conditions that affect visual function.
            </p>
          </article>

          <article className="oe-feature-card">
            <h3 className="oe-feature-card__title">
              Vision
              <br />
              Function
              <br />
              Testing
            </h3>
            <p className="oe-feature-card__desc">
              Various tests measure visual acuity and depth perception, crucial for diagnosing amblyopia
              and evaluating overall binocular vision health.
            </p>
          </article>

          <article className="oe-feature-card">
            <h3 className="oe-feature-card__title">
              Personalized
              <br />
              Treatment
              <br />
              Plans
            </h3>
            <p className="oe-feature-card__desc">
              Orthoptists develop individualized treatment plans based on evaluation results, utilizing
              vision therapy, corrective lenses, or other interventions for improvement.
            </p>
          </article>

          <article className="oe-feature-card">
            <h3 className="oe-feature-card__title">
              Monitoring
              <br />
              Progress
            </h3>
            <p className="oe-feature-card__desc">
              Follow-up assessments are conducted to track treatment effectiveness, allowing adjustments
              to ensure optimal outcomes in eye health and function.
            </p>
          </article>
        </div>
      </section>

      <section className="oe-discover">
        <div className="oe-discover__container">
          <div className="oe-discover__imageWrap">
            <img
              src="https://www.giridhareye.org/wp-content/uploads/2024/10/youtube-img-1-scaled.jpg"
              alt="Eye care services"
              className="oe-discover__image"
              loading="lazy"
            />
          </div>

          <div className="oe-discover__content">
            <h2 className="oe-discover__title">
              Discover and Explore
              <br />
              Our Eye Care Services
            </h2>
            <p className="oe-discover__desc">
              Explore our comprehensive range of eye care services designed to meet your needs. Click
              the button below to learn more about how we can help you achieve optimal eye health.
            </p>
            <a href="/services" className="oe-discover__btn">
              Other Eye Care Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrthopticEvaluation;

