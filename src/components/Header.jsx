import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  padding: '8px 10px',
  borderRadius: 10,
  color: isActive ? '#101010' : 'inherit',
  background: isActive ? '#ffd166' : 'transparent',
  fontWeight: 700
});

export default function Header({ cartCount = 0, cartTotalFormatted, formatPrice }) {
  return (
    <nav className="nav">
      <Link to="/" className="flex" aria-label="Spice Heaven home">
        <span style={{ fontWeight: 900, letterSpacing: 0.5 }}>🌶️ SPICE HEAVEN 🌶️</span>
        <span className="badge" style={{ marginLeft: 8 }}>Fresh And Well</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/products" style={linkStyle}>Products</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>

        <Link to="/cart" className="btn" aria-label="Cart">
          🛒 Cart {cartCount > 0 ? `(${cartCount})` : ''}
          {cartCount > 0 && (cartTotalFormatted || (formatPrice && formatPrice(0))) ? ` • ${cartTotalFormatted}` : ''}
        </Link>
      </div>
    </nav>
  );
}
