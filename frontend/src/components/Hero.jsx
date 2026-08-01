import React from 'react';
import { ArrowRight, PlayCircle, Activity, Database, Layers } from 'lucide-react';
import HeroScene from './HeroScene';

export default function Hero({ config }) {
  const techStack = [
    "React SPA", "Three.js", "Vite", "JWT Auth", "SHA-256"
  ];

  return (
    <section id="hero" className="section" style={{
      paddingTop: '6rem',
      paddingBottom: '8rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Background Scene */}
      <HeroScene />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Eyebrow */}
        <div className="section-label" style={{ marginBottom: '1.5rem' }}>
          Conciliación Bancaria Inteligente
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: '1.5rem',
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)'
        }}>
          {config.spaName}
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.6
        }}>
          {config.tagline}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '5rem'
        }}>
          <a
            href={config.spaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
          >
            Iniciar Demo <ArrowRight size={18} />
          </a>

          <a
            href={config.tutorialAnchor}
            className="btn btn-secondary"
            style={{ padding: '1rem 2.2rem', fontSize: '1rem', background: 'var(--bg-primary)' }}
          >
            Reproducir tutorial <PlayCircle size={18} />
          </a>
        </div>

        {/* Dashboard preview */}
        <div style={{
          maxWidth: '920px',
          margin: '0 auto',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: 'var(--bg-card)',
          boxShadow: '0 4px 40px rgba(0, 0, 0, 0.08)',
          textAlign: 'left'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg-elevated)'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)'
              }} />
              Sistema Activo
            </div>
          </div>

          {/* KPI Cards */}
          <div style={{ padding: '2rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem'
            }}>
              {[
                { label: 'Transacciones', value: '12,847', sub: 'Último periodo fiscal', icon: <Activity size={18} color="var(--accent)" /> },
                { label: 'Fugas Detectadas', value: '$34,291 MXN', sub: 'Comisiones no justificadas', icon: <Database size={18} color="var(--cta)" /> },
                { label: 'Pasarelas', value: '4 activas', sub: 'Stripe · PayPal · MercadoPago', icon: <Layers size={18} color="var(--text-secondary)" /> }
              ].map((kpi, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.75rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600
                  }}>
                    {kpi.icon}
                    {kpi.label}
                  </div>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.02em'
                  }}>
                    {kpi.value}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {kpi.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Stack chips */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600
              }}>
                Infraestructura:
              </span>
              {techStack.map((t, idx) => (
                <span key={idx} style={{
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
