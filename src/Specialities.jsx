import { useState } from "react";
import { motion } from "framer-motion";
import { revealHeading, revealStaggerParent, viewportOnce } from "./animation/motionPresets";

const flipIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const specialities = [
  {
    id: 1,
    title: "Cataract & Glaucoma",
    description:
      "We offer state-of-the-art cataract surgeries and specialized glaucoma treatments, with a focus on early diagnosis and personalized care.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
    highlight: ["cataract surgeries", "glaucoma treatments"],
  },
  {
    id: 2,
    title: "Vitreo Retina",
    description:
      "With 8 full-time retina consultants, our Vitreo Retina department provides expert care for diabetic retinopathy, retinal detachment, macular degeneration, and other complex retinal diseases.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    highlight: ["retinal diseases"],
  },
  {
    id: 3,
    title: "Orbit & Oculoplasty",
    description:
      "This department offers advanced oculoplasty and facial reconstructive procedures using microsurgical techniques for tumors, trauma, drooping eyelids, and cosmetic concerns.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80",
    highlight: ["oculoplasty"],
  },
  {
    id: 4,
    title: "Paediatric Ophthalmology",
    description:
      "Our Pediatric & Adult Strabismus Unit offers complete eye exams, squint correction, and care for childhood vision disorders, with child-friendly technology and expert care.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80",
    highlight: ["eye exams", "squint correction"],
  },
  {
    id: 5,
    title: "Uvea Services",
    description:
      "A team of dedicated specialists provides comprehensive diagnosis and treatment for uveitis and other inflammatory eye diseases.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
    highlight: ["uveitis", "inflammatory eye diseases"],
  },
  {
    id: 6,
    title: "Cornea & Laser Correction",
    description:
      "Our Cornea and Refractive Surgery division offers advanced LASIK and laser vision correction for myopia, hyperopia, and astigmatism, along with corneal transplant options.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    highlight: ["LASIK", "Cornea and Refractive Surgery"],
  },
  {
    id: 7,
    title: "Neuro Ophthalmology",
    description:
      "Neuro-ophthalmology combines neurology and ophthalmology to diagnose and treat complex vision problems caused by nervous system diseases.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    highlight: ["Neuro-ophthalmology"],
  },
  {
    id: 8,
    title: "Ocular Oncology",
    description:
      "Eye cancers start in the cells inside your eyeball and in nearby structures, like eyelids and tear ducts. The most common types include uveal melanomas, which start in the middle of the eye (uvea) and retinoblastoma.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80",
    highlight: ["Eye cancers", "uveal melanomas"],
  },
  {
    id: 9,
    title: "Retinopathy Of Prematurity",
    description:
      "Premature infants born with a birth weight of less than 2000 grams are prone to a blinding eye disease called Retinopathy of Prematurity.",
    image:
      "https://images.unsplash.com/photo-1544991875-5dc1b05f5b49?w=400&q=80",
    highlight: ["Premature infants"],
  },
];

function highlightText(text, highlights) {
  if (!highlights || highlights.length === 0) return text;
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="highlight-word">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function Specialities() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --bg: #f0f5f9;
          --card-bg: #ffffff;
          --accent: #1a6b8a;
          --accent-light: #e8f4f8;
          --accent-warm: #c06b2f;
          --text-primary: #1a2e3b;
          --text-muted: #5a7080;
          --border: #d4e4ec;
          --shadow: 0 4px 24px rgba(26, 107, 138, 0.10);
          --shadow-hover: 0 12px 40px rgba(26, 107, 138, 0.18);
          --radius: 16px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .spec-section {
          background: var(--bg);
          padding: 72px 24px 80px;
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
        }

        .spec-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .spec-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          color: var(--accent);
          letter-spacing: -0.01em;
          margin-bottom: 14px;
        }

        .spec-header p {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 300;
        }

        .spec-divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), var(--accent-warm));
          margin: 16px auto 0;
          border-radius: 2px;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1020px;
          margin: 0 auto;
        }

        @media (max-width: 860px) {
          .spec-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .spec-grid { grid-template-columns: 1fr; }
        }

        .spec-card {
          background: var(--card-bg);
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          cursor: pointer;
          transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), box-shadow 0.28s ease;
          display: flex;
          flex-direction: column;
        }

        .spec-card:hover, .spec-card.hovered {
          transform: translateY(-6px) scale(1.012);
          box-shadow: var(--shadow-hover);
          border-color: var(--accent);
        }

        .spec-img-wrap {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .spec-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }

        .spec-card:hover .spec-img-wrap img,
        .spec-card.hovered .spec-img-wrap img {
          transform: scale(1.07);
        }

        .spec-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(26,107,138,0.18) 100%);
          pointer-events: none;
        }

        .spec-body {
          padding: 20px 20px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .spec-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.08rem;
          font-weight: 600;
          color: var(--accent-warm);
          margin-bottom: 10px;
          line-height: 1.3;
          transition: color 0.2s;
        }

        .spec-card:hover .spec-title {
          color: var(--accent);
        }

        .spec-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.72;
          font-weight: 300;
          flex: 1;
        }

        .highlight-word {
          color: var(--accent);
          font-weight: 500;
          font-style: normal;
        }

        .spec-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          letter-spacing: 0.02em;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .spec-card:hover .spec-cta,
        .spec-card.hovered .spec-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .spec-cta svg {
          transition: transform 0.2s ease;
        }

        .spec-cta:hover svg {
          transform: translateX(3px);
        }
      `}</style>

      <motion.section
        className="spec-section"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={revealHeading} className="spec-header">
          <h2>Specialities</h2>
          <p>
            We offer a wide range of specialized eye treatments, combining expert
            eye care and advanced technology to ensure the best outcomes in vision
            care and eye health.
          </p>
          <div className="spec-divider" />
        </motion.div>

        <motion.div variants={revealStaggerParent} className="spec-grid">
          {specialities.map((item) => (
            <motion.div
              key={item.id}
              variants={flipIn}
              className={`spec-card${hovered === item.id ? " hovered" : ""}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="spec-img-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="spec-img-overlay" />
              </div>
              <div className="spec-body">
                <div className="spec-title">{item.title}</div>
                <p className="spec-desc">
                  {highlightText(item.description, item.highlight)}
                </p>
                <a href="#" className="spec-cta">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}