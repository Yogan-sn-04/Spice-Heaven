import React, { useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './components/Cart.jsx';

const PRODUCTS = [
  { id: 'turmeric', name: 'Turmeric Powder', price: 4.5, image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/15065/conversions/fa246ce0-054b-4892-bf30-5eb43cd938aa-thumb.jpg', origin: 'India', heat: 0 },
  { id: 'cumin', name: 'Cumin Seeds', price: 3.9, image: 'https://t3.ftcdn.net/jpg/07/11/82/16/360_F_711821694_gIzpYDAE246N9Bh6DaWDsK7xOOKg9Rfv.jpg', origin: 'Middle East', heat: 0 },
  { id: 'coriander', name: 'Coriander Seeds', price: 3.5, image: 'https://i0.wp.com/gachwala.in/wp-content/uploads/2022/07/Coriander-Seeds-Chinese-parsley.jpg?fit=1000%2C1000&ssl=1', origin: 'Morocco', heat: 0 },
  { id: 'paprika', name: 'Smoked Paprika', price: 5.2, image: 'https://elthecook.co.in/cdn/shop/products/smokedpaprika.jpg?v=1653913674', origin: 'Spain', heat: 2 },
  { id: 'pepper', name: 'Black Pepper', price: 6.4, image: 'https://keralaspicecart.com/wp-content/uploads/2020/10/layer1-1.png', origin: 'Vietnam', heat: 1 },
  { id: 'cardamom', name: 'Green Cardamom', price: 8.9, image: 'https://vibrantliving.in/cdn/shop/files/CardamomGreen.png?v=1731059940&width=600', origin: 'Guatemala', heat: 0 },
  { id: 'clove', name: 'Cloves Whole', price: 5.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRle2at2TKRZS_weAOPojbql0t4_Jv6W2GzRA&s', origin: 'Zanzibar', heat: 1 },
  { id: 'cinnamon', name: 'Ceylon Cinnamon', price: 7.2, image: 'https://spicestationsilverlake.com/wp-content/uploads/2021/07/ceyloncinnamon-scaled-e1626364809612.jpg', origin: 'Sri Lanka', heat: 0 },
  { id: 'mace', name: 'Mace Blades', price: 9.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VdMO5JH3wyZFUegSKv35iavN3LYn2shbOg&s', origin: 'Indonesia', heat: 0 },
  { id: 'chili', name: 'Kashmiri Chili', price: 4.9, image: 'https://m.media-amazon.com/images/I/71Cgj6HPucL.jpg', origin: 'India', heat: 3 },
  { id: 'garam', name: 'Garam Masala', price: 6.9, image: 'https://keralaspicecart.com/wp-content/uploads/2020/10/kerala-spice-cart-garam-masala.jpg', origin: 'India', heat: 2 }
];


function useCart() {
  const [items, setItems] = useState(() => {
    const raw = localStorage.getItem('spice-heaven:cart');
    return raw ? JSON.parse(raw) : {};
  });
  useEffect(() => {
    localStorage.setItem('spice-heaven:cart', JSON.stringify(items));
  }, [items]);

  const add = (product) => setItems(prev => {
    const next = { ...prev };
    next[product.id] = (next[product.id] || 0) + 1;
    return next;
  });
  const remove = (productId) => setItems(prev => {
    const next = { ...prev };
    delete next[productId];
    return next;
  });
  const dec = (productId) => setItems(prev => {
    const next = { ...prev };
    if (!next[productId]) return prev;
    next[productId] -= 1;
    if (next[productId] <= 0) delete next[productId];
    return next;
  });

  const totalCount = useMemo(() => Object.values(items).reduce((a, b) => a + b, 0), [items]);
  const totalPrice = useMemo(() => Object.entries(items).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(x => x.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0), [items]);

  return { items, add, remove, dec, totalCount, totalPrice };
}

export default function App() {
  const cart = useCart();

  return (
    <>
      <ParticleBackground />
      <header className="header">
        <div className="container">
          <Header cartCount={cart.totalCount} />
        </div>
      </header>

      <main className="container" style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={
            <Products products={PRODUCTS} onAdd={cart.add} />
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={
            <Cart items={cart.items} products={PRODUCTS} onAdd={cart.add} onDec={cart.dec} onRemove={cart.remove} total={cart.totalPrice} />
          } />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
}
