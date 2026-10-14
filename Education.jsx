import {edu} from './data';
import {Head, Reveal} from './Reveal';

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Head label="01 / Education" title="Where I studied" />
        <Reveal className="relative pl-8">
          <span aria-hidden="true" className="ln absolute bottom-0 left-0 top-0 border-l" />
          <span aria-hidden="true" className="tlfill absolute bottom-0 left-0 top-0 w-px" style={{background: 'var(--fg)'}} />
          <ol className="space-y-10">
            {edu.map(([years, school, desc, current]) => (
              <li key={`${years}-${desc}`} className="relative">
                <span aria-hidden="true" className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full" style={{background: 'var(--fg)'}}>
                  {current ? <span className="ping" /> : null}
                </span>
                <p className="mono mute text-xs">{years}</p>
                <h3 className="mt-1 text-xl font-medium sm:text-2xl">{school}</h3>
                <p className="mute mt-1 text-sm">{desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
