import React, { useMemo } from 'react';

export default function Cart({ items, products, onAdd, onDec, onRemove, total }) {
  const list = useMemo(() => {
    return Object.entries(items).map(([id, qty]) => {
      const p = products.find(x => x.id === id);
      return p ? { ...p, qty, line: p.price * qty } : null;
    }).filter(Boolean);
  }, [items, products]);

  if (list.length === 0) {
    return (
      <section style={{ padding: '32px 0' }}>
        <h2>Your Cart</h2>
        <p className="muted">Your cart is empty. Explore our spices and add your favorites!</p>
      </section>
    );
  }

  return (
    <section style={{ padding: '32px 0' }}>
      <h2>Your Cart</h2>
      <div className="grid" style={{ gap: 12, marginTop: 12 }}>
        {list.map(item => (
          <div key={item.id} className="card" style={{ padding: 12 }}>
            <div className="flex-between">
              <div className="flex">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 12 }}
                />
                <div>
                  <div style={{ fontWeight: 700 }}>{item.name}</div>
                  <div className="muted">${item.price.toFixed(2)} each</div>
                </div>
              </div>
              <div className="flex">
                <button className="btn" onClick={() => onDec(item.id)} aria-label="Decrease">−</button>
                <div style={{ minWidth: 34, textAlign: 'center', fontWeight: 700 }}>{item.qty}</div>
                <button className="btn" onClick={() => onAdd(item)} aria-label="Increase">+</button>
                <button className="btn" style={{ marginLeft: 8, background: '#ef476f', color: '#fff' }} onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
            <div className="flex-between" style={{ marginTop: 8 }}>
              <span className="muted">Line total</span>
              <span className="badge">${item.line.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-between" style={{ marginTop: 16 }}>
        <h3>Total</h3>
        <div className="badge" style={{ fontSize: 16 }}>${total.toFixed(2)}</div>
      </div>

      <button className="btn" style={{ marginTop: 14, width: '100%' }}>
        Checkout
      </button>
    </section>
  );
}
