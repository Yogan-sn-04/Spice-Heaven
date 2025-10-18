import React from 'react';

export default function About() {
  return (
    <section
      style={{
        padding: '48px 20px',
        maxWidth: '980px',
        margin: '0 auto',
        lineHeight: 1.75,
        position: 'relative'
      }}
    >
      {/* Decorative gradient background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(1200px 600px at 10% -10%, rgba(255,107,53,0.12), transparent 50%), radial-gradient(900px 500px at 90% 20%, rgba(255,209,102,0.10), transparent 60%), radial-gradient(700px 400px at 50% 120%, rgba(6,214,160,0.10), transparent 60%)'
        }}
      />

      <div
        className="card"
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: 20,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.10)',
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
          boxShadow:
            '0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
          padding: 28
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: 28 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 14px',
              borderRadius: 999,
              background:
                'linear-gradient(90deg, rgba(255,107,53,0.15), rgba(255,209,102,0.15))',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#ffd166',
              fontWeight: 800,
              letterSpacing: 0.5
            }}
          >
            <span role="img" aria-label="chili">🌶️</span>
            Spice Heaven
            <span role="img" aria-label="sparkles">✨</span>
          </div>

          <h2
            style={{
              fontSize: '2.2rem',
              margin: '14px 0 8px',
              lineHeight: 1.15
            }}
          >
            About Spice Heaven
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(245,245,255,0.85)',
              maxWidth: 720,
              margin: '0 auto'
            }}
          >
            Partnering with sustainable farms, we bring you peak‑harvest spices with
            transparent origins, fair trade practices, and flavor that sings. 🍯🌿
          </p>
        </header>

        <div className="grid" style={{ gap: 18 }}>
          {/* Our Story */}
          <article
            className="card"
            style={{
              padding: 20,
              background:
                'linear-gradient(180deg, rgba(255,107,53,0.10), rgba(255,255,255,0.03))',
              border: '1px solid rgba(255,107,53,0.25)',
              borderRadius: 16
            }}
          >
            <h3
              style={{
                fontSize: '1.35rem',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
            >
              <span role="img" aria-label="map">🗺️</span> Our Story
            </h3>
            <p style={{ color: 'rgba(245,245,255,0.9)', marginTop: 10 }}>
              Born from a love of bold cuisine, Spice Heaven began with journeys across
              spice heartlands—from the sun‑drenched pepper vines of Kerala to the
              saffron valleys of Kashmir—building trusted relationships with smallholder
              farmers at the source. Every jar reflects those miles, those hands, and
              that passion. ✈️🌾
            </p>
          </article>

          {/* Our Mission */}
          <article
            className="card"
            style={{
              padding: 20,
              background:
                'linear-gradient(180deg, rgba(255,209,102,0.10), rgba(255,255,255,0.03))',
              border: '1px solid rgba(255,209,102,0.25)',
              borderRadius: 16
            }}
          >
            <h3
              style={{
                fontSize: '1.35rem',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
            >
              <span role="img" aria-label="hands">🤝</span> Our Mission
            </h3>
            <p style={{ color: 'rgba(245,245,255,0.9)', marginTop: 10 }}>
              We close the gap between farmer and kitchen—championing fair pay,
              regenerative agriculture, and traceable supply chains—so your meals do good
              while tasting extraordinary. Your purchase uplifts communities and preserves
              vibrant culinary heritage. 🌍💛
            </p>
          </article>

          {/* Our Process */}
          <article
            className="card"
            style={{
              padding: 20,
              background:
                'linear-gradient(180deg, rgba(6,214,160,0.10), rgba(255,255,255,0.03))',
              border: '1px solid rgba(6,214,160,0.25)',
              borderRadius: 16
            }}
          >
            <h3
              style={{
                fontSize: '1.35rem',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
            >
              <span role="img" aria-label="leaf">🍃</span> Our Process
            </h3>
            <ul style={{ marginTop: 10, paddingLeft: 18, color: 'rgba(245,245,255,0.9)' }}>
              <li>Small‑batch milling to lock in peak aroma and essential oils.</li>
              <li>Airtight glass jars for freshness and pantry‑worthy presentation.</li>
              <li>Lightning‑fast fulfillment so flavors arrive bold and lively.</li>
              <li>Zero fillers, dyes, or shortcuts—only pure, character‑packed spice.</li>
            </ul>
          </article>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: 28,
            color: 'rgba(245,245,255,0.95)',
            fontStyle: 'italic',
            fontSize: '1.05rem'
          }}
        >
          Experience the difference—one vibrant pinch at a time. 🔥
        </div>
      </div>
    </section>
  );
}
