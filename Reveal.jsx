import {useEffect, useRef, useState} from 'react';

/** Adds the .rv / .in classes from index.css the first time the element scrolls into view. */
export function Reveal({as: Tag = 'div', delay = 0, className = '', children, ...rest}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {threshold: 0.12, rootMargin: '0px 0px -30px 0px'});
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{transitionDelay: `${delay}ms`}} className={`rv ${shown ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/** Shared heading used at the top of each section. */
export function Head({label, title}) {
  return (
    <Reveal className="mb-12">
      <p className="mono mute text-xs uppercase tracking-[.2em]">{label}</p>
      <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}
