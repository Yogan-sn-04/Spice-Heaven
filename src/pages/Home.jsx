import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Inject small CSS helpers for animations and gradients
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .aura {
        position: absolute; inset: 0; z-index: 0; pointer-events: none;
        background:
          radial-gradient(600px 300px at 15% -10%, rgba(255,107,53,0.20), transparent 55%),
          radial-gradient(700px 320px at 85% 0%, rgba(255,209,102,0.18), transparent 60%),
          radial-gradient(800px 360px at 50% 110%, rgba(6,214,160,0.16), transparent 65%);
        filter: blur(6px);
        animation: glow 1s ease-in-out infinite alternate;
      }
      @keyframes glow {
        0% { opacity: 0.85; transform: scale(1); }
        100% { opacity: 1; transform: scale(1.02); }
      }

      .headline {
        background: linear-gradient(90deg, #ffffff, #ffd166, #ff6b35, #06d6a0, #ffffff);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: shine 2s linear infinite;
      }
      @keyframes shine {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }

      .hero-card {
        position: relative;
        border-radius: 22px;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.12);
        background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
        box-shadow: 0 16px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
        transform: translateY(8px);
        opacity: 0;
        animation: riseIn 700ms cubic-bezier(.2,.8,.2,1) 120ms forwards;
      }
      @keyframes riseIn {
        to { transform: translateY(0); opacity: 1; }
      }

      .cta-row .btn {
        transform: translateY(0);
        transition: transform 150ms ease, filter 150ms ease;
      }
      .cta-row .btn:hover { transform: translateY(-1px); filter: brightness(1.06); }

      .features {
        display: grid; gap: 12px; margin-top: 18px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      @media (max-width: 900px) { .features { grid-template-columns: 1fr 1fr; } }
      @media (max-width: 640px) { .features { grid-template-columns: 1fr; } }

      .feature-card {
        border-radius: 16px; padding: 14px;
        border: 1px solid rgba(255,255,255,0.10);
        background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
        transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
      }
      .feature-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.30);
        border-color: rgba(255,255,255,0.18);
      }

      .badge-pulse {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 8px 14px; border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.14);
        background: linear-gradient(90deg, rgba(255,107,53,0.18), rgba(255,209,102,0.18));
        color: #ffd166; font-weight: 800; letter-spacing: .4px;
        animation: pulse 2.6s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.08); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="hero" style={{ position: 'relative', paddingTop: 56 }}>
      {/* Color aura atop your live particles */}
      <div className="aura" aria-hidden />

      {/* Hero card */}
      <div className="hero-card card" style={{ padding: 28, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="badge-pulse" aria-hidden>
            <span>🌶️</span> Fresh harvest • Small-batch milled <span>✨</span>
          </div>
        </div>

        <h1 className="headline" style={{ marginTop: 14, fontSize: 44, lineHeight: 1.08, textAlign: 'center' }}>
          Discover the world’s finest spices, delivered fresh to your kitchen.
        </h1>

        <p className="muted" style={{ fontSize: 18, marginTop: 10, textAlign: 'center', maxWidth: 820, marginInline: 'auto' }}>
          From fragrant cardamom to vibrant turmeric, elevate every dish with curated, ethically sourced flavors.
        </p>

        <div className="flex cta-row" style={{ marginTop: 16, justifyContent: 'center' }}>
          <Link className="btn" to="/products">Shop Spices</Link>
          <Link className="btn" style={{ background: '#06d6a0' }} to="/services">Our Services</Link>
        </div>

        {/* Feature highlights */}
        <div className="features">
          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="badge">Origin</div>
              <strong>Single‑origin lots</strong>
            </div>
            <p className="muted" style={{ marginTop: 6 }}>
              Direct trade partnerships for traceability and incredible terroir.
            </p>
          </div>

          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="badge">Fresh</div>
              <strong>Small‑batch milling</strong>
            </div>
            <p className="muted" style={{ marginTop: 6 }}>
              Packed at peak aroma for bold, lively flavor in every pinch.
            </p>
          </div>

          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="badge">Care</div>
              <strong>Ethical & sustainable</strong>
            </div>
            <p className="muted" style={{ marginTop: 6 }}>
              Fair pay and regenerative practices across our sourcing network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
