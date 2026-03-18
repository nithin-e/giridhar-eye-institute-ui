import React from 'react';
import './UpcomingEvents.css';
import { motion } from 'framer-motion';
import { revealCard, revealHeading, revealStaggerParent, viewportOnce } from './animation/motionPresets';

const UpcomingEvents = () => {
  const eventsData = [
    {
      id: 1,
      title: 'AIOC 2026',
      subtitle: '84th Annual Conference of All India Ophthalmological Society',
      description:
        'announced by Rajashri Hospital • March 12-15, 2026 | Davvani JECC, Jijaur',
      achievement: 'Proud Achievement: Dr. Marian Pauly Receives The Sujata Savitri Rao Award',
      category: 'Event',
      imageUrl:
        'https://www.giridhareye.org/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-13-at-8.48.16-AM.jpeg',
      link: '/aioc-s-s-badrinath-endowment-award',
    },
    {
      id: 2,
      title: 'Conference of All India Ophthalmologic',
      subtitle: '12-15 March, 2026, Jaipur',
      description: 'Giridhar Eye Institute • AIOC S.S. Badrinath Endowment Award',
      achievement:
        'Proud Achievement: Dr. A. Giridhar Receives The AIOC S.S. Badrinath Endowment Award',
      category: 'Event',
      imageUrl:
        'https://www.giridhareye.org/wp-content/uploads/2026/01/Screenshot-2026-01-15-145819.png',
      link: '/annual-community-focus',
    },
    {
      id: 3,
      title: 'Annual Community Focus',
      subtitle: '28',
      description: 'Celebrates 28 Glorious Years Of Service!',
      achievement: "New Lasik Machine – Kerala's First WaveLight Plus InnovEyes Started Functioning",
      category: 'Event',
      imageUrl:
        'https://www.giridhareye.org/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-13-at-9.44.35-AM.jpeg',
      link: '/new-lasik-machine-keralas-first-wavelight-plus-innoveyes-started-functioning',
    },
    {
      id: 4,
      title: 'OPAI 2026',
      subtitle: '36th Annual Conference of the Oculoplastics Association of India',
      description:
        'OPAI 2026 – 36th Annual Conference of the Oculoplastics Association of India',
      achievement:
        'OPAI 2026 – 36th Annual Conference of the Oculoplastics Association of India',
      category: 'Event',
      imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2025/10/New-Project.jpg',
      link: '/opai-2026-36th-annual-conference-of-the-oculoplastics-association-of-india',
    },
    {
      id: 5,
      title: '✨ Giridhar Eye Institute',
      subtitle: 'Celebrates 28 Glorious Years of Service!',
      description: 'Join us in celebrating 28 years of excellence in eye care',
      achievement: 'Focus Newsletter July 2025 Edition',
      category: 'Event',
      imageUrl:
        'https://www.giridhareye.org/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-09-at-11.55.11-AM-1.jpeg',
      link: '/focus-newsletter-july-2025-edition',
    },
    {
      id: 6,
      title: 'Focus Newsletter',
      subtitle: 'July 2025 Edition',
      description: 'Latest updates and insights from Giridhar Eye Institute',
      achievement: 'Focus Newsletter July 2025 Edition',
      category: 'Event',
      imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2025/07/1-1-1.jpg',
      link: '/focus-newsletter-july-2025-edition',
    },
  ];

  return (
    <motion.section
      className="upcoming-events"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="ue-container">
        <motion.div variants={revealHeading} className="section-header">
          <h2 className="section-title">Upcoming Events &amp; Newsletters At GEI</h2>
          <p className="section-description">
            Discover the latest events, workshops, and seminars at Giridhar Eye Institute, focused
            on advancing eye care and patient education.
          </p>
        </motion.div>

        <motion.div variants={revealStaggerParent} className="events-grid">
          {eventsData.map((event) => (
            <motion.article key={event.id} variants={revealCard} className="event-card">
              <div className="event-image-container">
                <img src={event.imageUrl} alt={event.title} className="event-image" loading="lazy" />
              </div>
              <div className="event-content">
                <div className="event-category">{event.category}</div>
                <h3 className="event-title">{event.title}</h3>
                {event.subtitle && <h4 className="event-subtitle">{event.subtitle}</h4>}
                <p className="event-description">{event.description}</p>
                <p className="event-achievement">{event.achievement}</p>
                <a href={event.link} className="event-link">
                  Read More <span className="arrow">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UpcomingEvents;

