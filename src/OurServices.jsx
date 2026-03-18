import React from 'react';
import './OurServices.css';
import { motion } from 'framer-motion';
import { revealHeading, revealStaggerParent, viewportOnce } from './animation/motionPresets';

const flipIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Icon = ({ name }) => {
  switch (name) {
    case 'inpatient':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 9a3 3 0 0 1 3-3h6a4 4 0 1 1 0 8H8v3h2v2H4v-2h2V9H4zm4 3h5a2 2 0 1 0 0-4H8v4zm10-7h2v14h-2v-5h-6v-2h6V5z"
          />
        </svg>
      );
    case 'outpatient':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 5c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4Zm-6 4c.9-1.2 3.22-2 6-2s5.1.8 6 2H6Z"
          />
        </svg>
      );
    case 'scan':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 3H3v4h2V5h2V3Zm14 0h-4v2h2v2h2V3ZM5 19v-2H3v4h4v-2H5Zm16-2h-2v2h-2v2h4v-4ZM8 8h8v8H8V8Zm2 2v4h4v-4h-4Z"
          />
        </svg>
      );
    case 'trauma':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5v5.2l3.6 2.1-1 1.7L11 13V7h2Z"
          />
        </svg>
      );
    case 'lens':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 6c0-1.1.9-2 2-2h6a6 6 0 0 1 0 12H5c-1.1 0-2-.9-2-2V6Zm8 8a4 4 0 0 0 0-8H5v8h6Zm10-8h-6a6 6 0 0 0 0 12h6v-2h-6a4 4 0 0 1 0-8h6V6Z"
          />
        </svg>
      );
    case 'orthoptic':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 5c-5 0-9 4-10 7 1 3 5 7 10 7s9-4 10-7c-1-3-5-7-10-7Zm0 12c-3.2 0-5.8-2.4-7.5-5 1.7-2.6 4.3-5 7.5-5s5.8 2.4 7.5 5c-1.7 2.6-4.3 5-7.5 5Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm1 3h-2a1 1 0 1 1 2 0Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      title: 'In-Patient Services',
      description:
        'Experience specialized eye care treatments and surgeries, expertly provided in a comfortable and patient-friendly hospital setting.',
      link: '/services/in-patient-services',
      icon: 'inpatient',
    },
    {
      id: 2,
      title: 'Out-Patient Services',
      description:
        'Access comprehensive eye care and specialist consultations, conveniently available for all non-hospitalized patients.',
      link: '/services/out-patient-services',
      icon: 'outpatient',
    },
    {
      id: 3,
      title: 'Precision Scanning & Imaging',
      description:
        'Advanced imaging technology enables precise diagnoses and enhances effective treatment planning for optimal eye care.',
      link: '/services/precision-scanning-imaging-systems',
      icon: 'scan',
    },
    {
      id: 4,
      title: '24 X 7 Ocular Trauma Clinic',
      description:
        'Receive immediate and comprehensive care for eye injuries and emergencies, available round the clock for your safety and peace of mind.',
      link: '/services/ocular-trauma-clinic',
      icon: 'trauma',
    },
    {
      id: 5,
      title: 'Contact Lens Clinic',
      description:
        'Get expert fittings and personalized care to ensure comfortable, clear vision with contact lenses tailored to your needs.',
      link: '/contact-lens-clinic',
      icon: 'lens',
    },
    {
      id: 6,
      title: 'Orthoptic Evaluation',
      description:
        'Detailed assessments and treatments for binocular vision problems and eye movement disorders.',
      link: '/services/orthoptic-evaluation',
      icon: 'orthoptic',
    },
  ];

  return (
    <motion.section
      className="our-services"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="our-services__container">
        <motion.div variants={revealHeading} className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Our services offer comprehensive eye care, guiding patients from diagnosis to advanced
            treatment with personalized attention and expert solutions for all eye conditions.
          </p>
        </motion.div>

        <motion.div variants={revealStaggerParent} className="services-grid">
          {servicesData.map((service) => (
            <motion.article key={service.id} variants={flipIn} className="os-card">
              <div className="os-card__rail" aria-hidden="true">
                <div className="os-card__icon">
                  <Icon name={service.icon} />
                </div>
                <div className="os-card__line" />
              </div>

              <div className="os-card__body">
                <h3 className="os-card__title">{service.title}</h3>
                <p className="os-card__desc">{service.description}</p>
                <a href={service.link} className="os-card__link">
                  Read More <span aria-hidden="true">›</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurServices;

