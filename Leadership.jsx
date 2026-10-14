import {lead} from './data';
import {Head, Reveal} from './Reveal';

export function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Head label="02 / Leadership" title="Roles I've held" />
        <ul className="grid gap-5 md:grid-cols-3">
          {lead.map(([org, role, years], i) => (
            <Reveal as="li" key={`${org}-${years}`} delay={i * 90}>
              <article className="cc h-full p-6">
                <p className="mono mute text-xs">{years}</p>
                <h3 className="mt-6 text-2xl font-medium">{org}</h3>
                <p className="mute mt-1 text-sm">{role}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
