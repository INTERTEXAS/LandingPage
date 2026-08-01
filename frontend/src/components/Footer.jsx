import React from 'react';

export default function Footer({ authorName }) {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '4rem 0 2rem 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border)'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src="/logo-lines.png"
              alt="CuadraPro"
              style={{
                height: '28px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(1) contrast(1.5)',
                opacity: 0.7
              }}
            />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              CuadraPro
            </span>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Inicio', href: '#hero' },
              { label: 'Mentores', href: '#mentores' },
              { label: 'Demo', href: '#venta' },
              { label: 'Tutorial', href: '#tutorial' },
              { label: 'SPA', href: '#spa' },
              { label: 'Docs', href: '#documentacion' },
              { label: 'Contacto', href: '#contacto' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-body)'
        }}>
          © 2026 {authorName || 'Miguel Lagunes'} — Proyecto Final Integrador • Conciliación Bancaria Inteligente
        </div>
      </div>
    </footer>
  );
}
