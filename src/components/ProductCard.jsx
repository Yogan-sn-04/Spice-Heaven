import React from 'react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card" role="article" aria-label={product.name}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: 180, objectFit: 'cover' }}
        loading="lazy"
      />
      <div className="card-body">
        <div className="flex-between">
          <h3 style={{ margin: 0 }}>{product.name}</h3>
          <span className="badge">${product.price.toFixed(2)}</span>
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          Origin: {product.origin} • Heat: {product.heat}/3
        </div>
        <button className="btn" style={{ marginTop: 10 }} onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
