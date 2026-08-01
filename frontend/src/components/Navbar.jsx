import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

export default function Navbar({ spaName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const links = [
    { label: "Mentores", href: "#mentores", id: "mentores" },
    { label: "Demo", href: "#venta", id: "venta" },
    { label: "Tutorial", href: "#tutorial", id: "tutorial" },
    { label: "SPA", href: "#spa", id: "spa" },
    { label: "Reflexión", href: "#testimonio", id: "testimonio" },
    { label: "Docs", href: "#documentacion", id: "documentacion" },
    { label: "Contacto", href: "#contacto", id: "contacto" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: scrolled ? 'var(--bg-primary)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          color: 'var(--text-primary)'
        }}>
          <img
            src="/logo-lines.png"
            alt="CuadraPro"
            style={{
              height: '44px',
              width: 'auto',
              objectFit: 'contain',
              filter: theme === 'light' ? 'brightness(0)' : 'brightness(0) invert(1)'
            }}
          />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}>{spaName}</span>
        </a>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }} className="nav-desktop">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'var(--accent-soft)' : 'transparent'
                }}
              >
                {link.label}
              </a>
            );
          })}
          
          <label className="theme-toggle-label">
            <input 
              className="theme-toggle-input" 
              type="checkbox" 
              checked={theme === 'dark'} 
              onChange={toggleTheme} 
            />
            <div className="theme-toggle-switch">
              <Sun size={16} className="icon-sun" />
              <Moon size={16} className="icon-moon" />
            </div>
          </label>
        </nav>

        {/* Mobile toggle */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="nav-mobile-toggle">
          <label className="theme-toggle-label" style={{ transform: 'scale(0.8)', margin: 0 }}>
            <input 
              className="theme-toggle-input" 
              type="checkbox" 
              checked={theme === 'dark'} 
              onChange={toggleTheme} 
            />
            <div className="theme-toggle-switch">
              <Sun size={16} className="icon-sun" />
              <Moon size={16} className="icon-moon" />
            </div>
          </label>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 500,
                  padding: '0.6rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'var(--accent-soft)' : 'transparent'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
