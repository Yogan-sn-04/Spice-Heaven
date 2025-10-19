import React from 'react';

const fallbackInr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

export default function ProductCard({ product, onAdd, formatPrice }) {
  const fmt = formatPrice || ((n) => fallbackInr.format(n));
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: 180, objectFit: 'cover' }}
        loading="lazy"
      />
      <div style={{ padding: 12 }}>
        <h3 style={{ margin: '4px 0 6px', fontWeight: 700 }}>{product.name}</h3>
        <div className="muted" style={{ marginBottom: 6 }}>Origin: {product.origin}</div>
        <div className="flex-between">
          <span className="badge">{fmt(product.price)}</span>
          <button className="btn" onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
