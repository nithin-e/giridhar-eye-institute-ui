import './AboutSection.css';

const aboutServiceCards = [
  {
    title: 'NABH Accredited Eye Hospital',
    desc: 'NABH accredited, with advanced facilities and world-class eye care.',
  },
  {
    title: 'Personalized and Inclusive Eye Care',
    desc: 'We prioritize personalized eye care, tailoring treatments to each patient.',
  },
  {
    title: 'Four Centers Across Cochin',
    desc: 'Four centers in Cochin, providing accessible, high-quality eye care.',
  },
  {
    title: 'Affordable Eye Care Solutions',
    desc: 'We provide high-quality eye care services at affordable costs.',
  },
];

export default function AboutSection() {
  return (
    <>
      <section className="gei-about">
        <div className="gei-about__bg" aria-hidden="true" />
        <div className="gei-about__container">
          <div className="gei-about__content">
            <h2 className="gei-about__title">Trusted Super-Specialty Eye Hospital in Kochi</h2>
            <h3 className="gei-about__subtitle">Serving Kerala Since 1997</h3>

            <p>
              Welcome to Giridhar Eye Institute (GEI) - the most trusted NABH-accredited super-specialty
              eye hospital in Kochi, Kerala, delivering high-quality, affordable, and compassionate eye
              care since 1997. With over two decades of excellence, GEI is known for its patient-first
              approach, cutting-edge technology, and expert team of ophthalmologists.
            </p>
            <p>
              We provide comprehensive eye care services across all major ophthalmic specialties,
              including Cataract Surgery, Glaucoma Diagnosis & Management, Retina and Vitreous Services,
              Cornea and Ocular Surface Treatments, Pediatric Ophthalmology & Squint Correction, Uvea &
              Intraocular Inflammation Care, Orbit & Oculoplasty, Neuro-Ophthalmology, Ocular Oncology,
              Artificial Eyes (Ocular Prosthesis) and Low Vision Rehabilitation.
            </p>
            <p>
              We also offer routine eye check-ups, diabetic retinopathy screening, contact lens services,
              low vision aids, and advanced laser & surgical procedures.
            </p>
            <p>
              At Giridhar Eye Institute, we are dedicated to preserving and restoring vision through
              personalized treatments, clinical excellence, and innovation making us the most trusted eye
              hospital in Kerala.
            </p>

            <div className="gei-about__stats">
              <div className="gei-about__stat">
                <span className="gei-about__statLabel">We're In Service</span>
                <div className="gei-about__statValue">28+</div>
                <div className="gei-about__statText">Years</div>
              </div>
              <div className="gei-about__stat">
                <span className="gei-about__statLabel">Patient Visits</span>
                <div className="gei-about__statValue">26 Lakhs+</div>
                <div className="gei-about__statText">Patient Visits</div>
              </div>
            </div>

            <a href="#awb-open-oc__6183" className="gei-about__cta">
              Get Your Appointment Today
            </a>
          </div>

          <div className="gei-about__imageWrap">
            <img src="/about-building.png" alt="Giridhar Eye Institute building" className="gei-about__image" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="aos-section">
        <div className="aos-btn-wrap">
          <button type="button" className="aos-main-btn">About Our Services</button>
        </div>

        <div className="aos-grid">
          {aboutServiceCards.map((card) => (
            <article key={card.title} className="aos-card">
              <div className="aos-icon-box" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="5" width="14" height="14" rx="3" stroke="white" strokeWidth="1.7" />
                  <path d="M9 12h6M12 9v6" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="aos-card-title">{card.title}</h4>
              <p className="aos-card-desc">{card.desc}</p>
              <button type="button" className="aos-learn-btn">Learn More</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}