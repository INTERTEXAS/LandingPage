import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ spaName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Mentores", href: "#mentores" },
    { label: "Video de venta", href: "#venta" },
    { label: "Tutorial", href: "#tutorial" },
    { label: "Probar SPA", href: "#spa" },
    { label: "Testimonio", href: "#testimonio" },
    { label: "Documentación", href: "#documentacion" },
    { label: "Contacto", href: "#contacto" }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(10, 13, 20, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '75px'
      }}>
        {/* Logo / Nombre del Proyecto */}
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          color: 'var(--text-main)',
          fontSize: '1.35rem',
          fontWeight: 800
        }}>
          <img
            src="/logo-lines.png"
            alt="Logo MALZ.DEV"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))'
            }}
          />
          <span>{spaName}</span>
        </a>

        {/* Enlaces de Navegación (Desktop) */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        }} className="nav-desktop">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            display: 'none'
          }}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg-main)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
