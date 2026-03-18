import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { prefersReducedMotion } from './prefersReducedMotion';

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function LenisProvider({ children }) {
  const rafRef = useRef(0);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.4,
      easing: easeInOutCubic,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = window.requestAnimationFrame(raf);
    };
    rafRef.current = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

