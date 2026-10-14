import {useEffect, useRef} from 'react';

/** Custom dot + ring cursor (hidden on touch devices by index.css). */
export function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined;
    let x = -100, y = -100, rx = -100, ry = -100, raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`;
      if (ring.current) ring.current.classList.toggle('big', Boolean(e.target.closest && e.target.closest('a,button,[data-hover]')));
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', move, {passive: true});
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cur dot" aria-hidden="true" />
      <div ref={ring} className="cur ring" aria-hidden="true" />
    </>
  );
}
