import React, { useState } from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { revealCard, revealHeading, revealStaggerParent, viewportOnce } from './animation/motionPresets';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="footer-container">
        <motion.div variants={revealStaggerParent} className="footer-main">
          <motion.div variants={revealCard} className="footer-column">
            <h3 className="footer-title">About Us</h3>
            <ul className="footer-links">
              <li>
                <a href="/history">History</a>
              </li>
              <li>
                <a href="/mission-vision">Mission &amp; Vision</a>
              </li>
              <li>
                <a href="/eye-doctors-in-kochi">Doctors</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/leadership">Leadership</a>
              </li>
              <li>
                <a href="/our-centers">Our Centers</a>
              </li>
              <li>
                <a href="/expert-eye-care-eye-hospital-near-me-kochi">Contact Us</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={revealCard} className="footer-column">
            <h3 className="footer-title">Specialities</h3>
            <ul className="footer-links">
              <li>
                <a href="/specialities/cataract-surgery-in-kochi">Cataract</a>
              </li>
              <li>
                <a href="/specialities/retina-doctors-in-kochi">Vitreo Retina</a>
              </li>
              <li>
                <a href="/specialities/cornea-laser-correction">Cornea &amp; Laser Correction</a>
              </li>
              <li>
                <a href="/specialities/paediatric-squint-neuro-ophtal">
                  Paediatric, Squint &amp; Neuro Ophthal
                </a>
              </li>
              <li>
                <a href="/specialities/orbit-oculoplasty">Orbit &amp; Oculoplasty</a>
              </li>
              <li>
                <a href="/specialities/uvea-services">Uvea Services</a>
              </li>
              <li>
                <a href="/specialities/community-ophthalmology">Community Ophthalmology</a>
              </li>
              <li>
                <a href="/specialities/general-ophthalmology">General Ophthalmology</a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={revealCard} className="footer-column">
            <h3 className="footer-title">Special Clinics</h3>
            <ul className="footer-links">
              <li>
                <a href="/keratoconus-clinic">Keratoconus Clinic</a>
              </li>
              <li>
                <a href="/low-vision-aid-clinic">Low Vision Aid Clinic</a>
              </li>
              <li>
                <a href="/ocular-prosthetic-clinic">Ocular Prosthetic Clinic</a>
              </li>
              <li>
                <a href="/binocular-vision-clinic">Binocular Vision Clinic</a>
              </li>
              <li>
                <a href="/contact-lens-clinic">Contact Lens Clinic</a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={revealCard} className="footer-column">
            <h3 className="footer-title">Academics</h3>
            <ul className="footer-links">
              <li>
                <a href="/fellowship">Fellowship</a>
              </li>
              <li>
                <a href="/education-training">Education &amp; Training</a>
              </li>
              <li>
                <a href="https://susruta.edu.in/" target="_blank" rel="noopener noreferrer">
                  School Of Optometry
                </a>
              </li>
            </ul>

            <h3 className="footer-title resources-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a
                  href="https://www.flickr.com/photos/190306082@N07/albums/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={revealCard} className="footer-column">
            <h3 className="footer-title">Subscribe Us</h3>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <div className="subscribe-input-group">
                <input
                  type="email"
                  placeholder="Your email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="subscribe-input"
                />
                <button type="submit" className="subscribe-button">
                  Submit
                </button>
              </div>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <span className="checkbox-text">
                  I agree to receive product related communications from Giridhar Eye Institute as
                  detailed in the Privacy Policy
                </span>
              </label>
            </form>
            {isSubscribed && <div className="subscription-success">Thank you for subscribing!</div>}
          </motion.div>
        </motion.div>

        <motion.div variants={revealHeading} className="footer-brand">
          <h2 className="brand-name">Giridhar Eye Institute</h2>
          <p className="brand-tagline">Lighting up Lives</p>
        </motion.div>

        <motion.div variants={revealCard} className="footer-copyright">
          <p>© 2025 Giridhar Eye Institute. All Rights Reserved.</p>
        </motion.div>

        <motion.div variants={revealCard} className="footer-bottom-links">
          <a href="/privacy" className="bottom-link">
            Privacy
          </a>
          <span className="separator">|</span>
          <a href="/security" className="bottom-link">
            Security
          </a>
          <span className="separator">|</span>
          <a href="/sitemap" className="bottom-link">
            Sitemap
          </a>
        </motion.div>

        <motion.div variants={revealCard} className="footer-disclaimer">
          <h4 className="disclaimer-title">Disclaimer: Unauthorized Appointment Portals</h4>
          <p className="disclaimer-text">
            It has come to our attention that certain third-party websites and local search portals
            are displaying incorrect contact information and offering unauthorized appointments for
            consultations at Giridhar Eye Institute (GEI). Please be advised that Giridhar Eye
            Institute, a premier ophthalmic hospital, has not authorized any external websites or
            service providers to offer appointment scheduling or consultations on our behalf. For
            accurate information and to book appointments directly, patients are requested to use
            the following official numbers:
          </p>
          <p className="disclaimer-contact">
            <strong>0484 4170000, 0484 3102929.</strong> We are not responsible for any
            misinformation or inconvenience caused by third-party portals.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

