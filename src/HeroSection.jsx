import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { prefersReducedMotion } from './animation/prefersReducedMotion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const rootRef = useRef(null);

  const renderHeadingWords = (text) => {
    const words = String(text || '').split(' ').filter(Boolean);
    return words.map((w, i) => (
      <span
        // eslint-disable-next-line react/no-array-index-key
        key={`${w}-${i}`}
        data-hero-word
        className="inline-block will-change-transform"
      >
        {w}
        {i < words.length - 1 ? '\u00A0' : ''}
      </span>
    ));
  };

  const slides = [
    {
      id: 10371,
      bgImage: 'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=1920&q=80',
      heading: "Kerala's First WaveLight Plus InnovEyes.",
      caption: 'An advanced, AI-powered LASIK platform',
      buttonText: 'Know More About WaveLight Plus',
      buttonLink: '/lasik-surgery-keralas-first-wavelight-plus-innoveyes',
    },
    {
      id: 10300,
      bgImage: 'https://images.unsplash.com/photo-1579684288361-5c1b87b5b09c?auto=format&fit=crop&w=1920&q=80',
      heading: "Kerala's First WaveLight Plus InnovEyes.",
      caption: 'AI - Powered Ray Tracing LASIK platform Now Available',
      buttonText: 'Know More About WaveLight Plus',
      buttonLink: '/lasik-surgery-keralas-first-wavelight-plus-innoveyes',
    },
    {
      id: 10073,
      bgImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80',
      heading: "Don't let cancer steal your sight.",
      caption: 'Surgical Ophthalmic Oncology Department',
      buttonText: 'Read More',
      buttonLink: '#',
    },
    {
      id: 10009,
      bgImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80',
      heading: 'Beyond glasses, beyond limits.',
      caption: 'Lasik Surgery - The clear choice for clear sight.',
      buttonText: 'Read More',
      buttonLink: '#',
    },
    {
      id: 9542,
      bgImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80',
      heading: 'Say Goodbye to Dry Eyes',
      caption: 'Visit our Dry Eye Clinic Today',
      buttonText: 'Prioritize Your Vision—Book Now!',
      buttonLink: '#',
    },
    {
      id: 9541,
      bgImage: 'https://www.giridhareye.org/wp-content/uploads/2025/05/Lasik-banner-scaled.jpg',
      heading: 'Visit our Next-Gen Lasik Clinic',
      caption: 'Clear Vision with LASIK',
      buttonText: 'Prioritize Your Vision—Book Now!',
      buttonLink: '#',
    },
    {
      id: 9537,
      bgImage: 'https://www.giridhareye.org/wp-content/uploads/2025/05/24x7-1-scaled.png',
      heading: '24x7 Emergency Trauma Care',
      caption: 'At Kadavanthra Center',
      buttonText: 'Prioritize Your Vision—Book Now!',
      secondaryButtonText: 'Know More!',
      buttonLink: '#',
    },
    {
      id: 9464,
      bgImage: 'https://www.giridhareye.org/wp-content/uploads/2025/04/new-OT.png',
      heading: 'Advanced Surgical & Patient Care Facility',
      caption: 'Best Eye Hospital in Kochi',
      buttonText: 'Prioritize Your Vision—Book Now!',
      buttonLink: '#',
    },
    {
      id: 9460,
      bgImage: 'https://www.giridhareye.org/wp-content/uploads/2025/04/Dryeye-1-scaled.png',
      heading: "Don't Let Diabetes Steal Your Vision",
      caption: 'Consult with our experts',
      buttonText: 'Prioritize Your Vision—Book Now!',
      buttonLink: '#',
    },
    {
      id: 8346,
      bgImage: 'https://www.giridhareye.org/wp-content/uploads/2025/01/cataract-banner-scaled.jpg',
      heading: 'Rediscover the world in vibrant clarity',
      caption: 'Leading Cataract Surgery Hospital in Kerala',
      buttonText: 'Prioritize Your Vision—Book Now',
      buttonLink: '#',
    },
    {
      id: 7152,
      bgImage: 'https://www.giridhareye.org/wp-content/uploads/2024/10/peditrics2.jpg',
      heading: 'Let Them Discover a Whole New World',
      caption: 'Pediatric Eye Care in Kochi',
      buttonText: 'Read More',
      buttonLink: '#',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // GSAP page-load intro (runs once)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const navbar = document.querySelector('[data-anim="navbar"]');
      const words = rootRef.current?.querySelectorAll('[data-hero-word]');
      const subheading = rootRef.current?.querySelector('[data-hero-subheading]');
      const ctas = rootRef.current?.querySelectorAll('[data-hero-cta]');
      const visual = rootRef.current?.querySelector('[data-hero-visual]');
      const bg = rootRef.current?.querySelector('[data-hero-bg]');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Step 1: Navbar slides down
      if (navbar) {
        tl.fromTo(
          navbar,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, clearProps: 'transform' },
          0,
        );
      }

      // Step 2: Headline words stagger in
      if (words && words.length) {
        tl.fromTo(words, { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.7 }, 0.3);
      }

      // Step 3: Subheading
      if (subheading) {
        tl.fromTo(subheading, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.6);
      }

      // Step 4: CTA buttons
      if (ctas && ctas.length) {
        tl.fromTo(
          ctas,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15 },
          0.8,
        );
      }

      // Step 5: Hero visual
      if (visual) {
        tl.fromTo(visual, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, 1.0);
      }

      // Step 6: Background gradient shift (infinite)
      if (bg) {
        tl.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.2);
        gsap.to(bg, {
          backgroundPosition: '200% 0%',
          duration: 6,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { scope: rootRef, dependencies: [] },
  );

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = useMemo(() => slides[currentSlide], [slides, currentSlide]);

  return (
    <div ref={rootRef} id="sliders-container" className="fusion-slider-visibility" data-anim="hero">
      <div className="w-full bg-gray-800 py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-sm text-white">
              <span className="mx-4">
                24×7 Emergency Eye care service available at Kadavanthra branch | For
                appointments, please contact us : Kadavanthra: 0484 4170000 | Edappally:
                0484 4000582, 0484 4000583 | Thripunithura: 0484 291 8001, 0484 2918002,
                0484 2918003 | Mattancherry: 0484 2221432, 0484 2221433.
              </span>
              <span className="mx-4">
                24×7 Emergency Eye care service available at Kadavanthra branch | For
                appointments, please contact us : Kadavanthra: 0484 4170000 | Edappally:
                0484 4000582, 0484 4000583 | Thripunithura: 0484 291 8001, 0484 2918002,
                0484 2918003 | Mattancherry: 0484 2221432, 0484 2221433.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="fusion-slider-26"
        className="fusion-slider-container relative w-full overflow-hidden"
        style={{ height: '600px' }}
      >
        <div className="fusion-slider-loading hidden">Loading...</div>

        <div className="tfs-slider relative h-full w-full overflow-hidden">
          {/* animated gradient overlay */}
          <div
            data-hero-bg
            className="pointer-events-none absolute inset-0 z-[2] opacity-0"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(0,180,180,0.18) 0%, rgba(0,119,182,0.18) 50%, rgba(0,201,167,0.18) 100%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 0%',
            }}
          />

          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative h-full w-full flex-shrink-0"
                style={{ flex: '0 0 100%' }}
              >
                <div className="slide-content-container absolute inset-0 z-10 flex items-center justify-start px-4 md:px-16 lg:px-24">
                  <div className="slide-content max-w-3xl">
                    {slide.heading && (
                      <div className="heading mb-4">
                        <div
                          className={`inline-block ${
                            slide.id === 10371 || slide.id === 10300 ? 'bg-black/40' : ''
                          } p-4`}
                        >
                          <h2
                            data-hero-headline
                            className={`text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl ${
                              slide.id === 9537 ? 'text-gray-900' : ''
                            }`}
                          >
                            {slide.id === activeSlide.id ? renderHeadingWords(slide.heading) : slide.heading}
                          </h2>
                        </div>
                      </div>
                    )}

                    {slide.caption && (
                      <div className="caption mb-6">
                        <div
                          className={`inline-block ${
                            slide.id === 9537 ? 'bg-gray-700/60' : ''
                          } p-3`}
                        >
                          <h3
                            data-hero-subheading={slide.id === activeSlide.id ? 'true' : undefined}
                            className={`text-xl md:text-2xl lg:text-3xl ${
                              slide.id === 9537
                                ? 'text-yellow-400'
                                : slide.id === 10371 || slide.id === 10300
                                ? 'text-blue-700'
                                : 'text-white'
                            }`}
                          >
                            {slide.caption}
                          </h3>
                        </div>
                      </div>
                    )}

                    <div className="buttons flex flex-wrap gap-4">
                      {slide.buttonText && (
                        <a
                          href={slide.buttonLink}
                          data-hero-cta={slide.id === activeSlide.id ? 'true' : undefined}
                          className={`inline-flex items-center justify-center rounded px-6 py-3 text-white transition-all duration-300 ${
                            slide.id === 9537 ||
                            slide.id === 9464 ||
                            slide.id === 9460 ||
                            slide.id === 8346
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                              : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                        >
                          <span className="fusion-button-text">{slide.buttonText}</span>
                        </a>
                      )}

                      {slide.secondaryButtonText && (
                        <a
                          href="#"
                          data-hero-cta={slide.id === activeSlide.id ? 'true' : undefined}
                          className="inline-flex items-center justify-center rounded bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                        >
                          <span className="fusion-button-text">
                            {slide.secondaryButtonText}
                          </span>
                        </a>
                      )}

                      {slide.id === 10073 && (
                        <a
                          href="#"
                          className="inline-flex items-center justify-center rounded bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white hover:from-blue-600 hover:to-blue-700 md:hidden transition-all duration-300"
                        >
                          <span className="fusion-button-text">Request Now!</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  data-hero-visual={slide.id === activeSlide.id ? 'true' : undefined}
                  className="absolute inset-0 h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.bgImage})`,
                    maxWidth: '100%',
                    height: '600px',
                  }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="flex-direction-nav absolute left-4 top-1/2 z-20 flex h-[63px] w-[63px] -translate-y-1/2 items-center justify-center bg-white/20 text-2xl text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="flex-direction-nav absolute right-4 top-1/2 z-20 flex h-[63px] w-[63px] -translate-y-1/2 items-center justify-center bg-white/20 text-2xl text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-white' : 'w-3 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

