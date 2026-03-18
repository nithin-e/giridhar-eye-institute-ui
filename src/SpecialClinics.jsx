import React from "react";
import "./SpecialClinics.css"; // Make sure to create this CSS file

const SpecialClinics = () => {
  // Data array for special clinics
  const clinicsData = [
    {
      id: 1,
      title: "Uvea Clinic",
      description:
        "Specialized care for uveitis and uveal disorders with advanced expertise.",
      icon: "🏥", // Using emoji as placeholder, you can replace with actual icons
    },
    {
      id: 2,
      title: "Keratoconus Clinic",
      description:
        "Advanced care and treatment for progressive keratoconus to preserve vision.",
      icon: "🏥",
    },
    {
      id: 3,
      title: "Low Vision Aid Clinic",
      description:
        "Tailored support and devices to enhance vision for severe impairments.",
      icon: "👓",
    },
    {
      id: 4,
      title: "Ocular Prosthetic Clinic",
      description:
        "Customized artificial eyes offering aesthetic and functional solutions for patients.",
      icon: "👁️",
    },
    {
      id: 5,
      title: "Binocular Vision Clinic",
      description:
        "Binocular Vision Clinic treats eye coordination, improving depth perception and function.",
      icon: "🎯",
    },
    {
      id: 6,
      title: "Contact Lens Clinic",
      description:
        "Expert fittings and personalized care for contact lenses, ensuring comfort and vision.",
      icon: "🔬",
    },
    {
      id: 7,
      title: "Electroretinography (ERG)",
      description:
        "Electroretinography tests measure retina's electrical response to light stimuli.",
      icon: "🎯",
    },
  ];

  // Data array for services
  const servicesData = [
    {
      id: 1,
      title: "In-Patient Services",
      description:
        "Experience specialized eye care treatments and surgeries, expertly provided in a comfortable and patient-friendly hospital setting.",
      icon: "🏥",
      link: "/services/in-patient-services",
    },
    {
      id: 2,
      title: "Out-Patient Services",
      description:
        "Access comprehensive eye care and specialist consultations, conveniently available for all non-hospitalized patients.",
      icon: "👥",
      link: "/services/out-patient-services",
    },
    {
      id: 3,
      title: "24 X 7 Ocular Trauma Clinic",
      description:
        "Receive immediate and comprehensive care for eye injuries and emergencies, available round the clock for your safety and peace of mind.",
      icon: "⏰",
      link: "/services/ocular-trauma-clinic",
    },
    {
      id: 4,
      title: "Contact Lens Clinic",
      description:
        "Get expert fittings and personalized care to ensure comfortable, clear vision with contact lenses tailored to your needs.",
      icon: "👓",
      link: "/contact-lens-clinic",
    },
    {
      id: 5,
      title: "Orthoptic Evaluation",
      description:
        "Detailed assessments and treatments for binocular vision problems and eye movement disorders.",
      icon: "👁️",
      link: "/services/orthoptic-evaluation",
    },
    {
      id: 6,
      title: "Precision Scanning & Imaging",
      description:
        "Advanced imaging technology enables precise diagnoses and enhances effective treatment planning for optimal eye care.",
      icon: "🔬",
      link: "/services/precision-scanning-imaging-systems",
    },
  ];

  return (
    <div className="clinics-services-container">
      {/* Special Clinics Section */}
      <section className="clinics-section">
        <div className="section-header">
          <h2 className="section-title">Special Clinics</h2>
          <h3 className="section-subtitle">Focused Eye Care Services</h3>
          <p className="section-description">
            Explore our specialized eye clinics offering focused care for Dry Eye & Ocular Surface Disorders, Diabetic Eye Screening, Contact Lens Services, Low Vision & Rehabilitation, Post-operative Care & Counseling.
          </p>
          <button className="learn-more-btn">Learn About Us</button>
        </div>

        <div className="clinics-grid">
          {clinicsData.map((clinic) => (
            <div key={clinic.id} className="clinic-card">
              <div className="clinic-icon">{clinic.icon}</div>
              <h4 className="clinic-title">{clinic.title}</h4>
              <p className="clinic-description">{clinic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Our services offer comprehensive eye care, guiding patients from diagnosis to advanced treatment with personalized attention and expert solutions for all eye conditions.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="service-link">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpecialClinics;