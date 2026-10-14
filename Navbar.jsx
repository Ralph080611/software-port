import {useEffect, useState} from 'react';
import {nav} from './data';

export function Navbar({theme, onToggle}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const y = window.scrollY + 140;
      let cur = nav[0][1];
      nav.forEach(([, id]) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) cur = nav[nav.length - 1][1];
      setActive(cur);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled || open ? 'ln backdrop-blur-md' : 'border-transparent'}`} style={scrolled || open ? {background: 'color-mix(in srgb, var(--bg) 80%, transparent)'} : undefined}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="mono text-sm font-medium">RG<span className="mute">/portfolio</span></a>

        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={`ul text-sm ${active === id ? '' : 'mute'}`}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" onClick={onToggle} className="pill mono h-10 px-4 text-xs" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button type="button" className="pill mono h-10 px-4 text-xs lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="lg:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 pb-4 sm:px-8">
          {nav.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`flex min-h-[48px] items-center border-t ln text-base ${active === id ? '' : 'mute'}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
