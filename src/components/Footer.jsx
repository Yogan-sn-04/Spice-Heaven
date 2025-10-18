import React from 'react';

export default function Footer() {
  return (
    <div className="flex-between" style={{ padding: '18px 0' }}>
      <div className="muted">© {new Date().getFullYear()} spice-heaven. All rights reserved.</div>
      <div className="flex">
        <a className="muted" href="https://example.com" target="_blank" rel="noreferrer">Privacy</a>
        <span className="muted">•</span>
        <a className="muted" href="https://example.com" target="_blank" rel="noreferrer">Terms</a>
      </div>
    </div>
  );
}
