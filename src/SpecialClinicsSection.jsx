import React, { useEffect, useMemo, useState } from 'react';
import './SpecialClinicsSection.css';
import { motion } from 'framer-motion';
import { viewportOnce } from './animation/motionPresets';
import { prefersReducedMotion } from './animation/prefersReducedMotion';

const ORBIT_MS = 16000;
const NODES = 7;
const STEP_DEG = 360 / NODES;
const STEP_MS = Math.round(ORBIT_MS / NODES);
const BASE_DEG = -90; // node 0 starts at top

const Icon = ({ name }) => {
  switch (name) {
    case 'glasses':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M2 11c0-2.2 1.8-4 4-4h2v2H6c-1.1 0-2 .9-2 2v3h2a3 3 0 0 0 3-3V9h2v2h2V9h2v2a3 3 0 0 0 3 3h2v-3c0-1.1-.9-2-2-2h-2V7h2c2.2 0 4 1.8 4 4v5h-4a5 5 0 0 1-4-2 5 5 0 0 1-8 0 5 5 0 0 1-4 2H2v-5Z"
          />
        </svg>
      );
    case 'eye':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 5c-5 0-9 4-10 7 1 3 5 7 10 7s9-4 10-7c-1-3-5-7-10-7Zm0 12c-3.2 0-5.8-2.4-7.5-5 1.7-2.6 4.3-5 7.5-5s5.8 2.4 7.5 5c-1.7 2.6-4.3 5-7.5 5Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          />
        </svg>
      );
    case 'house-medical':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3 2 11h3v10h6v-6h2v6h6V11h3L12 3Zm-1 6h2v3h3v2h-3v3h-2v-3H8v-2h3V9Z"
          />
        </svg>
      );
    case 'h-square':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 3h18v18H3V3Zm4 4v10h2v-4h6v4h2V7h-2v4H9V7H7Z"
          />
        </svg>
      );
    case 'crosshairs':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M11 2h2v3.07A7.002 7.002 0 0 1 18.93 11H22v2h-3.07A7.002 7.002 0 0 1 13 18.93V22h-2v-3.07A7.002 7.002 0 0 1 5.07 13H2v-2h3.07A7.002 7.002 0 0 1 11 5.07V2Zm1 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm-1 2h2v2h2v2h-2v2h-2v-2H9v-2h2V9Z"
          />
        </svg>
      );
    case 'microscope':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M9 2h2v4h1a2 2 0 0 1 2 2v1l1 1v2l-4 4-2-2 3-3V8H9V2Zm-3 9h2v6h6v2H5a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1h1v-6Zm9 1 2-2 4 4-2 2-1-1-1 1a4 4 0 0 1-3 1H9v-2h5a2 2 0 0 0 1.4-.6l1-1-1.4-1.4Z"
          />
        </svg>
      );
    case 'circle-dot':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 4a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 10Z"
          />
        </svg>
      );
    case 'person':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4Z"
          />
        </svg>
      );
    case 'arrow-up':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 5 5 12h4v7h6v-7h4l-7-7Z" />
        </svg>
      );
    default:
      return null;
  }
};

const SpecialClinicsSection = () => {
  const clinics = useMemo(
    () => [
      { id: 'low-vision', title: 'Low Vision Aid Clinic', icon: 'glasses', colorRole: 'blue' },
      { id: 'dry-eye', title: 'Dry Eye Clinic', icon: 'eye', colorRole: 'red' },
      { id: 'squint', title: 'Squint & Pediatric Clinic', icon: 'house-medical', colorRole: 'red' },
      { id: 'binocular', title: 'Binocular Vision Clinic', icon: 'h-square', colorRole: 'red' },
      { id: 'prosthetic', title: 'Ocular Prosthetic Clinic', icon: 'crosshairs', colorRole: 'red' },
      { id: 'diabetic', title: 'Diabetic Eye Clinic', icon: 'microscope', colorRole: 'red' },
      { id: 'contact-lens', title: 'Contact Lens Clinic', icon: 'circle-dot', colorRole: 'red' },
    ],
    [],
  );

  const descriptions = useMemo(
    () => ({
      'low-vision': 'Support and devices to enhance vision for severe impairments.',
      'dry-eye': 'Focused care for dry eye and ocular surface disorders.',
      squint: 'Child-friendly care for squint and pediatric vision conditions.',
      binocular: 'Improves eye coordination, depth perception, and visual function.',
      prosthetic: 'Customized artificial eyes offering aesthetic and functional solutions for patients.',
      diabetic: 'Advanced screening and management for diabetic eye conditions.',
      'contact-lens': 'Expert fittings and personalized contact lens care.',
    }),
    [],
  );

  const [displayIndex, setDisplayIndex] = useState(4); // drives center content + active node
  const [isFading, setIsFading] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const interval = window.setInterval(() => {
      setIsFading(true);
      window.setTimeout(() => {
        setDisplayIndex((prev) => (prev + 1) % NODES);
        setIsFading(false);
        setRippleKey((k) => k + 1);
      }, 250);
    }, STEP_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const orbitNodes = clinics.map((clinic, i) => {
    const angleDeg = BASE_DEG + i * STEP_DEG;
    const angleRad = (angleDeg * Math.PI) / 180;
    const left = 230 + 230 * Math.cos(angleRad) - 28;
    const top = 230 + 230 * Math.sin(angleRad) - 28;
    const isActive = i === displayIndex;
    return { clinic, i, left, top, isActive };
  });

  const activeClinic = clinics[displayIndex];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="scs">
      <div className="scs__wrap">
        <div className="scs__left">
          <div className="scs__kicker">Special Clinics</div>
          <div className="scs__title">Focused Eye Care Services</div>
          <div className="scs__lead">
            Explore our <strong>specialized eye clinics</strong> offering focused care for:
          </div>
          <div className="scs__para">
            Dry Eye &amp; Ocular Surface Disorders, Diabetic Eye Screening, Contact Lens Services,
            Low Vision &amp; Rehabilitation, Post-operative Care &amp; Counseling
          </div>
          <button type="button" className="scs__btn">
            Learn About Us
          </button>
        </div>

        <div className="scs__right">
          <div className="scs__diagram" aria-label="Special clinics orbital diagram">
            <motion.svg
              className="scs__ringSvg"
              aria-hidden="true"
              viewBox="0 0 520 520"
              initial={prefersReducedMotion() ? undefined : { pathLength: 0 }}
              whileInView={prefersReducedMotion() ? undefined : { pathLength: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <motion.circle
                cx="260"
                cy="260"
                r="230"
                fill="none"
                stroke="rgba(51, 85, 204, 0.5)"
                strokeWidth="2"
                strokeDasharray="6 8"
                pathLength={1}
              />
            </motion.svg>

            <motion.div
              className={`scs__center ${isFading ? 'is-fading' : ''}`}
              initial={prefersReducedMotion() ? undefined : { scale: 0, x: '-50%', y: '-50%' }}
              whileInView={prefersReducedMotion() ? undefined : { scale: 1, x: '-50%', y: '-50%' }}
              viewport={viewportOnce}
              transition={
                prefersReducedMotion()
                  ? undefined
                  : { type: 'spring', stiffness: 100, damping: 15 }
              }
            >
              <span key={rippleKey} className="scs__ripple" aria-hidden="true" />
              <div className="scs__centerTitle">{activeClinic.title}</div>
              <div className="scs__centerDesc">{descriptions[activeClinic.id]}</div>
            </motion.div>

            <div className="scs__orbit" aria-hidden="true">
              {orbitNodes.map((n) => (
                <motion.button
                  key={n.clinic.id}
                  type="button"
                  className={`scs__node ${n.isActive ? 'is-active is-blue' : 'is-red'}`}
                  style={{ left: `${n.left}px`, top: `${n.top}px` }}
                  title={n.clinic.title}
                  aria-label={n.clinic.title}
                  initial={prefersReducedMotion() ? undefined : { scale: 0, opacity: 0 }}
                  whileInView={prefersReducedMotion() ? undefined : { scale: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={
                    prefersReducedMotion()
                      ? undefined
                      : { duration: 0.45, ease: 'easeOut', delay: n.i * 0.15 }
                  }
                >
                  <span className="scs__nodeInner">
                    <span className="scs__iconPulse" aria-hidden="true">
                      <Icon name={n.clinic.icon} />
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="scs__float">
            <button type="button" className="scs__consult">
              <span className="scs__consultIcon" aria-hidden="true">
                <Icon name="person" />
              </span>
              E-Consultation
            </button>
            <button type="button" className="scs__up" onClick={scrollToTop} aria-label="Scroll to top">
              <Icon name="arrow-up" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialClinicsSection;

