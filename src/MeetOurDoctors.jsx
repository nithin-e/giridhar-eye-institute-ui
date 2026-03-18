import React, { useMemo, useState } from 'react';
import './MeetOurDoctors.css';
import { motion } from 'framer-motion';
import { revealCard, revealHeading, revealImage, revealStaggerParent, viewportOnce } from './animation/motionPresets';

const TabIcon = ({ id }) => {
  switch (id) {
    case 'choose':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a7 7 0 0 1 6.93 6H22v2h-3.07A7 7 0 0 1 12 22a7 7 0 0 1-6.93-6H2V14h3.07A7 7 0 0 1 12 2Zm0 2a5 5 0 0 0-4.9 4H10v2H7.1a5.02 5.02 0 0 0 0 4H10v2H7.1A5 5 0 1 0 12 4Zm2 4h2v2h-2V8Zm-4 0h2v2h-2V8Zm2 4a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"
          />
        </svg>
      );
    case 'visit':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 2.9 3.16 7.5 5 9.73 1.84-2.23 5-6.83 5-9.73a5 5 0 0 0-5-5Zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
          />
        </svg>
      );
    case 'emergency':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 4v5h5v2h-5v5h-2v-5H6v-2h5V6h2Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const MeetOurDoctors = () => {
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Giridhar A',
      title: 'Medical Director & Chief Mentor',
      imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
      alt: 'Dr. Giridhar, leading retina surgeon in Kerala',
    },
    {
      id: 2,
      name: 'Dr. S J Saikumar',
      title: 'Medical Superintendent & Head',
      imageUrl:
        'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
      alt: 'Dr. Saikumar from best eye hospital in Kochi, Giridhar',
    },
    {
      id: 3,
      name: 'Dr. Thomas Kuriakose',
      title: 'Senior Consultant & Director of Academics',
      imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
      alt: 'Dr. Thomas from best eye hospital in Kochi, Giridhar',
    },
  ];

  const tabs = useMemo(
    () => [
      { id: 'choose', label: 'Why Choose Us?' },
      { id: 'visit', label: 'Visit Us in Kochi, Kerala' },
      { id: 'emergency', label: '24/7 Emergency EyeCare' },
    ],
    [],
  );

  const [activeTab, setActiveTab] = useState('choose');

  return (
    <motion.section
      className="meet-doctors"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="mod-container">
        <motion.div variants={revealHeading} className="section-header">
          <h2 className="section-title">Meet Your Doctors</h2>
          <p className="section-description">
            Meet our team of experienced eye specialists dedicated to providing compassionate care,
            advanced treatments, and expert solutions for all your eye health needs.
          </p>
        </motion.div>

        <motion.div variants={revealStaggerParent} className="doctors-grid">
          {doctorsData.map((doctor) => (
            <motion.article key={doctor.id} variants={revealCard} className="doctor-card">
              <div className="doctor-image-container">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.alt}
                  className="doctor-image"
                  loading="lazy"
                />
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-title">{doctor.title}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={revealCard} className="notification-banner">
          <div className="notification-content">
            <span className="notification-icon" aria-hidden="true">
              🎓
            </span>
            <p className="notification-text">
              <strong>Admission Notification</strong> — 24 Months Medical &amp; Surgical Retina
              Fellowship Admission Started.{' '}
              <a href="/education-training/medical-retina-fellowship" className="notification-link">
                Click Here To Know More
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div variants={revealCard} className="mod-tabs" role="tablist" aria-label="Meet our doctors info tabs">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`mod-tab ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mod-tab__icon" aria-hidden="true">
                  <TabIcon id={tab.id} />
                </span>
                <span className="mod-tab__label">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div variants={revealCard} className="mod-panel" role="tabpanel">
          {activeTab === 'choose' && (
            <div className="mod-panel__content">
              <motion.div variants={revealImage} className="mod-panel__media" aria-hidden="true">
                <img
                  src="https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg"
                  alt=""
                  className="mod-panel__img"
                  loading="lazy"
                />
              </motion.div>
              <div className="mod-panel__text">
                <p>
                  Giridhar Eye Institute is a NABH-accredited super-specialty eye hospital in Kochi,
                  Kerala, trusted by patients across Kerala for over 27 years. We combine advanced
                  technology with the expertise of skilled ophthalmologists to deliver world-class
                  eye care under one roof. Our patient-first approach, rooted in ethics and
                  compassion, ensures personalized treatment and exceptional outcomes for every
                  individual seeking quality eye care.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'visit' && (
            <div className="mod-panel__content mod-panel__content--single">
              <p>
                Whether you’re looking for a trusted cataract surgery center, a specialized retina
                clinic, or a routine eye check-up, Giridhar Eye Institute is your go-to eye hospital
                in Kochi, Kerala. We also offer advanced LASIK and laser vision correction,
                comprehensive glaucoma care, expert cornea treatments, pediatric ophthalmology,
                oculoplasty, uvea services, and neuro-ophthalmology—all under one roof with
                personalized attention and world-class expertise.
              </p>
            </div>
          )}

          {activeTab === 'emergency' && (
            <div className="mod-panel__content mod-panel__content--single">
              <p>
                Our 24×7 emergency trauma eye care at Kadavanthra center ensures immediate attention
                for urgent vision problems, giving you peace of mind around the clock.
              </p>
            </div>
          )}
        </motion.div>

        <button className="chat-button" aria-label="Open chat">
          <span className="chat-icon" aria-hidden="true">
            💬
          </span>
          <span className="chat-text">Chat</span>
        </button>
      </div>
    </motion.section>
  );
};

export default MeetOurDoctors;

