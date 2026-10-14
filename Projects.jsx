import {useMemo, useState} from 'react';
import {projects} from '../data';
import {Head, Reveal} from './Reveal';

const FILTERS = ['All', ...new Set(projects.map((p) => p.cat))];

function ProjectCard({p, n}) {
  return (
    <article className="cc flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="mono mute text-xs">{String(n).padStart(2, '0')} / {p.cat}</span>
        <span className="flex items-center gap-2">
          {p.sample && <span className="mono ln border px-2 py-0.5 text-[10px] uppercase tracking-wider">Sample</span>}
          <span className="mono mute text-xs">{p.y}</span>
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-medium leading-snug">{p.t}</h3>
      <p className="mute mt-2 flex-1 text-sm leading-relaxed">{p.d}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used in ${p.t}`}>
        {p.tags.map((t) => (
          <li key={t} className="pill mono px-3 py-1 text-[11px]">{t}</li>
        ))}
      </ul>

      <div className="ln mt-6 flex gap-6 border-t pt-4">
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="ul mono text-sm" aria-label={`${p.t} source code on GitHub (opens in a new tab)`}>GitHub ↗</a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="ul mono text-sm" aria-label={`${p.t} live demo (opens in a new tab)`}>Live ↗</a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('All');
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.cat === filter)), [filter]);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Head label="04 / Projects" title="Selected work" />

        <Reveal className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)} className={`pill mono min-h-[44px] px-5 text-xs ${filter === f ? 'on' : ''}`}>{f}</button>
          ))}
        </Reveal>

        <p className="sr-only" role="status" aria-live="polite">Showing {list.length} of {projects.length} projects</p>

        <ul className="grid gap-5 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal as="li" key={p.t} delay={(i % 2) * 90}>
              <ProjectCard p={p} n={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
