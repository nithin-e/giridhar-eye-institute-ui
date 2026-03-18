import { useEffect } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { prefersReducedMotion } from './prefersReducedMotion';

export function useCountUpOnView(ref, targetValue, { duration = 2 } = {}) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 90, damping: 20, mass: 0.8 });
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      mv.set(Number(targetValue) || 0);
      return;
    }
    mv.set(0);
    // useSpring doesn't take duration directly; approximate with animation controls via motionValue
    // by tweening mv and letting spring smooth it.
    const end = Number(targetValue) || 0;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      mv.set(end * p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, targetValue]);

  return spring;
}

