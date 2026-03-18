import React, { useEffect, useRef, useState } from 'react';
import './CursorFX.css';
import { prefersReducedMotion } from './prefersReducedMotion';

function isFinePointer() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

export default function CursorFX() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [mode, setMode] = useState('default'); // default | action | image
  const scrollTimerRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    if (!isFinePointer()) return undefined;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return undefined;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
    };

    const onOver = (e) => {
      const el = e.target?.closest?.('a,button,[role="button"],input,textarea,select,label');
      const img = e.target?.closest?.('img,video,svg');
      if (img) {
        setMode('image');
        return;
      }
      if (el) setMode('action');
    };

    const onOut = () => setMode('default');

    const onScroll = () => {
      document.documentElement.classList.add('cfx-scrolling');
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = window.setTimeout(() => {
        document.documentElement.classList.remove('cfx-scrolling');
      }, 140);
    };

    const tick = () => {
      const lerp = 0.12;
      ring.current.x += (target.current.x - ring.current.x) * lerp;
      ring.current.y += (target.current.y - ring.current.y) * lerp;
      ringEl.style.transform = `translate3d(${ring.current.x - 16}px, ${ring.current.y - 16}px, 0)`;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafRef.current);
      window.clearTimeout(scrollTimerRef.current);
      document.documentElement.classList.remove('cfx-scrolling');
    };
  }, []);

  if (prefersReducedMotion() || !isFinePointer()) return null;

  return (
    <>
      <div ref={dotRef} className="cfx cfx-dot" aria-hidden="true" />
      <div ref={ringRef} className={`cfx cfx-ring is-${mode}`} aria-hidden="true">
        <span className="cfx-icon" aria-hidden="true">
          ⌕
        </span>
      </div>
    </>
  );
}

