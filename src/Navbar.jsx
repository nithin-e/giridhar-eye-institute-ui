import React, { useEffect, useMemo, useRef, useState } from 'react';
import { prefersReducedMotion } from './animation/prefersReducedMotion';
import './Navbar.css';

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
    case 'clock':
      return (
        <svg {...common} fill="none">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7.2V12l3.2 2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common} fill="none">
          <path
            d="M4 6.5h16A2.5 2.5 0 0 1 22.5 9v10A2.5 2.5 0 0 1 20 21.5H4A2.5 2.5 0 0 1 1.5 19V9A2.5 2.5 0 0 1 4 6.5Zm0 2.2v.3l8 5 8-5v-.3H4Zm16 2.9-7.4 4.6a1.2 1.2 0 0 1-1.3 0L4 11.6V19a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3v-7.4Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case 'cart':
      return (
        <svg {...common} fill="none">
          <path
            d="M6.5 7h15l-1.2 7.2a2 2 0 0 1-2 1.7H8.9a2 2 0 0 1-2-1.7L5.2 4.7H3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);

  const menus = useMemo(
    () => [
      { key: 'home', label: 'Home', href: '/', hasDropdown: false },
      { key: 'about', label: 'About', href: '#', hasDropdown: true },
      { key: 'specialities', label: 'Specialities', href: '#', hasDropdown: true },
      { key: 'clinics', label: 'Special Clinics', href: '#', hasDropdown: true },
      { key: 'doctors', label: 'Doctors', href: '/eye-doctors-in-kochi', hasDropdown: false },
      { key: 'academics', label: 'Academics', href: '#', hasDropdown: true },
      { key: 'services', label: 'Services', href: '#', hasDropdown: true },
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
      image: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
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

  const renderMegaMenu = (m) => {
    if (!m.hasDropdown) return null;
    if (activeDropdown !== m.key) return null;

    if (m.key === 'specialities') {
      return (
        <div className="nav-mega absolute left-1/2 top-full z-[60] mt-2 w-[min(1180px,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(220px,360px)_1fr]">
            <div className="relative min-h-[200px] self-stretch bg-slate-50 md:min-h-0">
              <img
                src={specialitiesMega.image}
                alt=""
                className="block h-full w-full object-contain object-left"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 gap-8 px-6 py-8 sm:grid-cols-2 sm:gap-12 sm:px-12 sm:py-10">
              <div className="space-y-6">
                {specialitiesMega.left.map((it) => (
                  <a key={it.title} href="#" className="group block">
                    <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                      {it.title}
                    </div>
                    <div className="mt-1 text-[12px] leading-relaxed text-slate-500">{it.desc}</div>
                  </a>
                ))}
              </div>
              <div className="space-y-6">
                {specialitiesMega.right.map((it) => (
                  <a key={it.title} href="#" className="group block">
                    <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                      {it.title}
                    </div>
                    <div className="mt-1 text-[12px] leading-relaxed text-slate-500">{it.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (m.key === 'clinics') {
      return (
        <div className="nav-mega absolute left-1/2 top-full z-[60] mt-2 w-[min(1180px,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(220px,360px)_1fr]">
            <div className="relative min-h-[200px] self-stretch bg-slate-50 md:min-h-0">
              <img
                src={clinicsMega.image}
                alt=""
                className="block h-full w-full object-contain object-left"
                loading="lazy"
              />
            </div>

            <div className="relative px-6 py-8 sm:px-12 sm:py-10">
              <div className="mb-7 text-[26px] font-semibold tracking-[-0.2px] text-slate-900 sm:text-[30px]">
                {clinicsMega.title}
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
                <div className="space-y-6">
                  {clinicsMega.left.map((it) => (
                    <a key={it.title} href="#" className="group block">
                      <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                        {it.title}
                      </div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-500">{it.desc}</div>
                    </a>
                  ))}
                </div>
                <div className="space-y-6">
                  {clinicsMega.right.map((it) => (
                    <a key={it.title} href="#" className="group block">
                      <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                        {it.title}
                      </div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-500">{it.desc}</div>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={clinicsMega.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#0aa39a] to-[#04a59a] px-4 py-3 text-[13px] font-semibold text-white shadow-md hover:shadow-lg sm:absolute sm:bottom-6 sm:right-8 sm:mt-0 sm:inline-flex sm:w-auto"
              >
                <span aria-hidden="true" className="text-[14px]">
                  👤
                </span>
                {clinicsMega.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      );
    }

    if (m.key === 'about') {
      return (
        <div className="nav-mega absolute left-1/2 top-full z-[60] mt-2 w-[min(1120px,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(220px,320px)_1fr]">
            <div className="relative min-h-[220px] self-stretch md:min-h-0">
              <img
                src={aboutMega.image}
                alt=""
                className="absolute inset-0 block h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" aria-hidden="true" />
            </div>

            <div className="relative px-6 py-8 sm:px-12 sm:py-10">
              <div className="mb-7 text-[26px] font-semibold tracking-[-0.2px] text-slate-900 sm:text-[30px]">
                {aboutMega.title}
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
                <div className="space-y-6">
                  {aboutMega.left.map((it) => (
                    <a key={it.title} href="#" className="group block">
                      <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                        {it.title}
                      </div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-500">{it.desc}</div>
                    </a>
                  ))}
                </div>
                <div className="space-y-6">
                  {aboutMega.right.map((it) => (
                    <a key={it.title} href="#" className="group block">
                      <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                        {it.title}
                      </div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-500">{it.desc}</div>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={aboutMega.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#0aa39a] to-[#04a59a] px-4 py-3 text-[13px] font-semibold text-white shadow-md hover:shadow-lg sm:absolute sm:bottom-6 sm:right-8 sm:mt-0 sm:inline-flex sm:w-auto"
              >
                <span aria-hidden="true" className="text-[14px]">
                  👤
                </span>
                {aboutMega.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      );
    }

    if (m.key === 'academics') {
      return (
        <div className="nav-mega absolute left-1/2 top-full z-[60] mt-2 w-[min(1120px,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(220px,320px)_1fr]">
            <div className="relative min-h-[220px] self-stretch md:min-h-0">
              <img
                src={academicsMega.image}
                alt=""
                className="absolute inset-0 block h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" aria-hidden="true" />
            </div>

            <div className="px-6 py-8 sm:px-12 sm:py-10">
              <div className="mb-7 text-[26px] font-semibold tracking-[-0.2px] text-slate-900 sm:text-[30px]">
                {academicsMega.title}
              </div>

              <div className="max-w-[560px] space-y-7">
                {academicsMega.items.map((it) => (
                  <a key={it.title} href="#" className="group block">
                    <div className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3563dc]">
                      {it.title}
                    </div>
                    <div className="mt-1 text-[12px] leading-relaxed text-slate-500">{it.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (m.key === 'services') {
      return (
        <div className="nav-mega absolute left-1/2 top-full z-[60] mt-2 w-[min(300px,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
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
      );
    }

    return (
      <div className="nav-mega absolute left-1/2 top-full z-[60] mt-2 w-56 -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
        <a className="block rounded-md px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50" href="#">
          {m.label} Overview
        </a>
        <a className="block rounded-md px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50" href="#">
          All {m.label}
        </a>
      </div>
    );
  };

  return (
    <header
      data-anim="navbar"
      className={`nav-header sticky top-0 z-50 w-full will-change-transform transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className={`nav-header__shadow bg-white transition-all duration-300 ${isCompact ? 'shadow-md' : ''}`}>
        <div className="mx-auto max-w-[1320px]">
          <div className="nav-split">
            {/* Slanted logo */}
            <div className="nav-brand">
              <a href="/" className="nav-brand__link" onClick={() => setMobileOpen(false)}>
                <span data-anim="logo-pulse" className="inline-flex shrink-0">
                  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">
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
                    <path
                      d="M18 32 C25 21 42 21 50 32 C42 43 25 43 18 32 Z"
                      fill="none"
                      stroke="#252c6f"
                      strokeWidth="3"
                    />
                    <circle cx="34" cy="32" r="5" fill="#252c6f" />
                  </svg>
                </span>
                <span className="nav-brand__text">
                  <span className="nav-brand__title">Giridhar Eye Institute</span>
                  <span className="nav-brand__tag">Lighting up Lives</span>
                </span>
              </a>
            </div>

            <div className="nav-rest">
              {/* Teal info strip */}
              <div className="nav-teal">
                <div className="nav-teal__left">
                  <a className="nav-teal__item" href="tel:+914844170000">
                    <Icon name="phone" className="h-4 w-4 shrink-0 opacity-95" />
                    <span className="hidden sm:inline">Phone: </span>
                    <span>+91-484-4170000</span>
                  </a>
                  <span className="nav-teal__item hidden md:inline-flex">
                    <Icon name="clock" className="h-4 w-4 shrink-0 opacity-95" />
                    Mon–Sat (8am – 6pm)
                  </span>
                  <a className="nav-teal__item" href="mailto:info@giridhareye.org">
                    <Icon name="mail" className="h-4 w-4 shrink-0 opacity-95" />
                    <span className="hidden sm:inline">info@giridhareye.org</span>
                    <span className="sm:hidden">Email</span>
                  </a>
                </div>

                <div className="nav-teal__right">
                  <button type="button" className="nav-cart" aria-label="Cart (demo)">
                    <Icon name="cart" className="h-5 w-5" />
                    <span className="nav-cart__badge">3</span>
                  </button>
                  <button
                    type="button"
                    className="nav-teal__burger"
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setMobileOpen((v) => !v)}
                  >
                    <Icon name={mobileOpen ? 'close' : 'menu'} className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main navigation — balanced center + CTA right */}
              <div className={`nav-main ${isCompact ? 'min-h-[56px]' : 'min-h-[60px]'}`}>
                <div className="nav-main__spacer" aria-hidden="true" />
                <nav className="nav-main__links" aria-label="Primary">
                  {menus.map((m) => {
                    const isActive = (m.href !== '#' && pathname === m.href) || (m.key === 'home' && pathname === '/');

                    return (
                      <div
                        key={m.key}
                        className="nav-main__item"
                        onMouseEnter={() => (m.hasDropdown ? setActiveDropdown(m.key) : setActiveDropdown(null))}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <a
                          href={m.href}
                          className={`nav-main__link ${isActive ? 'nav-main__link--active' : ''}`}
                          onFocus={() => m.hasDropdown && setActiveDropdown(m.key)}
                        >
                          {m.label}
                          {m.hasDropdown ? <span className="nav-main__plus">+</span> : null}
                        </a>
                        {renderMegaMenu(m)}
                      </div>
                    );
                  })}
                </nav>
                <div className="nav-main__ctaWrap">
                  <a
                    href="#awb-open-oc__6183"
                    className="nav-main__cta inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#2563eb] px-3 py-2 text-[12px] font-extrabold text-white shadow-sm hover:bg-[#1d4ed8] xl:px-4 xl:text-[13px]"
                  >
                    <Icon name="calendar" className="h-4 w-4 shrink-0" />
                    <span>Appointment</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {mobileOpen ? (
            <div className="nav-mobile lg:hidden">
              {menus.map((m) => (
                <a
                  key={m.key}
                  href={m.href}
                  className="nav-mobile__link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{m.label}</span>
                  {m.hasDropdown ? <span className="nav-main__plus">+</span> : null}
                </a>
              ))}
              <a
                href="#awb-open-oc__6183"
                className="nav-mobile__cta"
                onClick={() => setMobileOpen(false)}
              >
                <Icon name="calendar" className="h-5 w-5" />
                Request An Appointment
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
