import {EMAIL, socials} from '../data';
import {Head, Reveal} from './Reveal';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Head label="07 / Contact" title="Let's talk" />
        <Reveal>
          <p className="mono mute mb-4 flex items-center gap-3 text-xs uppercase tracking-[.2em]">
            <span className="relative inline-block h-2 w-2 rounded-full" style={{background: 'var(--fg)'}} aria-hidden="true"><span className="ping" /></span>
            Open to opportunities
          </p>
          <a href={`mailto:${EMAIL}`} className="ul break-all text-[clamp(1.4rem,5vw,3.5rem)] font-semibold tracking-tight">{EMAIL}</a>
          <ul className="mt-10 flex flex-wrap gap-3">
            {socials.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="pill mono inline-flex min-h-[44px] items-center px-5 text-xs capitalize">{name} ↗</a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
