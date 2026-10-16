import React, { useState } from 'react';

export default function Img({ src, alt = '', className = '' }) {
  const [bad, setBad] = useState(false);
  return bad
    ? <div className={`img-fallback ${className}`} role="img" aria-label={alt} />
    : <img className={className} src={src} alt={alt} loading="lazy" onError={() => setBad(true)} />;
}
