import {hobbies} from '../data';
import {Head, Reveal} from './Reveal';

export function Hobbies() {
  return (
    <section id="hobbies" aria-labelledby="hobbies-title" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Head label="06 / Hobbies" title="Outside the code" />
        <Reveal as="ul" className="flex flex-wrap gap-3">
          {hobbies.map((h) => (
            <li key={h} className="pill px-6 py-3 text-base sm:text-lg">{h}</li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
