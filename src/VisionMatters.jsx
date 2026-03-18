import React from 'react';
import './VisionMatters.css';
import { motion } from 'framer-motion';
import { revealCard, revealHeading, revealStaggerParent, viewportOnce } from './animation/motionPresets';

const VisionMatters = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'July 18, 2024',
      category: 'Blog',
      title: 'Practice pattern of intravitreal anti-vascular endothelial growth factor injection',
      link: '/commentary-all-india-ophthalmological-society-m',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 2,
      date: 'February 1, 2023',
      category: 'Blog',
      title: 'Diagnostic Accuracy of Macular Ganglion Cell Layer Thickness Measured by Spectralis SD OCT',
      link: '/breaking-free-from-limiting-beliefs-the-power-of-positive-mindset',
      imageUrl:
        'https://images.unsplash.com/photo-1524503033411-f7a2fe8c7c0f?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 3,
      date: 'February 1, 2023',
      category: 'Blog',
      title: 'Tissue plasminogen activator-assisted surgical removal of massive subretinal hemorrhage',
      link: '/building-stronger-connections-and-improving-communication',
      imageUrl:
        'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=1200&q=60',
    },
  ];

  return (
    <motion.section
      className="vision-matters"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="vm-container">
        <motion.div variants={revealHeading} className="section-header">
          <h2 className="section-title">Vision Matters: Tips And Trends</h2>
          <p className="section-description">
            Stay updated with the latest insights in eye care, expert advice, and news from our
            specialists at Giridhar Eye Institute.
          </p>
        </motion.div>

        <motion.div variants={revealStaggerParent} className="blog-grid">
          {blogPosts.map((post) => (
            <motion.article key={post.id} variants={revealCard} className="blog-card">
              <a className="blog-thumb" href={post.link} aria-label={post.title}>
                <img className="blog-thumb__img" src={post.imageUrl} alt="" loading="lazy" />
              </a>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-category">{post.category}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <a href={post.link} className="continue-reading">
                Continue reading <span className="arrow">→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={revealCard} className="external-link-container">
          <a
            href="https://www.giridhareye.org/breaking-free-from-limiting-beliefs-the-power-of-positive-mindset/"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            Visit our blog for more insights →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionMatters;

