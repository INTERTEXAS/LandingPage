import React from 'react';

export default function Footer({ authorName }) {
  return (
    <footer style={{
      background: '#040711',
      borderTop: '1px solid var(--glass-border)',
      padding: '3.5rem 0 2rem 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--glass-border)'
        }}>
          {/* Brand Logo & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src="/logo-lines.png"
              alt="Logo MALZ.DEV"
              style={{
                height: '34px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.4))'
              }}
            />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: '#ffffff'
            }}>
              CuadraPro
            </span>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Inicio</a>
            <a href="#mentores" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Mentores</a>
            <a href="#venta" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Video de venta</a>
            <a href="#tutorial" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tutorial</a>
            <a href="#spa" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Probar SPA</a>
            <a href="#documentacion" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Documentación</a>
            <a href="#contacto" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contacto</a>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          paddingTop: '1.75rem',
          fontSize: '0.88rem',
          color: 'var(--text-dim)'
        }}>
          © 2026 {authorName || 'Miguel Lagunes'} — Proyecto Final Integrador • CuadraPro Single Page Application
        </div>
      </div>
    </footer>
  );
}
