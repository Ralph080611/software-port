import {useEffect, useState} from 'react';

const WORDS = ['Ralph', 'Andrei', 'D.', 'Galate'];

/** Split-screen intro. The two halves slide away once progress reaches 100. */
export function Loader() {
  const [p, setP] = useState(0);
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let v = 0;
    const timers = [];
    const id = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9) + 2);
      setP(v);
      if (v >= 100) {
        clearInterval(id);
        timers.push(setTimeout(() => setOpen(true), 250));
        timers.push(setTimeout(() => setGone(true), 1700));
      }
    }, 70);
    return () => {
      clearInterval(id);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${open ? 'open' : ''}`} role="status" aria-label="Loading portfolio">
      <div className="half t" />
      <div className="half b" />
      <div className="lc">
        <p className="mono text-xs uppercase tracking-[.25em] text-neutral-400">Portfolio</p>
        <div className="flex flex-wrap gap-x-4 text-5xl font-semibold tracking-tight sm:text-7xl" aria-hidden="true">
          {WORDS.map((w, i) => (
            <span key={w} className="wordIn" style={{animationDelay: `${i * 140}ms`}}>
              {w}
            </span>
          ))}
        </div>
        <div>
          <div className="mono mb-2 flex justify-between text-xs text-neutral-400">
            <span>Loading</span>
            <span>{String(p).padStart(3, '0')}%</span>
          </div>
          <div className="lbar">
            <i style={{width: `${p}%`}} />
          </div>
        </div>
      </div>
    </div>
  );
}
