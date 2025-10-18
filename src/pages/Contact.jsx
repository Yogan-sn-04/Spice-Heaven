import React, { useEffect, useMemo, useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Inject small animation + style helpers
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .fade-in { opacity: 0; animation: fade 500ms ease forwards; }
      .fade-in.delay-1 { animation-delay: 100ms; }
      .fade-in.delay-2 { animation-delay: 200ms; }
      .fade-in.delay-3 { animation-delay: 300ms; }
      @keyframes fade { to { opacity: 1 } }

      .rise-in { opacity: 0; transform: translateY(12px); animation: rise 600ms ease forwards; }
      .rise-in.delay-1 { animation-delay: 120ms; }
      .rise-in.delay-2 { animation-delay: 240ms; }
      .rise-in.delay-3 { animation-delay: 360ms; }
      @keyframes rise { to { opacity: 1; transform: translateY(0) } }

      .ring {
        outline: 2px solid transparent;
        transition: outline-color 160ms ease, box-shadow 160ms ease;
      }
      .ring:focus {
        outline-color: rgba(255,209,102,0.75);
        box-shadow: 0 0 0 6px rgba(255,209,102,0.15);
      }

      .map-card {
        overflow: hidden;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.10);
        background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
      }

      .error-text { color: #ff7b7b; font-size: 0.9rem; margin-top: 6px; }
      .success-badge {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 8px 14px; border-radius: 999px;
        background: linear-gradient(90deg, rgba(6,214,160,0.2), rgba(255,209,102,0.2));
        border: 1px solid rgba(255,255,255,0.14);
        color: #06d6a0; font-weight: 800; letter-spacing: .4px;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const validate = useMemo(() => {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return () => {
      const next = {};
      if (!form.name.trim()) next.name = 'Please enter your name.';
      if (!emailRe.test(form.email)) next.email = 'Enter a valid email address.';
      if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
      return next;
    };
  }, [form]);

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // Simulate submit
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      // Clear form
      setForm({ name: '', email: '', message: '' });
      // Tiny confetti burst
      try {
        const count = 18;
        for (let i = 0; i < count; i++) {
          const conf = document.createElement('div');
          conf.style.position = 'fixed';
          conf.style.zIndex = 9999;
          conf.style.width = '8px';
          conf.style.height = '8px';
          conf.style.background = ['#ff6b35', '#ffd166', '#06d6a0', '#ffffff'][i % 4];
          conf.style.left = (window.innerWidth / 2) + 'px';
          conf.style.top = (window.innerHeight / 4) + 'px';
          conf.style.borderRadius = '2px';
          conf.style.transform = 'translate(-50%, -50%)';
          conf.style.pointerEvents = 'none';
          document.body.appendChild(conf);
          const angle = (i / count) * Math.PI * 2;
          const dist = 60 + Math.random() * 60;
          const dx = Math.cos(angle) * dist;
          const dy = Math.sin(angle) * dist;
          conf.animate(
            [
              { transform: `translate(-50%, -50%)`, opacity: 1 },
              { transform: `translate(${dx - 50}px, ${dy - 50}px) rotate(${Math.random()*360}deg)`, opacity: 0 }
            ],
            { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(.2,.8,.2,1)' }
          ).onfinish = () => conf.remove();
        }
      } catch {}
    }, 800);
  };

  if (sent) {
    return (
      <section className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
        <div className="success-badge fade-in" role="status" aria-live="polite">
          <span>✅</span> Message sent successfully
        </div>
        <h2 style={{ margin: '14px 0 6px' }}>Thanks!</h2>
        <p className="muted">We’ll get back to you soon—usually within one business day.</p>
        <a className="btn" href="/products" style={{ marginTop: 14 }}>Browse spices</a>
      </section>
    );
  }

  return (
    <section className="container" style={{ padding: '40px 0', position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <header className="rise-in">
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 14px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'linear-gradient(90deg, rgba(255,107,53,0.15), rgba(255,209,102,0.15))',
            color: '#ffd166', fontWeight: 800, letterSpacing: 0.4
          }}
        >
          <span role="img" aria-label="mail">✉️</span> Get in touch
        </div>
        <h2 style={{ fontSize: '2rem', margin: '10px 0 6px' }}>Contact</h2>
        <p className="muted" style={{ maxWidth: 720 }}>
          Questions, partnerships, or bespoke blends—drop a line and the team will reply swiftly.
        </p>
      </header>

      {/* Two-column layout */}
      <div className="grid" style={{ gap: 16, marginTop: 18, gridTemplateColumns: '1.2fr .8fr' }}>
        {/* Form */}
        <form className="card rise-in delay-1" style={{ padding: 16 }} onSubmit={onSubmit} noValidate>
          <div className="grid" style={{ gap: 12 }}>
            <div>
              <label className="muted" htmlFor="name" style={{ display: 'block', marginBottom: 6 }}>Name</label>
              <input id="name" className="input ring" placeholder="Your name" name="name" value={form.name} onChange={onChange} required />
              {errors.name && <div className="error-text">{errors.name}</div>}
            </div>

            <div>
              <label className="muted" htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>Email</label>
              <input id="email" className="input ring" placeholder="you@example.com" name="email" type="email" value={form.email} onChange={onChange} required />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>

            <div>
              <label className="muted" htmlFor="message" style={{ display: 'block', marginBottom: 6 }}>Message</label>
              <textarea id="message" className="input ring" rows="6" placeholder="Tell us about your needs…" name="message" value={form.message} onChange={onChange} required />
              {errors.message && <div className="error-text">{errors.message}</div>}
            </div>
          </div>

          <div className="flex" style={{ marginTop: 12 }}>
            <button className="btn" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send'}
            </button>
            <a className="btn" style={{ background: '#06d6a0' }} href="/products">Browse spices</a>
          </div>
        </form>

        {/* Location card with map */}
        <aside className="map-card rise-in delay-2">
          <div className="card-body" style={{ padding: 16 }}>
            <div className="flex-between">
              <h3 style={{ margin: 0 }}>Our Location</h3>
              <span className="badge">Bangalore</span>
            </div>
            <p className="muted" style={{ marginTop: 6 }}>
              Karnataka, India • Hours: Mon–Sat, 10:00–18:00 IST
            </p>
          </div>
          {/* Google Maps embed for Bangalore, Karnataka, India */}
          <div style={{ width: '100%', height: 320 }}>
            <iframe
              title="Bangalore, Karnataka, India"
              src="https://www.google.com/maps?q=Bangalore%2C%20Karnataka%2C%20India&hl=en&z=12&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="card-body" style={{ padding: 16 }}>
            <div className="grid" style={{ gap: 10 }}>
              <div className="flex">
                <span>📍</span>
                <span className="muted">Central Bangalore, Karnataka 560001</span>
              </div>
              <div className="flex">
                <span>✉️</span>
                <a className="muted" href="mailto:hello@spice-heaven.example">hello@spice-heaven.example</a>
              </div>
              <div className="flex">
                <span>📞</span>
                <a className="muted" href="tel:+919000000000">+91 90000 00000</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
