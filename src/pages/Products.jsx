import React, { useMemo, useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';

export default function Products({ products, onAdd, formatPrice }) {
  const [q, setQ] = useState('');
  const [heat, setHeat] = useState('all');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .select-dark {
        appearance: none; -webkit-appearance: none; -moz-appearance: none;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.18);
        color: #000;
        padding-right: 34px;
        position: relative;
        border-radius: 10px;
      }
      .select-dark option { color: #000; background: #f4f4f7; }
      .select-dark:focus {
        outline: 2px solid #ffd166;
        box-shadow: 0 0 0 6px rgba(255,209,102,0.15);
      }
      .select-dark {
        background-image:
          linear-gradient(180deg, rgba(0,0,0,0) 0, rgba(0,0,0,0) 100%),
          url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffd166' d='M10 12L0 0h20L10 12z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 12px 8px;
      }
      @-moz-document url-prefix() {
        .select-dark { color: #000; background-color: rgba(255,255,255,0.85); }
        .select-dark option { color: #000; background: #fff; }
      }
      select.select-dark::-ms-value { color: #000; background: #fff; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const isPowder = (p) => {
    const n = p.name.toLowerCase();
    return n.includes('powder') || n.includes('paprika') || n.includes('masala') || n.includes('cinnamon');
  };
  const isSeed = (p) => {
    const n = p.name.toLowerCase();
    return n.includes('seed') || n.includes('seeds') || n.includes('cumin') || n.includes('coriander') || n.includes('cardamom');
  };
  const isHeatForward = (p) => {
    const n = p.name.toLowerCase();
    return n.includes('chili') || n.includes('pepper') || p.heat >= 2;
  };

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return products.filter(p => {
      const nameHit = !t || p.name.toLowerCase().includes(t);
      if (!nameHit) return false;
      if (category !== 'all') {
        if (category === 'powder' && !isPowder(p)) return false;
        if (category === 'seeds' && !isSeed(p)) return false;
        if (category === 'heat' && !isHeatForward(p)) return false;
      }
      const heatHit = heat === 'all' || String(p.heat) === heat;
      return heatHit;
    });
  }, [q, category, heat, products]);

  return (
    <section style={{ padding: '28px 0' }}>
      <h2 style={{ marginTop: 0 }}>Our Spices</h2>

      <div className="card" style={{ padding: 12 }}>
        <div className="flex" style={{ alignItems: 'stretch', gap: 10 }}>
          <input
            className="input"
            placeholder="Search spices..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <select
            className="input select-dark"
            style={{ maxWidth: 200 }}
            value={category}
            onChange={e => setCategory(e.target.value)}
            aria-label="Category"
            title="Category"
          >
            <option value="all">Category: All</option>
            <option value="powder">Powder</option>
            <option value="seeds">Seeds</option>
            <option value="heat">Heat</option>
          </select>
          <select
            className="input select-dark"
            style={{ maxWidth: 160 }}
            value={heat}
            onChange={e => setHeat(e.target.value)}
            aria-label="Heat"
            title="Heat"
          >
            <option value="all">Heat: All</option>
            <option value="0">Mild (0)</option>
            <option value="1">Gentle (1)</option>
            <option value="2">Warm (2)</option>
            <option value="3">Hot (3)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-3" style={{ marginTop: 16 }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} formatPrice={formatPrice} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="muted" style={{ marginTop: 16 }}>No spices match your filters.</p>
      )}
    </section>
  );
}
