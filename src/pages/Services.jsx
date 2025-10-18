import React, { useEffect } from 'react';

export default function Services() {
  // Add a tiny CSS animation helper once (scoped by class names used below)
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .fade-in-up {
        opacity: 0;
        transform: translateY(14px);
        animation: fadeUp 600ms ease forwards;
      }
      .fade-in-up.delay-1 { animation-delay: 120ms; }
      .fade-in-up.delay-2 { animation-delay: 240ms; }
      .fade-in-up.delay-3 { animation-delay: 360ms; }
      @keyframes fadeUp {
        to { opacity: 1; transform: translateY(0); }
      }

      .service-card {
        position: relative;
        transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        will-change: transform;
      }
      .service-card:hover {
        transform: translateY(-4px) rotateX(1deg) rotateY(-1deg);
        box-shadow: 0 16px 40px rgba(0,0,0,0.35);
        border-color: rgba(255,255,255,0.18);
      }
      .service-card::after {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 16px;
        pointer-events: none;
        background: radial-gradient(500px 200px at 20% -10%, rgba(255,107,53,0.15), transparent 40%),
                    radial-gradient(500px 200px at 110% 20%, rgba(255,209,102,0.12), transparent 40%);
        opacity: 0;
        transition: opacity 180ms ease;
      }
      .service-card:hover::after { opacity: 1; }

      .pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        background: linear-gradient(90deg, rgba(255,107,53,0.15), rgba(255,209,102,0.15));
        color: #ffd166;
        font-weight: 800;
        letter-spacing: 0.4px;
      }

      .icon {
        width: 28px; height: 28px;
        display: inline-grid; place-items: center;
        border-radius: 10px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.12);
      }

      .features-strip {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
      }
      @media (max-width: 900px) {
        .features-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 560px) {
        .features-strip { grid-template-columns: 1fr; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="container" style={{ padding: '40px 0', position: 'relative', zIndex: 1 }}>
      {/* Hero header */}
      <header style={{ textAlign: 'center', marginBottom: 26 }}>
        <div className="pill" aria-hidden>
          <span>🌶️</span> Services that spice up business <span>✨</span>
        </div>
        <h2 style={{ fontSize: '2rem', margin: '12px 0 8px' }}>What we offer</h2>
        <p className="muted" style={{ maxWidth: 720, margin: '0 auto' }}>
          From bespoke blends to wholesale partnerships, bring bold, ethical flavor to every plate.
        </p>
      </header>

      {/* Services grid */}
      <div className="grid grid-3" style={{ gap: 16 }}>
        <article className="card service-card fade-in-up">
          <div className="card-body">
            <div className="icon" aria-hidden>🧪</div>
            <h3 style={{ margin: '12px 0 6px' }}>Custom Blends</h3>
            <p className="muted">
              Collaborate with our spice sommeliers to design signature blends tailored to your cuisine and brand.
            </p>
            <ul className="muted" style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Chef consultations and tasting flights</li>
              <li>Iterative R&D with micro-batches</li>
              <li>Private labeling and packaging</li>
            </ul>
            <button className="btn" style={{ marginTop: 12 }}>Start a brief</button>
          </div>
        </article>

        <article className="card service-card fade-in-up delay-1">
          <div className="card-body">
            <div className="icon" aria-hidden>📦</div>
            <h3 style={{ margin: '12px 0 6px' }}>Wholesale</h3>
            <p className="muted">
              Reliable sourcing for restaurants, caterers, and food brands—consistent quality at scale.
            </p>
            <ul className="muted" style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Bulk SKUs and recurring schedules</li>
              <li>COAs and batch traceability</li>
              <li>Tiered pricing and logistics support</li>
            </ul>
            <button className="btn" style={{ marginTop: 12 }}>Request a quote</button>
          </div>
        </article>

        <article className="card service-card fade-in-up delay-2">
          <div className="card-body">
            <div className="icon" aria-hidden>🎓</div>
            <h3 style={{ margin: '12px 0 6px' }}>Tasting Workshops</h3>
            <p className="muted">
              Flavor education for teams and enthusiasts—virtual or on-site with curated kits.
            </p>
            <ul className="muted" style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Single-origin comparative tastings</li>
              <li>Pairing labs and recipe labs</li>
              <li>Certificates and team perks</li>
            </ul>
            <button className="btn" style={{ marginTop: 12 }}>Book a session</button>
          </div>
        </article>
      </div>

      {/* Feature strip */}
      <div className="features-strip" style={{ marginTop: 20 }}>
        <div className="card fade-in-up delay-1" style={{ padding: 16 }}>
          <div className="flex" style={{ gap: 12 }}>
            <div className="icon" aria-hidden>🌍</div>
            <div>
              <div style={{ fontWeight: 800 }}>Direct trade</div>
              <div className="muted">Fair pay, traceable origins</div>
            </div>
          </div>
        </div>
        <div className="card fade-in-up delay-2" style={{ padding: 16 }}>
          <div className="flex" style={{ gap: 12 }}>
            <div className="icon" aria-hidden>🧭</div>
            <div>
              <div style={{ fontWeight: 800 }}>Batch coded</div>
              <div className="muted">COAs and QA on every lot</div>
            </div>
          </div>
        </div>
        <div className="card fade-in-up delay-3" style={{ padding: 16 }}>
          <div className="flex" style={{ gap: 12 }}>
            <div className="icon" aria-hidden>⚡</div>
            <div>
              <div style={{ fontWeight: 800 }}>Fast fulfillment</div>
              <div className="muted">Freshness from mill to door</div>
            </div>
          </div>
        </div>
        <div className="card fade-in-up delay-3" style={{ padding: 16 }}>
          <div className="flex" style={{ gap: 12 }}>
            <div className="icon" aria-hidden>♻️</div>
            <div>
              <div style={{ fontWeight: 800 }}>Sustainable</div>
              <div className="muted">Regenerative practices</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card fade-in-up" style={{ marginTop: 24, padding: 20, textAlign: 'center' }}>
        <h3 style={{ marginTop: 0 }}>Let’s craft something unforgettable</h3>
        <p className="muted" style={{ marginTop: 6 }}>
          Tell us about your menu, volume, and timelines—our team will propose a flavorful roadmap.
        </p>
        <div className="flex" style={{ justifyContent: 'center', marginTop: 10 }}>
          <a className="btn" href="/contact">Contact sales</a>
          <a className="btn" style={{ background: '#06d6a0' }} href="/products">Browse spices</a>
        </div>
      </div>
    </section>
  );
}
