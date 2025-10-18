// src/components/ParticleBackground.jsx
import React, { useMemo } from 'react';
import Particles from 'react-particles';

export default function ParticleBackground() {
  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: { value: '#0b0b0d' } },
    particles: {
      number: { value: 35, density: { enable: true, area: 900 } },
      color: { value: ['#ff6b35', '#ffd166', '#06d6a0'] },
      links: { enable: true, color: '#ffffff', opacity: 0.08 },
      move: { enable: true, speed: 0.6 },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  }), []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Particles id="tsparticles" options={options} />
    </div>
  );
}
