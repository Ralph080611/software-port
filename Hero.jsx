import {useEffect, useState} from 'react';
import {PHOTO, edu, roles, socials} from '../data';
import {Tilt} from './Tilt';

/** Types out each role, deletes it, then moves to the next. */
function useTyper(words) {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0, j = 0, del = false, id;
    const tick = () => {
      const w = words[i];
      j += del ? -1 : 1;
      setText(w.slice(0, j));
      let d = del ? 40 : 80;
      if (!del && j === w.length) {
        del = true;
        d = 1400;
      } else if (del && j === 0) {
        del = false;
        i = (i + 1) % words.length;
        d = 300;
      }
      id = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(id);
  }, [words]);
  return text;
}

export function Hero() {
  const typed = useTyper(roles);

  return (
    <section id="home" aria-labelledby="hero-title" className="flex min-h-screen items-center pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mono mute rise text-sm">Hello, I&apos;m</p>
          <h1 id="hero-title" className="rise mt-2 text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[1.02] tracking-tight" style={{animationDelay: '.1s'}}>
            Ralph Andrei
            <span className="outline block">D. Galate</span>
          </h1>
          <p className="mono rise mt-6 min-h-[1.75rem] text-base sm:text-lg" style={{animationDelay: '.2s'}} aria-label={roles.join(', ')}>
            <span aria-hidden="true">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="mute rise mt-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{animationDelay: '.3s'}}>
            Web developer and React enthusiast, studying BSIT at {edu[0][1]}.
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3" style={{animationDelay: '.4s'}}>
            <a href="#projects" className="pill inline-flex min-h-[44px] items-center px-6 text-sm">View projects</a>
            <a href="#contact" className="pill inline-flex min-h-[44px] items-center px-6 text-sm">Contact me</a>
          </div>

          <ul className="rise mt-8 flex flex-wrap gap-x-6 gap-y-2" style={{animationDelay: '.5s'}}>
            {socials.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="ul mono mute text-sm capitalize">{name}</a>
              </li>
            ))}
          </ul>
        </div>

        <Tilt className="mx-auto w-full max-w-xs">
          <div className="frame flt">
            <img src={PHOTO} alt="Portrait of Ralph Andrei D. Galate" width="800" height="1000" decoding="async" className="photo" />
          </div>
        </Tilt>
      </div>
    </section>
  );
}
