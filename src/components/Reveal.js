import React, { useEffect, useRef, useState } from 'react';

/* Fades/slides a block in when it scrolls into view. Use delay for one-by-one order. */
export default function Reveal({ as: T = 'div', delay = 0, variant = 'up', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <T ref={ref} className={`reveal ${variant} ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </T>
  );
}

/* Word-by-word text reveal on scroll. */
export function Words({ text, as: T = 'h2', className = '', step = 60 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <T ref={ref} className={`words ${on ? 'in' : ''} ${className}`}>
      {text.split(' ').map((w, i) => (
        <span key={i} style={{ transitionDelay: `${i * step}ms` }}>{w}&nbsp;</span>
      ))}
    </T>
  );
}
