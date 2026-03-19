import React, { useEffect, useMemo, useRef, useState } from 'react';
import { prefersReducedMotion } from './animation/prefersReducedMotion';

const Icon = ({ name, className }) => {
  const common = { className, 'aria-hidden': true, viewBox: '0 0 24 24' };
  switch (name) {
    case 'phone':
      return (
        <svg {...common} fill="none">
          <path
            d="M7.5 3.5h9A2.5 2.5 0 0 1 19 6v12a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18V6A2.5 2.5 0 0 1 7.5 3.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M10 18.2h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common} fill="none">
          <path
            d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 10.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case 'caret':
      return (
        <svg {...common} fill="none">
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common} fill="none">
          <path
            d="M7 3v2M17 3v2M4.5 8h15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6.5 5h11A2.5 2.5 0 0 1 20 7.5v11A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-11A2.5 2.5 0 0 1 6.5 5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 12h3v3H8v-3Z" fill="currentColor" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common} fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common} fill="none">
          <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

const SocialIcon = ({ name, className }) => {
  const common = { className, 'aria-hidden': true, viewBox: '0 0 24 24', fill: 'currentColor' };
  switch (name) {
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M13.5 22v-7h2.3l.4-3h-2.7V10c0-.9.3-1.5 1.6-1.5H16V6.1c-.5-.1-1.4-.1-2.4-.1-2.4 0-4 1.4-4 4v2H7v3h2.2v7h4.3Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
          <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.81 4.81 0 0 0 12 7.2Zm0 7.6A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8Z" />
          <path d="M17.2 6.6a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common}>
          <path d="M21.6 7.1a2.9 2.9 0 0 0-2-2C18 4.6 12 4.6 12 4.6s-6 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .4 4.9 2.9 2.9 0 0 0 2 2c1.6.5 7.6.5 7.6.5s6 0 7.6-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.4-4.9ZM10.2 15.2V8.8L15.7 12l-5.5 3.2Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M6.6 6.9a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM4.8 21.5h3.6V9H4.8v12.5ZM10.2 9h3.4v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.7v7h-3.6v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.3h-3.6V9Z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <path d="M4 6.5h16A2.5 2.5 0 0 1 22.5 9v10A2.5 2.5 0 0 1 20 21.5H4A2.5 2.5 0 0 1 1.5 19V9A2.5 2.5 0 0 1 4 6.5Zm0 2.2v.3l8 5 8-5v-.3H4Zm16 2.9-7.4 4.6a1.2 1.2 0 0 1-1.3 0L4 11.6V19a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3v-7.4Z" />
        </svg>
      );
    default:
      return null;
  }
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);

  const socialLinks = useMemo(
    () => [
      { href: 'https://www.facebook.com/giridhareyeinstitute', name: 'facebook', label: 'Facebook' },
      { href: 'https://www.instagram.com/giridhareye', name: 'instagram', label: 'Instagram' },
      { href: 'https://www.youtube.com/@GiridharEyeInstitute', name: 'youtube', label: 'YouTube' },
      { href: 'https://www.linkedin.com/company/giridhar-eye-institute', name: 'linkedin', label: 'LinkedIn' },
      { href: 'mailto:info@giridhareye.org', name: 'mail', label: 'Email' },
    ],
    [],
  );

  const menus = useMemo(
    () => [
      { key: 'doctors', label: 'Doctors', href: '/eye-doctors-in-kochi', hasDropdown: false },
      { key: 'specialities', label: 'Specialities', href: '#', hasDropdown: true },
      { key: 'clinics', label: 'Special Clinics', href: '#', hasDropdown: true },
      { key: 'about', label: 'About', href: '#', hasDropdown: true },
      { key: 'academics', label: 'Academics', href: '#', hasDropdown: true },
      { key: 'services', label: 'Services', href: '#', hasDropdown: true },
      { key: 'ssm', label: 'SSM Trust', href: '#', hasDropdown: true },
    ],
    [],
  );

  const specialitiesMega = useMemo(
    () => ({
      image:
        'https://www.giridhareye.org/wp-content/uploads/2024/10/youtube-img-1-scaled.jpg',
      left: [
        { title: 'Cataract', desc: 'Advanced cataract surgery options ensuring optimal care.' },
        { title: 'Glaucoma Services', desc: 'Advanced Treatments for Glaucoma' },
        { title: 'Vitreo Retina', desc: 'Advanced treatment for retina and vitreous conditions' },
        { title: 'Cornea & Laser Correction', desc: 'Advanced LASIK and corneal treatment solutions' },
        { title: 'Ocular Oncology', desc: 'Advanced eye care includes cancer care too. Ocular oncology matters.' },
        { title: 'Paediatric Ophthalmology', desc: 'Specialized care for children and eye misalignment' },
      ],
      right: [
        { title: 'Orbit & Oculoplasty', desc: 'Advanced surgery for orbital and facial disorders' },
        { title: 'Uvea Services', desc: 'Comprehensive uvea care for eye health' },
        { title: 'Community Ophthalmology', desc: 'Free eye care and outreach services' },
        { title: 'General Ophthalmology', desc: 'Comprehensive eye care and advanced treatments' },
        { title: 'Neuro Ophthalmology', desc: 'Specialized care for optic nerve disorders' },
        { title: 'Retinopathy of Prematurity (RoP)', desc: 'Tiny eyes need big care' },
      ],
    }),
    [],
  );

  const clinicsMega = useMemo(
    () => ({
      title: 'Special Clinics',
      image:
        'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
      left: [
        { title: 'Keratoconus Clinic', desc: 'Specialized care for progressive keratoconus' },
        { title: 'Low Vision Aid Clinic', desc: 'Support for severe vision impairment' },
        { title: 'Ocular Prosthetic Clinic', desc: 'Custom artificial eyes and aesthetic solutions' },
      ],
      right: [
        { title: 'Binocular Vision Clinic', desc: 'Specialized care for binocular vision issues' },
        { title: 'Contact Lens Clinic', desc: 'Specialized fittings and care for contact lenses' },
      ],
      ctaLabel: 'E-Consultation',
      ctaHref: 'https://giridhareye.com/e-consultation/',
    }),
    [],
  );

  const aboutMega = useMemo(
    () => ({
      title: 'About Us',
      image: 'https://www.giridhareye.org/wp-content/uploads/2024/10/youtube-img-1-scaled.jpg',
      left: [
        { title: 'About Us', desc: 'Answers to common eye care queries' },
        { title: 'History', desc: 'Decades of excellence in eye care' },
        { title: 'Mission & Vision', desc: 'Quality eye care with compassionate service' },
        { title: 'Team', desc: 'Expert ophthalmologists dedicated to eye care' },
        { title: 'Leadership', desc: 'Visionary leaders driving excellence in eye care' },
        { title: 'Our Centers', desc: 'Four branches offering comprehensive eye care' },
      ],
      right: [
        { title: 'Resources', desc: 'Advanced eye care and expertise' },
        { title: 'Blog', desc: 'Eye health insights and patient stories' },
        { title: 'Gallery', desc: 'Showcasing patient care and advanced facilities' },
        { title: 'Careers', desc: 'Exciting opportunities in eye care careers' },
        { title: 'FAQs', desc: 'Answers to common eye care queries' },
        { title: 'Contact Us', desc: 'Reach out for expert assistance' },
      ],
      ctaLabel: 'E-Consultation',
      ctaHref: 'https://giridhareye.com/e-consultation/',
    }),
    [],
  );

  const academicsMega = useMemo(
    () => ({
      title: 'Academics',
      image: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
      items: [
        { title: 'Fellowship', desc: 'Fellowships and Observerships at GEI' },
        { title: 'Education & Training', desc: 'Advanced Ophthalmology Education and Training' },
        { title: 'School Of Optometry', desc: 'Susruta School of Optometry & Visual Sciences (SSO)' },
      ],
    }),
    [],
  );

  const servicesMenu = useMemo(
    () => [
      { label: 'In-Patient Services', href: '/services/in-patient-services' },
      { label: 'Ocular Trauma Clinic', href: '/services/ocular-trauma-clinic' },
      { label: 'Orthoptic Evaluation', href: '/services/orthoptic-evaluation' },
      { label: 'Out-Patient Services', href: '/services/out-patient-services' },
      { label: 'Precision Scanning & Imaging Systems', href: '/services/precision-scanning-imaging-systems' },
    ],
    [],
  );

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  // close dropdown on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // scroll behavior: compact + hide on scroll down, show on scroll up
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    lastYRef.current = window.scrollY || 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const last = lastYRef.current;
      const delta = y - last;
      lastYRef.current = y;

      setIsCompact(y > 40);
      if (y < 10) {
        setIsHidden(false);
        return;
      }
      if (Math.abs(delta) < 6) return;
      if (delta > 0 && y > 120) setIsHidden(true);
      if (delta < 0) setIsHidden(false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-anim="navbar"
      className={`sticky top-0 z-50 w-full font-sans will-change-transform transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top strip */}
      <div className="w-full bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 py-2 text-[13px] text-slate-700">
            <div className="flex items-center gap-5">
              <a className="flex items-center gap-2 hover:text-slate-900" href="tel:+914844170000">
                <Icon name="phone" className="h-4 w-4 text-slate-700" />
                <span>+91-484-4170000</span>
              </a>
              <a className="flex items-center gap-2 hover:text-slate-900" href="tel:+914843102929">
                <Icon name="phone" className="h-4 w-4 text-slate-700" />
                <span>+91-484-3102929</span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a className="flex items-center gap-2 hover:text-slate-900" href="/our-centers">
                <Icon name="pin" className="h-4 w-4 text-slate-800" />
                <span>Our Branches</span>
              </a>

              <a className="flex items-center gap-2 no-underline" href="#">
                <span className="inline-flex items-center justify-center rounded-full bg-slate-50 px-2 py-[2px] text-[12px] font-extrabold text-blue-600 ring-1 ring-slate-200">
                  360°
                </span>
                <span className="font-semibold text-blue-600">Virtual Tour</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[#ed5e4d] hover:opacity-70"
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <SocialIcon name={s.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`w-full border-b border-slate-200 transition-all duration-300 ${
          isCompact ? 'bg-white shadow-md' : 'bg-[#eef7f8]'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className={`flex items-center gap-4 transition-all duration-300 ${isCompact ? 'h-[68px]' : 'h-20'}`}>
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 no-underline">
              <span data-anim="logo-pulse" className="inline-flex">
                <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path
                  d="M34 60 C18 60 7 48 7 32 C7 16 18 5 34 5 C46 5 56 14 59 25"
                  stroke="#252c6f"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M34 33 L60 33 C60 49 48 60 34 60"
                  fill="none"
                  stroke="#252c6f"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path d="M18 32 C25 21 42 21 50 32 C42 43 25 43 18 32 Z" fill="none" stroke="#252c6f" strokeWidth="3" />
                <circle cx="34" cy="32" r="5" fill="#252c6f" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[18px] font-semibold tracking-[-0.2px] text-[#252c6f]">
                  Giridhar Eye Institute
                </span>
                <span className="mt-[2px] text-[12px] tracking-wide text-[#6872b2]">Lighting up Lives</span>
              </div>
            </a>

            {/* Center menu */}
            <nav className="hidden flex-1 flex-nowrap items-center justify-center gap-4 lg:flex xl:gap-6">
              {menus.map((m) => (
                <div
                  key={m.key}
                  className="relative"
                  onMouseEnter={() => (m.hasDropdown ? setActiveDropdown(m.key) : setActiveDropdown(null))}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {(() => {
                    const isActive = m.href !== '#' && pathname === m.href;
                    return (
                  <a
                    href={m.href}
                    className={`relative inline-flex items-center gap-1 whitespace-nowrap px-1 py-2 text-[13px] font-normal text-slate-600 transition-transform duration-200 hover:-translate-y-[2px] hover:text-slate-900 will-change-transform xl:text-[14px]
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full
                      ${isActive ? 'text-slate-900 after:w-full' : ''}`}
                  >
                    {m.label}
                    {m.hasDropdown ? <Icon name="caret" className="h-3.5 w-3.5 opacity-70" /> : null}
                  </a>
                    );
                  })()}

                  {m.hasDropdown && activeDropdown === m.key ? (
                    m.key === 'specialities' ? (
                      <div className="absolute left-1/2 top-full mt-2 w-[1180px] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                        <div className="grid grid-cols-[360px_1fr]">
                          <div className="relative self-stretch bg-slate-50">
                            <img
                              src={specialitiesMega.image}
                              alt=""
                              className="block h-full w-full object-contain object-left"
                              loading="lazy"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-12 px-12 py-10">
                            <div className="space-y-6">
                              {specialitiesMega.left.map((it) => (
                                <a
                                  key={it.title}
                                  href="#"
                                  className="group block"
                                >
                                  <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                                    {it.title}
                                  </div>
                                  <div className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                    {it.desc}
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="space-y-6">
                              {specialitiesMega.right.map((it) => (
                                <a
                                  key={it.title}
                                  href="#"
                                  className="group block"
                                >
                                  <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                                    {it.title}
                                  </div>
                                  <div className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                    {it.desc}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : m.key === 'clinics' ? (
                      <div className="absolute left-1/2 top-full mt-2 w-[1180px] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                        <div className="grid grid-cols-[360px_1fr]">
                          <div className="relative self-stretch bg-slate-50">
                            <img
                              src={clinicsMega.image}
                              alt=""
                              className="block h-full w-full object-contain object-left"
                              loading="lazy"
                            />
                          </div>

                          <div className="relative px-12 py-10">
                            <div className="mb-7 text-[30px] font-semibold tracking-[-0.2px] text-slate-900">
                              {clinicsMega.title}
                            </div>

                            <div className="grid grid-cols-2 gap-12">
                              <div className="space-y-6">
                                {clinicsMega.left.map((it) => (
                                  <a key={it.title} href="#" className="group block">
                                    <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                                      {it.title}
                                    </div>
                                    <div className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                      {it.desc}
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="space-y-6">
                                {clinicsMega.right.map((it) => (
                                  <a key={it.title} href="#" className="group block">
                                    <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                                      {it.title}
                                    </div>
                                    <div className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                      {it.desc}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>

                            <a
                              href={clinicsMega.ctaHref}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-6 right-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#0aa39a] to-[#04a59a] px-4 py-3 text-[13px] font-semibold text-white shadow-md hover:shadow-lg"
                            >
                              <span aria-hidden="true" className="text-[14px]">
                                👤
                              </span>
                              {clinicsMega.ctaLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : m.key === 'about' ? (
                      <div className="absolute left-1/2 top-full mt-2 w-[1120px] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                        <div className="grid grid-cols-[320px_1fr]">
                          <div className="relative self-stretch">
                            <img
                              src={aboutMega.image}
                              alt=""
                              className="absolute inset-0 block h-full w-full object-cover"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                              aria-hidden="true"
                            />
                          </div>

                          <div className="relative px-12 py-10">
                            <div className="mb-7 text-[30px] font-semibold tracking-[-0.2px] text-slate-900">
                              {aboutMega.title}
                            </div>

                            <div className="grid grid-cols-2 gap-12">
                              <div className="space-y-6">
                                {aboutMega.left.map((it) => (
                                  <a key={it.title} href="#" className="group block">
                                    <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                                      {it.title}
                                    </div>
                                    <div className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                      {it.desc}
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="space-y-6">
                                {aboutMega.right.map((it) => (
                                  <a key={it.title} href="#" className="group block">
                                    <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                                      {it.title}
                                    </div>
                                    <div className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                      {it.desc}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>

                            <a
                              href={aboutMega.ctaHref}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-6 right-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#0aa39a] to-[#04a59a] px-4 py-3 text-[13px] font-semibold text-white shadow-md hover:shadow-lg"
                            >
                              <span aria-hidden="true" className="text-[14px]">
                                👤
                              </span>
                              {aboutMega.ctaLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : m.key === 'academics' ? (
                      <div className="absolute left-1/2 top-full mt-2 w-[1120px] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                        <div className="grid grid-cols-[320px_1fr]">
                          <div className="relative self-stretch">
                            <img
                              src={academicsMega.image}
                              alt=""
                              className="absolute inset-0 block h-full w-full object-cover"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                              aria-hidden="true"
                            />
                          </div>

                          <div className="px-12 py-10">
                            <div className="mb-7 text-[30px] font-semibold tracking-[-0.2px] text-slate-900">
                              {academicsMega.title}
                            </div>

                            <div className="max-w-[560px] space-y-7">
                              {academicsMega.items.map((it) => (
                                <a key={it.title} href="#" className="group block">
                                  <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                                    {it.title}
                                  </div>
                                  <div className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                    {it.desc}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : m.key === 'services' ? (
                      <div className="absolute left-1/2 top-full mt-2 w-[300px] -translate-x-1/2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
                        <div className="py-1">
                          {servicesMenu.map((item, idx) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className={`block px-4 py-3 text-[13px] text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#3563dc] ${
                                idx !== servicesMenu.length - 1 ? 'border-b border-slate-100' : ''
                              }`}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
                        <a className="block rounded-md px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50" href="#">
                          {m.label} Overview
                        </a>
                        <a className="block rounded-md px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50" href="#">
                          All {m.label}
                        </a>
                      </div>
                    )
                  ) : null}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#awb-open-oc__6183"
              className="group hidden items-stretch overflow-hidden rounded-md ring-1 ring-slate-200/70 shadow-sm transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-md lg:inline-flex will-change-transform"
            >
              <span className="flex w-[52px] items-center justify-center bg-[#3563dc] text-white">
                <Icon name="calendar" className="h-5 w-5" />
              </span>
              <span className="flex items-center whitespace-nowrap bg-gradient-to-r from-[#3563dc] to-[#04a59a] px-6 py-3 text-[15px] font-medium text-white">
                Request An Appointment
              </span>
            </a>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="ml-auto inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen ? (
            <div className="lg:hidden">
              <div className="rounded-b-xl border-t border-slate-200 bg-white py-2">
                {menus.map((m) => (
                  <a
                    key={m.key}
                    href={m.href}
                    className="flex items-center justify-between px-4 py-3 text-[14px] text-slate-700 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{m.label}</span>
                    {m.hasDropdown ? <Icon name="caret" className="h-4 w-4 opacity-60" /> : null}
                  </a>
                ))}

                <a
                  href="#awb-open-oc__6183"
                  className="mx-4 my-3 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#3563dc] to-[#04a59a] px-4 py-3 text-[14px] font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name="calendar" className="h-5 w-5" />
                  Request An Appointment
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
