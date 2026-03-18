import React from 'react';
import './DiscoverYouTube.css';
import { motion } from 'framer-motion';
import { revealHeading, revealImage, viewportOnce } from './animation/motionPresets';

const DiscoverYouTube = () => {
  return (
    <motion.section
      className="discover-youtube"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="dy-container">
        <div className="youtube-content-wrapper">
          <motion.div variants={revealHeading} className="content-section">
            <h2 className="dy-title">Discover More on Our YouTube Channel.</h2>
            <p className="dy-description">
              Join us on our YouTube channel to explore the world of eye health and vision care.
              Watch expert advice, patient stories, and insights on advanced eye treatments.
            </p>
            <a
              href="https://www.youtube.com/@GiridharEyeInstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-button"
            >
              <span className="youtube-icon" aria-hidden="true">
                ▶
              </span>
              YouTube
            </a>
          </motion.div>

          <div className="media-section">
            <motion.div variants={revealImage} className="video-placeholder">
              <img
                src="https://www.giridhareye.org/wp-content/uploads/2024/10/youtube-img-1-scaled.jpg"
                alt="YouTube video thumbnail - Child looking for glasses in best eye hospital in kochi"
                className="thumbnail-image"
                loading="lazy"
              />
              <a
                href="https://www.youtube.com/@GiridharEyeInstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="play-button"
                aria-label="Play video"
              >
                <span className="play-icon" aria-hidden="true">
                  ▶
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DiscoverYouTube;

