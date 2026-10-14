import {useState} from 'react';
import {code, ext, stack} from './data';
import {Head, Reveal} from './Reveal';

export function Stack() {
  const [sel, setSel] = useState(stack[0]);

  return (
    <section id="stack" aria-labelledby="stack-title" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Head label="03 / Stack" title="Tools I build with" />
      </div>

      {/* Scrolling marquee: the list is doubled so the loop is seamless */}
      <div className="ln overflow-hidden border-y py-5" aria-hidden="true">
        <div className="mq">
          {[...stack, ...stack, ...stack, ...stack].map((s, i) => (
            <span key={`${s}-${i}`} className="outline mr-10 whitespace-nowrap text-4xl font-semibold sm:text-6xl">{s}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Choose a technology">
            {stack.map((s) => (
              <button key={s} type="button" aria-pressed={sel === s} onClick={() => setSel(s)} className={`pill mono min-h-[44px] px-5 text-xs ${sel === s ? 'on' : ''}`}>{s}</button>
            ))}
          </div>
          <div className="cc overflow-hidden">
            <div className="ln mono mute flex items-center justify-between border-b px-4 py-2 text-xs">
              <span>snippet.{ext[sel]}</span>
              <span>{sel}</span>
            </div>
            <pre className="mono overflow-x-auto p-5 text-xs leading-relaxed sm:text-sm"><code>{code[sel]}</code></pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
