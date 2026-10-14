import {certs} from '../data';
import {Head, Reveal} from './Reveal';

export function Certs() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Head label="05 / Certifications" title="Courses & badges" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal as="li" key={c.t} delay={(i % 3) * 90}>
              <article className="cc flex h-full flex-col p-6">
                <p className="mono mute text-xs">{c.y}{c.exp ? ` · expires ${c.exp}` : ''}</p>
                <h3 className="mt-4 flex-1 text-lg font-medium leading-snug">{c.t}</h3>
                <p className="mute mt-2 text-sm">{c.i}</p>
                {c.sk && <p className="mono mute mt-3 text-xs">Skill: {c.sk}</p>}
                {c.id && <p className="mono mute mt-1 break-all text-[11px]">ID: {c.id}</p>}
                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="ul mono mt-4 inline-block self-start text-sm">View credential ↗</a>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
