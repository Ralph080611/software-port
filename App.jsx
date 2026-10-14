import {useEffect, useRef, useState} from 'react';
import {Certs} from './Certs';
import {Contact} from './Contact';
import {Cursor} from './Cursor';
import {Education} from './Education';
import {Footer} from './Footer';
import {Hero} from './Hero';
import {Hobbies} from './Hobbies';
import {Leadership} from './Leadership';
import {Loader} from './Loader';
import {Navbar} from './Navbar';
import {Projects} from './Projects';
import {Stack} from './Stack';

const readTheme = () => {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export function App() {
  const [theme, setTheme] = useState(readTheme);
  const bar = useRef(null);

  // Theme is applied as data-theme on <html>, which index.css reads.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  // Pointer glow (.spot) and scroll progress bar (.prog)
  useEffect(() => {
    const root = document.documentElement;
    const move = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    const scroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener('pointermove', move, {passive: true});
    window.addEventListener('scroll', scroll, {passive: true});
    scroll();
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <div ref={bar} className="prog" aria-hidden="true" />
      <Navbar theme={theme} onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <Education />
        <Leadership />
        <Stack />
        <Projects />
        <Certs />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
