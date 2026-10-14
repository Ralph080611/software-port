import {useRef} from 'react';

/** Gentle 3D tilt that follows the pointer (uses the .tilt class from index.css). */
export function Tilt({children, className = ''}) {
  const ref = useRef(null);

  const move = (e) => {
    const b = ref.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };
  const leave = () => {
    ref.current.style.transform = '';
  };

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt ${className}`}>
      {children}
    </div>
  );
}
