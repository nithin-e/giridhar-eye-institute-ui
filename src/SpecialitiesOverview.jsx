import React, { useMemo, useState } from 'react';
import './SpecialClinicsOverview.css';

const SpecialClinicsOverview = () => {
  const clinics = useMemo(
    () => [
      {
        id: 'uvea',
        title: 'Uvea Clinic',
        description: 'Specialized care for uveitis and uveal disorders with advanced expertise.',
        iconLabel: 'U',
      },
      {
        id: 'dry-eye',
        title: 'Dry Eye Clinic',
        description: 'Focused treatment for dry eye and ocular surface disorders.',
        iconLabel: 'D',
      },
      {
        id: 'contact-lens',
        title: 'Contact Lens Clinic',
        description: 'Expert fittings and personalized care for contact lenses, ensuring comfort and vision.',
        iconLabel: 'CL',
      },
      {
        id: 'keratoconus',
        title: 'Keratoconus Clinic',
        description: 'Advanced care and treatment for progressive keratoconus to preserve vision.',
        iconLabel: 'K',
      },
      {
        id: 'low-vision',
        title: 'Low Vision Aid Clinic',
        description: 'Tailored support and devices to enhance vision for severe impairments.',
        iconLabel: 'LV',
      },
      {
        id: 'prosthetic',
        title: 'Ocular Prosthetic Clinic',
        description: 'Customized artificial eyes offering aesthetic and functional solutions for patients.',
        iconLabel: 'OP',
      },
      {
        id: 'binocular',
        title: 'Binocular Vision Clinic',
        description: 'Treats eye coordination and depth perception for better visual function.',
        iconLabel: 'BV',
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState('uvea');
  const active = clinics.find((c) => c.id === activeId) ?? clinics[0];

  // Positions around ring (degrees). Matches “icons around circle” layout.
  const ringItems = [
    { id: 'dry-eye', deg: -140 },
    { id: 'keratoconus', deg: -90 },
    { id: 'contact-lens', deg: -40 },
    { id: 'uvea', deg: 10 },
    { id: 'binocular', deg: 60 },
    { id: 'prosthetic', deg: 115 },
    { id: 'low-vision', deg: 170 },
  ];

  return (
    <section className="sco">
      <div className="sco__wrap">
        <div className="sco__left">
          <h2 className="sco__kicker">Special Clinics</h2>
          <h3 className="sco__title">Focused Eye Care Services</h3>
          <p className="sco__desc">
            Explore our specialized eye clinics offering focused care for:
          </p>
          <p className="sco__desc sco__descStrong">
            Dry Eye &amp; Ocular Surface Disorders, Diabetic Eye Screening, Contact Lens Services,
            Low Vision &amp; Rehabilitation, Post‑operative Care &amp; Counseling
          </p>
          <button type="button" className="sco__btn">
            Learn About Us
          </button>
        </div>

        <div className="sco__right" aria-label="Special clinics diagram">
          <div className="sco__ring">
            <div className="sco__ringDots" aria-hidden="true" />

            {ringItems.map((item) => {
              const clinic = clinics.find((c) => c.id === item.id);
              if (!clinic) return null;
              const isActive = clinic.id === activeId;
              return (
                <button
                  key={clinic.id}
                  type="button"
                  className={`sco__icon ${isActive ? 'is-active' : ''}`}
                  style={{ '--deg': `${item.deg}deg` }}
                  onClick={() => setActiveId(clinic.id)}
                  aria-pressed={isActive}
                  aria-label={clinic.title}
                  title={clinic.title}
                >
                  <span className="sco__iconInner">{clinic.iconLabel}</span>
                </button>
              );
            })}

            <div className="sco__center">
              <div key={active.id} className="sco__centerCard sco__centerCard--swap">
                <h4 className="sco__centerTitle">{active.title}</h4>
                <p className="sco__centerDesc">{active.description}</p>
              </div>
            </div>
          </div>

          <div className="sco__badge" aria-hidden="true">
            E‑Consultation
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialClinicsOverview;