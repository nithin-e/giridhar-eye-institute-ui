import { useState } from "react";
import { motion } from "framer-motion";
import { revealCard, revealHeading, revealStaggerParent, viewportOnce } from "./animation/motionPresets";

const features = [
  {
    id: 1,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 20a7 7 0 0114 0" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="3" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
        <path d="M17 18l.8.8L19.5 17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "NABH Accredited Eye Hospital",
    description: "NABH accredited, with advanced facilities and world-class eye care.",
  },
  {
    id: 2,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="12" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M8 9h8M8 12h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="17" cy="17" r="3" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
        <path d="M15.8 17l.8.8 1.6-1.6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Personalized and Inclusive Eye Care",
    description: "We prioritize personalized eye care, tailoring treatments to each patient.",
  },
  {
    id: 3,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="17" r="2" stroke="white" strokeWidth="1.8"/>
        <circle cx="12" cy="7" r="2" stroke="white" strokeWidth="1.8"/>
        <circle cx="19" cy="14" r="2" stroke="white" strokeWidth="1.8"/>
        <path d="M7 16l3.5-7.5M14 8.5l3.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Four Centers Across Cochin",
    description: "Four centers in Cochin, providing accessible, high-quality eye care.",
  },
  {
    id: 4,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C9 3 7 5 7 8c0 4 5 9 5 9s5-5 5-9c0-3-2-5-5-5z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M10 8l1.5 1.5L14 6.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 19h12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Affordable Eye Care Solutions",
    description: "We provide high-quality eye care services at affordable costs.",
  },
];

export default function AboutOurServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        .aos-section {
          background: #f0f8f6;
          padding: 48px 24px 64px;
          font-family: 'DM Sans', sans-serif;
        }

        .aos-btn-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .aos-main-btn {
          background: #17a689;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 13px 32px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 16px rgba(23,166,137,0.28);
        }

        .aos-main-btn:hover {
          background: #0e8a70;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(23,166,137,0.32);
        }

        .aos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1160px;
          margin: 0 auto;
        }

        @media (max-width: 960px) {
          .aos-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .aos-grid { grid-template-columns: 1fr; }
        }

        .aos-card {
          background: #e8f5f3;
          border-radius: 16px;
          padding: 36px 24px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1.5px solid #c8e6e0;
          transition: background 0.25s ease, transform 0.28s cubic-bezier(.22,.68,0,1.2), box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }

        .aos-card:hover {
          background: #d6eeea;
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(26,158,143,0.14);
          border-color: #1a9e8f;
        }

        .aos-icon-box {
          width: 72px;
          height: 72px;
          border-radius: 14px;
          background: #1e4d8c;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: background 0.25s ease, transform 0.25s ease;
          box-shadow: 0 4px 16px rgba(30,77,140,0.22);
        }

        .aos-card:hover .aos-icon-box {
          background: #163d72;
          transform: scale(1.07) rotate(-3deg);
        }

        .aos-card-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a2e3b;
          margin-bottom: 12px;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        .aos-card-desc {
          font-size: 0.875rem;
          color: #5a7080;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 28px;
          flex: 1;
        }

        .aos-learn-btn {
          background: #17a689;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 10px 24px;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          width: 100%;
          box-shadow: 0 2px 10px rgba(23,166,137,0.2);
        }

        .aos-learn-btn:hover {
          background: #0e8a70;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(23,166,137,0.28);
        }
      `}</style>

      <motion.section
        className="aos-section"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={revealHeading} className="aos-btn-wrap">
          <button className="aos-main-btn">About Our Services</button>
        </motion.div>

        <motion.div variants={revealStaggerParent} className="aos-grid">
          {features.map((item) => (
            <motion.div
              key={item.id}
              variants={revealCard}
              className="aos-card"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="aos-icon-box">{item.icon}</div>
              <div className="aos-card-title">{item.title}</div>
              <p className="aos-card-desc">{item.description}</p>
              <button className="aos-learn-btn">Learn More</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}