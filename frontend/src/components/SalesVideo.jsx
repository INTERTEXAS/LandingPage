import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign, Film } from 'lucide-react';

function VideoFallback({ title }) {
  return (
    <div className="video-fallback">
      <Film size={44} className="video-fallback-icon" />
      <div className="video-fallback-text">{title || 'Demo interactiva en preparación'}</div>
      <div className="video-fallback-sub">Pronto podrás ver el motor de CuadraPro en acción.</div>
    </div>
  );
}

export default function SalesVideo({ embedUrl, config }) {
  const [videoError, setVideoError] = useState(false);

  const stats = [
    { value: "99.8%", label: "Precisión de Conciliación", icon: <TrendingUp size={16} /> },
    { value: "< 3m", label: "Cruce de 10k Transacciones", icon: <Clock size={16} /> },
    { value: "100%", label: "Detección de Fugas", icon: <DollarSign size={16} /> }
  ];

  const benefits = [
    "Cruce automático entre Stripe, PayPal, MercadoPago y bancos.",
    "Identificación de comisiones no justificadas y retenciones.",
    "Reportes consolidados listos para auditoría fiscal e impuestos.",
    "Alertas en tiempo real ante discrepancias en depósitos."
  ];

  const isLocalVideo = embedUrl && embedUrl.endsWith('.mp4');

  return (
    <section id="venta" className="section" style={{
      background: 'var(--bg-primary)'
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-label">Demo de producto</div>
          <h2 className="section-title">El poder de la automatización</h2>
          <p className="section-subtitle">
            Descubre cómo CuadraPro elimina errores manuales y protege el flujo de efectivo de tu empresa con tecnología.
          </p>
        </div>

        {/* 2-column split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 480px) 1fr',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }} className="sales-split-grid">

          {/* Left: Video */}
          <div>
            {isLocalVideo ? (
              <div style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid var(--border)',
                  background: 'var(--bg-elevated)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}>
                  <Film size={14} /> Demo Comercial
                </div>
                <video
                  src={embedUrl}
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  playsInline
                  muted
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            ) : videoError ? (
              <VideoFallback title="Video de demostración" />
            ) : (
              <div className="video-responsive" style={{ borderRadius: '1rem', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                <iframe
                  src={embedUrl}
                  title="Video de Venta"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Right: Info panel (Typographic Dashboard) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Stats (Typographic, no cards) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '2.5rem'
            }}>
              {stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'left' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--text-dim)',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.25rem',
                    fontWeight: 600,
                    letterSpacing: '-0.04em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                    lineHeight: 1
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits (Typographic List) */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '-0.01em'
              }}>
                ¿Qué resuelve CuadraPro?
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', margin: 0, padding: 0 }}>
                {benefits.map((b, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--text-primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={config?.spaUrl || 'https://cuadra-pro.vercel.app/'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
            >
              Comenzar prueba gratis <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .sales-split-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
